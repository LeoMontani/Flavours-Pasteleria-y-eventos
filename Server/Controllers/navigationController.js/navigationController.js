const path = require("path");

function goIndex(req, res){
  const filePath = path.join(__dirname, '../../../Client/index.html')
  res.sendFile(filePath);
};

function goLogin(req, res){
  const filePath = path.join(__dirname, '../../../Client/Login/login.html')
  res.sendFile(filePath);
};


module.exports = {
  goIndex,
  goLogin
}