var crypto = require("crypto");

var cypherKey = "mySecretKey";

exports.encrypt = (text) => {
       var cipher = crypto.createCipher("aes-256-cbc", cypherKey);
       var crypted = cipher.update(text, "utf8", "hex");
       crypted += cipher.final("hex");
      return crypted;
};

exports.decrypt = (text) => {
var decipher = crypto.createDecipher("aes-256-cbc", cypherKey);
var dec = decipher.update(text, "hex", "utf8");
dec += decipher.final("utf8");
return dec;
};