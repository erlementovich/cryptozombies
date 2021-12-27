import ZombieFactories from "@/contracts/ZombieFactories.json";

const options = {
  web3: {
    block: false,
    fallback: {
      type: "ws",
      url: "ws://127.0.0.1:9545"
    }
  },
// The contracts to monitor
  contracts: [ZombieFactories],
  events: {
    ZombieFactories: ["OwnershipTransferred", "Transfer", "NewZombie", "Approval"]
  },
  polls: {
    accounts: 15000
  }
};
export default options;
