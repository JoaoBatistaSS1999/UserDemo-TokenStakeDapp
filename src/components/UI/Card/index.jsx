import React from "react";
import Button from "../Button";
const Card = ({
  amount = "0.0",
  rewards,
  tokenImage,
  blocked,
  tokenName = "tokenName",
  description = "tokenDescription",
}) => {
  return (
    <div className="w-72 relative">
      {blocked && (
        <div className="absolute w-full h-full bg-[#0000007c] flex justify-center items-center cursor-pointer hover:bg-[#0000004b] rounded-xl">
          <p className="text-white font-extrabold text-xl">Comming soon</p>
        </div>
      )}

      <article className="p-4 bg-gray-800 border border-gray-700 rounded-xl">
        <div className="flex items-center text-white">
          <img
            alt="Token"
            src={tokenImage}
            className="object-cover w-16 h-16 rounded-full"
          />

          <div className="ml-3">
            <h5 className="text-lg font-medium text-white">{tokenName}</h5>

            <div className="flow-root">
              <p className="flex text-[12px] text-white flex-wrap">
                {description}
              </p>
            </div>
          </div>
        </div>
        <ul className="mt-4 space-y-2">
          <li>
            <div
              href="#"
              className="block h-full p-4 border border-gray-700 rounded-lg"
            >
              <div className="w-full flex justify-between items-baseline font-medium text-end text-white">
                <p className="text-xs">Balance</p>
                <h5>GoblinNFT</h5>
              </div>

              <div className="w-full flex justify-end mt-1 text-xs font-medium text-gray-300">
                {amount}
              </div>
            </div>
          </li>

          <li>
            <div
              href="#"
              className="block h-full p-4 border border-gray-700 rounded-lg"
            >
              <div className="w-full flex justify-between items-baseline font-medium text-end text-white">
                <p className="text-xs">Rewards</p>
                <h5>TokenName</h5>
              </div>

              <div className="w-full flex justify-end mt-1 text-xs font-medium text-gray-300">
                13.28
              </div>
            </div>
          </li>
        </ul>
        <div className="flex w-full justify-end gap-1 mt-5">
          <Button text={"stake"} />
          <Button text={"harvest"} />
          {/* <Button text={"unstake"} /> */}
        </div>
      </article>
    </div>
  );
};

export default Card;
