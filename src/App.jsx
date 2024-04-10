/** @format */
import "./App.css";

import { ReadContract } from "./utils/ReadContract";
import { useState } from "react";
import { Button, Input } from "antd";

function App() {
  const [tokenA, setTokenA] = useState("");
  const [tokenB, setTokenB] = useState("");

  const [tokenAVal, setTokenAVal] = useState('');
  const [tokenBVal, setTokenBVal] = useState('');

  const fetchRateData = () => {
    setTokenAVal(tokenA);
    setTokenBVal(tokenB);
  }
  

  return (
    <div className='w-full h-screen flex items-center justify-center flex-col bg-black text-white font-sans'>
      <h1>Token Pair Rate App</h1>
      <p>This is a simple app built with React and Web3Modal.</p>
      <w3m-button />
      <div className="mt-3">
        <w3m-network-button />
      </div>
      <div className="mt-5">
        <Input value={tokenA} onChange={e => setTokenA(e.target.value)}></Input>
        <Input value={tokenB} onChange={e => setTokenB(e.target.value)} className="mt-3"></Input> 
      </div>

      <Button type='primary' className="mt-5" onClick={() => {fetchRateData()}}>Fetch</Button>
      {
        tokenAVal != '' && tokenBVal != '' ?
        <ReadContract tokenA={tokenAVal} tokenB={tokenBVal} />
        : ''
      }
    </div>
  );
}

export default App;
