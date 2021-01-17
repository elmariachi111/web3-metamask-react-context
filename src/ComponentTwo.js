import { useContext, useEffect, useState } from "react";
import { Web3Context } from "./Web3Context";

export default function ComponentOne () {
    const { web3, accounts, connect } = useContext(Web3Context);
    const [balance, setBalance] = useState(0);

    useEffect(() => {
        if (!(web3 && accounts.length > 0)) return;
        (async () => {
            const bal = await web3.eth.getBalance(accounts[0]);
            setBalance(bal);
        })();
    }, [web3, accounts]);
    return (<div style={{borderTop: '1px solid dashed'}}>
        <h1>Im coponent 2</h1>
        {
            web3
                ? <div> Balance: {balance} Eth </div>
                : <div>If you were
                    <button onClick={ (e) => {
                        e.preventDefault();
                        connect();
                    }}>logged in</button>,
                    I'd present you your balance
                  </div>
        }
        
    </div>)
};