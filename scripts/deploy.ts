import { ethers } from "hardhat";

async function main() {
  const bountyPlatform = await ethers.deployContract("BountyPlatform");

  await bountyPlatform.waitForDeployment();

  console.log(
    `Bounty Platform is deployed to ${await bountyPlatform.getAddress()}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
