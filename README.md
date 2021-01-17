# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# web3 activation with metamask

this demonstrates the most simple activation of a web3 instance based on a metamask provider that works across components without depending on any other library.

- The web3 instance is shared by a common Web3Context
- context is based on React hooks (`useContext` uses `useState` state vars)
- it also shares a `connect` method so you can connect from anywhere
- it shares a `accounts` state variable. If you'd were to request the accounts on each of your components e.g. in an effect that runs after web3 changes, you'd face Metamask issues since it only allows you to call `eth_requestAccounts` once at a time
- reloads accounts when accounts are changed in Metamask
- reloads the whole page when network is changed (as suggested by Metamask)