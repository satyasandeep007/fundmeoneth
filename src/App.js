import React, { useEffect, useContext } from "react";
import Routing from "./Routing";
import Loader from "./layouts/Loader";
import "./App.css";
import { GlobalContext } from "./context/context";
import { getAllCreators, getLoggedInUser } from "./helpers/functions";
import { ethers } from "ethers";
import Config from "./Config";

const App = () => {
  const { loading, addWeb3ProviderToContext, addUserInfo, addCreatorData, setLoading } = useContext(GlobalContext);

  useEffect(() => {
    (async () => {
      try {
        await window.ethereum.enable();
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const accounts = await provider.listAccounts();
        const network = await provider.getNetwork();
        if (network.name !== Config.CREATOR_FUND.network)
          throw Error(`You are using ${network.name}, Please switch to ${Config.CREATOR_FUND.network} to use our App`);
        const signer = provider.getSigner();
        const Contract = new ethers.Contract(Config.CREATOR_FUND.ROPSTEN.CONTRACT_ADDRESS, Config.CREATOR_FUND.ROPSTEN.ABI, signer);
        await addWeb3ProviderToContext({
          provider,
          signer,
          accounts,
          Contract
        });
        const creatorData = await getAllCreators(Contract);
        await addCreatorData({
          creatorData
        });
        const userInfo = await getLoggedInUser(creatorData, accounts[0], Contract);
        await addUserInfo({
          userInfo
        });
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      } catch (error) {
        if (!error.message.includes("No User Found")) alert(error);
        setLoading(false);
      }
    })();
  }, []);

  // eslint-disable-next-line no-constant-condition
  return <>{loading ? <Loader /> : <Routing />}</>;
};

export default App;
