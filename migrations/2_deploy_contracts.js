var ColoradoCoin = artifacts.require("./ColoradoCoin.sol");

module.exports = function (deployer) {
    deployer.deploy(ColoradoCoin);
};
