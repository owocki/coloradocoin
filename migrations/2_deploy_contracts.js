var ColoradoCoin = artifacts.require("./ColoradoCoin.sol");
console.log("deploy 1");

module.exports = function(deployer) {
  deployer.deploy(ColoradoCoin);
};
