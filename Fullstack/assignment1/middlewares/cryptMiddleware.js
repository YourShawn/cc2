const DriverInfo = require("../models/DriverInfo");
module.exports = (text) => {
     var cypherKey = "mySecretKey";
     var decipher = crypto.createDecipher("aes-256-cbc", cypherKey);
     var dec = decipher.update(text, "hex", "utf8");
     dec += decipher.final("utf8");
};
