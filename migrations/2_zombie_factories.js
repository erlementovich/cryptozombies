const ZombieFactories = artifacts.require("ZombieFactories");

module.exports = function(deployer) {
  deployer.deploy(ZombieFactories);
};
