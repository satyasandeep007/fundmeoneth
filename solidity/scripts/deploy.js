const hre = require("hardhat");

async function main() {
  const CreateFundContract = await hre.ethers.getContractFactory("CreateFundContract");
  const createFundContract = await CreateFundContract.deploy();
  await createFundContract.deployed();
  console.log("CreateFundContract deployed to:", createFundContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
