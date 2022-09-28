import { createContext, useEffect, useState } from "react";
import { ethers } from "ethers";
import { chainIds } from "../constants/chainId";
import { getChainId } from "../utils";

import nftContractAbi from "../contracts/GoblinNFT.json";
import stakeContractAbi from "../contracts/GoblinStake.json";

// import {} from "../contracts/abi.json" secondary abi

export const AppContext = createContext();

const ContextProvider = ({ children }) => {
  const goerliRPC = process.env.REACT_APP_RPC_ENDPOINT;
  console.log(goerliRPC);

  const nftContractAddress = "0xE52B8CEB1B40E90c41f778DAb070aF2A793CdD8e";
  const stakeContracAddress = "0x4ad2dA71424387A32FcFfcFc474cE38d11C5F810";

  // console.log(stakeContractAbi);
  // console.log(nftContractAbi);

  // const staticProvider = new ethers.providers.JsonRpcProvider(goerliRPC);
  // const staticNFTContract = new ethers.Contract(
  //   nftContractAddress,
  //   nftContractAbi,
  //   staticProvider
  // );

  const [userAddress, setUserAddress] = useState(null);
  const [netWork, setNetwork] = useState("Ethereum");
  const [signer, setSigner] = useState(null);

  useEffect(() => {
    /**Get the network on page load (even if the user is not connected) */
    const getId = async () => {
      const id = await getChainId();
      setNetwork(chainIds[id]);
    };
    getId();

    /**Listen to changes in the network and sets the new value */
    window.ethereum.on("chainChanged", (chainId) => {
      setNetwork(chainIds[+chainId]);
    });
  }, []);

  return (
    <AppContext.Provider
      value={{
        userAddress,
        setUserAddress,
        netWork,
        setNetwork,
        signer,
        setSigner,

        stakeContracAddress,
        nftContractAddress,
        nftContractAbi,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
