import { Header } from "./Header/Header";
import "./ecosystem.css"
import { EcosystemApps } from "./EcosystemApps/EcosystemApps";
import { Cta } from "./EcosystemCta/Cta";

export function Ecosystem(){
    return(
        <div className="ecosystem">
            <Header/>
            <EcosystemApps/>
            <Cta/>
        </div>
    )
}