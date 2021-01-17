import {createContext, useState, useEffect} from 'react'
import Web3 from "web3";

export const Web3Context = createContext({
    web3: null,
    setWeb3: () => { },
    connect: () => {},
    accounts: [],
});

export const Web3Provider = ({ children }) => {
    const [web3, setWeb3] = useState(null);
    const [accounts, setAccounts] = useState([]);
    
    useEffect(() => {
        if (!web3) return;
        web3.eth.requestAccounts().then(setAccounts);
        if (web3.currentProvider.isMetaMask) {
            web3.currentProvider.on('accountsChanged', setAccounts);
            web3.currentProvider.on('chainChanged', (chainId) => {
                window.location.reload();
            });
        }
    }, [web3])
    

    async function connect() {
        const _web3 = new Web3(window.ethereum);
        setWeb3(_web3);
    }

    return <Web3Context.Provider
        value={{ web3, setWeb3, accounts, connect }}>
        {children}
      </Web3Context.Provider>
}