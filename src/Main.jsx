import React, { useContext, useEffect, useState } from "react";
import Card from "./components/UI/Card";
import { AppContext } from "./context/appContext";
import Goblin from "../src/assets/Goblin.png";
import Magician from "../src/assets/Magician.png";
import Farm from "../src/assets/Farm.png";
import { ethers } from "ethers";

const Main = () => {
  const [nftAmount, setNftAmount] = useState(0);
  const {
    userAddress,
    netWork,
    staticNFTContract,
    nftContractAddress,
    nftContractAbi,
  } = useContext(AppContext);

  // goerli network
  useEffect(() => {
    const getNftBalance = async () => {
      if (window.ethereum === undefined) return console.log("true");

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const readContract = new ethers.Contract(
        nftContractAddress,
        nftContractAbi,
        provider
      );

      try {
        const rawBalance = await readContract.balanceOf(userAddress);
        console.log("address on main", userAddress);

        setNftAmount(ethers.utils.formatUnits(rawBalance, 0));
      } catch (error) {
        console.log("error on main");
        console.log(error);
      }
    };
    getNftBalance();
  }, [userAddress]);

  return (
    <div className="h-[calc(100vh-56px)] w-full flex justify-center items-center gap-10">
      <Card
        amount={nftAmount}
        tokenImage={Goblin}
        tokenName="GoblinNFT"
        description="Earn GoblinToken"
      />
      <Card tokenImage={Magician} blocked={true} />
      <Card tokenImage={Farm} blocked={true} />
    </div>
  );
};
export default Main;
