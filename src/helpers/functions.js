import { ethers } from "ethers";

export const getAllCreators = async (Contract) => {
  try {
    const totalCreatorsAddresses = await Contract.getAllCreatorsList();
    console.log(totalCreatorsAddresses, "totalCreatorsAddresses");
    const creatorData = [];
    for (let index = 0; index < totalCreatorsAddresses.length; index++) {
      const creatorAddress = totalCreatorsAddresses[index];
      const creator = await Contract.getCreatorInfo(creatorAddress);
      const user = await Contract.getUserData(creatorAddress);
      const myCreator = {};
      myCreator.tags = creator[0];
      myCreator.photo = creator[1];
      myCreator.description = creator[2];
      myCreator.emailId = creator[3];
      myCreator.website = creator[4];
      myCreator.linkedIn = creator[5];
      myCreator.instagram = creator[6];
      myCreator.twitter = creator[7];
      myCreator.country = creator[8];
      myCreator.walletAddress = user[0];
      myCreator.name = creator[9];
      myCreator.isDisabled = user[2];
      myCreator.isCreator = user[3];
      myCreator.totalFundContributorsCount = ethers.utils.formatUnits(user[4], 0);
      myCreator.totalFundsReceived = ethers.utils.formatUnits(user[5], 0);
      myCreator.totalCreatorsFundedCount = ethers.utils.formatUnits(user[6], 0);
      myCreator.totalFundsSent = ethers.utils.formatUnits(user[7], 0);
      myCreator.withdrawbleBalance = ethers.utils.formatUnits(user[8], 0);
      creatorData.push(myCreator);
    }
    return creatorData;
  } catch (error) {
    console.log(error, "error");
  }
};

export const getLoggedInUser = async (totalCreators, account) => {
  console.log(totalCreators, "totalCreators", account);
  let userInfo = null;

  totalCreators &&
    totalCreators.length > 0 &&
    totalCreators.forEach((item) => {
      if (item.walletAddress == account) {
        userInfo = item;
      }
    });

  console.log(userInfo, "u");
  return userInfo;
};
