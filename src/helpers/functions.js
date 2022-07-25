import { ethers } from "ethers";

export const getAllCreators = async (Contract) => {
  try {
    const totalCreatorsAddresses = await Contract.getAllCreatorsList();
    const creatorData = [];
    for (let index = 0; index < totalCreatorsAddresses.length; index++) {
      const creatorAddress = totalCreatorsAddresses[index];
      const user = await Contract.getUserData(creatorAddress);
      const userInfo = {};
      if (user && user[2] !== true) {
        userInfo.name = user[1];
        userInfo.isDisabled = user[2];
        userInfo.isCreator = user[3];
        userInfo.totalFundContributorsCount = ethers.utils.formatUnits(user[4], 0);
        userInfo.totalFundsReceived = ethers.utils.formatUnits(user[5], 0);
        userInfo.totalCreatorsFundedCount = ethers.utils.formatUnits(user[6], 0);
        userInfo.totalFundsSent = ethers.utils.formatUnits(user[7], 0);
        userInfo.withdrawbleBalance = ethers.utils.formatUnits(user[8], 0);
      }
      if (user[2] !== true && user[3] === true) {
        const creator = await Contract.getCreatorInfo(creatorAddress);
        userInfo.tags = creator[0].map((i) => i.trim());
        userInfo.photo = creator[1];
        userInfo.description = creator[2];
        userInfo.emailId = creator[3];
        userInfo.website = creator[4];
        userInfo.linkedIn = creator[5];
        userInfo.instagram = creator[6];
        userInfo.twitter = creator[7];
        userInfo.country = creator[8];
        userInfo.walletAddress = user[0];
        userInfo.name = creator[9];
      }
      userInfo && Object.keys(userInfo).length !== 0 && creatorData.push(userInfo);
    }
    return creatorData;
  } catch (error) {
    console.log(error, "error");
  }
};

export const getLoggedInUser = async (totalCreators, account, Contract) => {
  let userDetails = null;

  // If he is a creator
  if (totalCreators && totalCreators.length > 0) {
    totalCreators.forEach((item) => {
      if (item.walletAddress == account) {
        userDetails = item;
      }
    });
  }
  if (!userDetails) {
    // If he is normal user
    const user = await Contract.getUserData(account);
    if (user && user[2] !== true) {
      const userInfo = {};
      userInfo.name = user[1];
      userInfo.isDisabled = user[2];
      userInfo.isCreator = user[3];
      userInfo.totalFundContributorsCount = ethers.utils.formatUnits(user[4], 0);
      userInfo.totalFundsReceived = ethers.utils.formatUnits(user[5], 0);
      userInfo.totalCreatorsFundedCount = ethers.utils.formatUnits(user[6], 0);
      userInfo.totalFundsSent = ethers.utils.formatUnits(user[7], 0);
      userInfo.withdrawbleBalance = ethers.utils.formatUnits(user[8], 0);
      userDetails = userInfo;
    }
  }
  return userDetails;
};

export const addNewUserOnLogin = async (Contract) => {
  try {
    const randomString = (Math.random() + 1).toString(36).substring(2);
    const userName = `mebloc_user_${randomString}`;
    await Contract.createUser(userName);
  } catch (error) {
    console.log(error, "error");
  }
};
