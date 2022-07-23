import React, { useEffect, useContext } from "react";
import Routing from "./Routing";
import Loader from "./layouts/Loader";
import { ethers } from "ethers";
import "./App.css";
import Config from "./Config";

import { GlobalContext } from "./context/context";

const App = () => {
  const { loading, setLoading, addWeb3ProviderToContext } = useContext(GlobalContext);

  useEffect(() => {
    (async () => {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const accounts = await provider.listAccounts();
        const signer = provider.getSigner();
        const Contract = new ethers.Contract(
          Config.CREATOR_FUND.KOVAN.CONTRACT_ADDRESS,
          Config.CREATOR_FUND.KOVAN.ABI,
          signer
        )
        await addWeb3ProviderToContext({
          provider,
          signer,
          accounts,
          Contract,
        });
        setLoading(false)
      } catch (error) {
        alert(
          "Failed to load web3, accounts, or contract. Check console for details."
        );
        console.error(error);
      }
    })();
  }, []);

  return <>{loading ? <Loader /> : <Routing />}</>;
};

export default App;
