import { useContext } from "react"
import CommonLoginComponent from "./CommonLoginComponent"
import {Web3Context} from "./Web3Context"

export default function ComponentOne() {
    const {web3, accounts} = useContext(Web3Context);

    return (<div>
        <h1>Im component 1</h1>
        {
            web3
            ? <ul>
                {accounts.map(a => <li key={a}>{a}</li>)}
              </ul>
            : <div>if you were logged in, I'd show your connected account</div>
        }
        <CommonLoginComponent />
    </div>)
};