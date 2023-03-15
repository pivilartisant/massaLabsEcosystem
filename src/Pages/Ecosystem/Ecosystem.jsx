import { Header } from "./Header/Header";
import "./ecosystem.css"
import { EcosystemApps } from "./EcosystemApps/EcosystemApps";
import { Cta } from "./EcosystemCta/Cta";

export function Ecosystem(){
    return(
        <div className="ecosystem">
            {/* Three Components for maximum clarity */}
            <Header/>
            {/* The component bellow deals with the 3D scene and cards */}
            <EcosystemApps/>
            <Cta/>  
        </div>
    )
}