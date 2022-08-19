const User = require("../models/User");
bcrypt = require("bcrypt"); //sifre gizlemeye yarayan eklenti
exports.createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);

    res.status(201).redirect("/login"); 
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Neu version of mongoose is not work with below code (await and callback)

    /*     await User.findOne({ email: email }, (err, user) => {
      if (user) {
        bcrypt.compare(password, user.password, (err, same) => {
          if (same) {
            res.status(200).send("YOU ARE LOGGED IN");
          }
        });
      }
    }
    ); */
    const user = await User.findOne({ email: email });
    if (user) {
      bcrypt.compare(password, user.password, (err, same) => {
        // compare is a function of bcrypt and check that password is same or not with user.password
        if (same) {
          // User Sessions
          req.session.userID = user._id;
          res.status(200).redirect("/users/dashboard");
        }
      });
    }
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};

exports.logoutUser = (req, res) => {
  req.session.destroy(() => {
    res.redirect("/");
  });
};

exports.getDashboardPage = async (req, res) => {
  const user = await User.findOne({_id: req.session.userID});  
  res.status(200).render("dashboard", {
    page_name: "dashboard",
    user,
  });
};
