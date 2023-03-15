import { OverviewScene } from "./AppCanvas/OverviewScene";
import { Navigator } from "./AppNavigator/Navigator";
import { useParams } from "react-router-dom";
import { Defi } from "./AppCards/Defi";
import { Games } from "./AppCards/Games";
import { Nft } from "./AppCards/Nft";
import { Social } from "./AppCards/Social";
import { Tools } from "./AppCards/Tools";
import { Wallet } from "./AppCards/Wallet";

export function EcosystemApps(){
    let { id } = useParams();
/*conditionally renders components based on the url id*/ 
    return(
        <div className="ecosystem-apps">
        <Navigator />
        <div className="ecosystem-apps-container">
        {id === "defi" && <Defi />}
        {id === "games" && <Games />}
        {id === "nft" && <Nft />}
        {id === "social" && <Social />}
        {id === "tools" && <Tools />}
        {id === "wallet" && <Wallet />}
        </div>
        {id == null && <OverviewScene />}
      </div>
    );
}