import { OverviewCanvas } from "./OverviewCanvas";
import { HelpBot } from "./HelpBot";
//This is here the magic happens, here you have the component that renders the 3D scene and adds the little tutorial bot

export function OverviewScene(){

    return(
        <div className="overview-scene">
            <OverviewCanvas/>
            <HelpBot/>
        </div>

    )
}