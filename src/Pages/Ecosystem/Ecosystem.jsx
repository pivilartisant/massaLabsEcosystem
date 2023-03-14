import { Header } from "./Header/Header";
import "./ecosystem.css"
import { EcosystemApps } from "./EcosystemApps/EcosystemApps";

export function Ecosystem(){
    return(
        <div className="ecosystem">
            <Header/>
            <EcosystemApps/>
        </div>
    )
}