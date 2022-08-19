const mongoose = require('mongoose');
bcrypt = require('bcrypt'); //sifre gizlemeye yarayan eklenti
const Schema = mongoose.Schema;


const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
 role: {
    type: String,
    enum: ['student', 'teacher', 'admin'],
    default: 'student',
  },});


UserSchema.pre('save', function (next) {
  const user = this;
  bcrypt.hash(user.password, 10, (err, hash) => {
user.password = hash;
next();
  });
}); //pre ile öncelikle yapılacak işlemler yazılır.



const User = mongoose.model('User', UserSchema);
module.exports = User;  