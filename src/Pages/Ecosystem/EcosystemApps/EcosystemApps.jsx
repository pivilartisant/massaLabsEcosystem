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
        {/* The /:id use used here with the useParams hook to redirect and dynamically render the cards */}
        <div className="ecosystem-apps-container">
        {id === "defi" && <Defi />}
        {id === "games" && <Games />}
        {id === "nft" && <Nft />}
        {id === "social" && <Social />}
        {id === "tools" && <Tools />}
        {id === "wallet" && <Wallet />}
        </div>
        {/* The /:id == null because in an irl scenario it would of been /ecosystem/overview */}
        {id == null && <OverviewScene />}
      </div>
    );
}