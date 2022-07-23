const hre = require("hardhat");

async function main() {
  const CreatorFundContract = await hre.ethers.getContractFactory("CreatorFundContract");
  const creatorFundContract = await CreatorFundContract.deploy();
  await creatorFundContract.deployed();
  console.log("CreatorFundContract deployed to:", creatorFundContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
