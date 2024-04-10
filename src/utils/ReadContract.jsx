import React from "react";
import { useReadContract, useReadContracts } from "wagmi";
import { message } from "antd";

import MyContractABI from "../contract/Abi.json";
import { useState } from "react";
import { useEffect } from "react";


export const ReadContract = ({tokenA, tokenB}) => {
  const { data, error, isPending } = useReadContract({
        abi: MyContractABI,
        functionName: "getRate",
        address: "addredd",
        args: [tokenA, tokenB]
  });

  useEffect(() => {
    if(error && error.shortMessage != '') {
      message.error(error.shortMessage);
    }
  }, [error])

  return (
    <>
    {
      isPending ? <div className="mt-3">Loading...</div> 
      : error ? ''
      : <div className="mt-3">Rate: {data}</div>
    }
    </>
  );
};
