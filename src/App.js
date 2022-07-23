import React, { useEffect, useContext } from "react";
import Routing from "./Routing";
import Loader from "./layouts/Loader";
import { ethers } from "ethers";
import "./App.css";
import Config from "./Config";
import { GlobalContext } from "./context/context";

const App = () => {
  const { loading, setLoading, addWeb3ProviderToContext, addCreatorData, accounts } = useContext(GlobalContext);

  useEffect(() => {
    (async () => {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const accounts = await provider.listAccounts();
        const signer = provider.getSigner();
        const Contract = new ethers.Contract(Config.CREATOR_FUND.GANACHE.CONTRACT_ADDRESS, Config.CREATOR_FUND.GANACHE.ABI, signer);
        await addWeb3ProviderToContext({
          provider,
          signer,
          accounts,
          Contract
        });
        await getAllCreators(Contract);
        setLoading(false);
      } catch (error) {
        alert("Failed to load web3, accounts, or contract. Check console for details.");
        console.error(error);
      }
    })();
  }, []);

  const getAllCreators = async (Contract) => {
    try {
      const totalCreatorsAddresses = await Contract.getAllCreatorsList();
      const creatorData = [];
      for (let index = 0; index < totalCreatorsAddresses.length; index++) {
        const creatorAddress = totalCreatorsAddresses[index];
        const creator = await Contract.getCreatorInfo(creatorAddress);
        const myCreator = {};
        (myCreator.tags = creator[0]),
          (myCreator.photo = creator[1]),
          (myCreator.description = creator[2]),
          (myCreator.emailId = creator[3]),
          (myCreator.website = creator[4]),
          (myCreator.linkedIn = creator[5]),
          (myCreator.instagram = creator[6]),
          (myCreator.twitter = creator[7]),
          (myCreator.country = creator[8]);
          (myCreator.totalFundsReceived = creator[9]);
        creatorData.push(myCreator);
      }
      setLoading(false);
      await addCreatorData({
        totalCount: Number(totalCreatorsAddresses.length),
        creatorData
      });
    } catch (error) {
      console.log(error, "error");
    }
  };

  return <>{loading ? <Loader /> : <Routing />}</>;
};

export default App;
