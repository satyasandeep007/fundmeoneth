import React, { useEffect, useContext } from "react";
import Routing from "./Routing";
import Loader from "./layouts/Loader";
import "./App.css";
import { GlobalContext } from "./context/context";
import { getAllCreators, getLoggedInUser } from "./helpers/functions";
import { ethers } from "ethers";
import Config from "./Config";

const App = () => {
  const { loading, accounts, addWeb3ProviderToContext, addUserInfo, addCreatorData, setLoading } = useContext(GlobalContext);

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
        const creatorData = await getAllCreators(Contract);
        console.log(creatorData, "creatorData");
        await addCreatorData({
          creatorData
        });
        const userInfo = await getLoggedInUser(creatorData, accounts[0]);
        console.log(userInfo, "userInfo");

        await addUserInfo({
          userInfo
        });
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      } catch (error) {
        alert("Failed to load web3, accounts, or contract. Check console for details.");
        console.error(error);
      }
    })();
  }, []);

  // eslint-disable-next-line no-constant-condition
  return <>{loading ? <Loader /> : <Routing />}</>;
};

export default App;
