const path = require("path");

function goIndex(req, res){
  const filePath = path.join(__dirname, '../../Client/index.html')
  res.sendFile(filePath);
};

function goSignup(req, res){
  const filePath = path.join(__dirname, '../../Client/Signup/signup.html')
  res.sendFile(filePath);
};


module.exports = {
  goIndex,
  goSignup
}