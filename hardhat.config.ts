import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require("dotenv").config({ path: ".env" });

const config: HardhatUserConfig = {
  networks: {
    "fantom": {
      url: "https://rpc.ankr.com/fantom",
      accounts: [process.env.PRIVATE_KEY as string],
      chainId: 250
    }
  },
  solidity: {
    version: "0.8.18",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
};

export default config;
