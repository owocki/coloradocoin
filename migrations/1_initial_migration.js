var Migrations = artifacts.require("./Migrations.sol");
console.log("deploy 1");
module.exports = function(deployer) {
  deployer.deploy(Migrations);
};
