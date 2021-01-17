import { useContext, useEffect, useState } from "react";
import { Web3Context } from './Web3Context';

export default function CommonLoginComponent() {

    const {accounts, connect} = useContext(Web3Context);

    const [mmDetected, setMmDetected] = useState(false);
    
    useEffect(() => {
        setMmDetected(typeof window.ethereum !== 'undefined');
    }, [setMmDetected]);
    
    return <div>
         {mmDetected && accounts.length===0 &&
            <button onClick={connect}>Click to connect</button>
        }
    </div>
};