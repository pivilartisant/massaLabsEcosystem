import { OverviewCanvas } from "./OverviewCanvas";
import massaLove from "../../../../assets/img/massa_love.png";

export function OverviewScene(){
    return(
        <div className="overview-scene">
            <OverviewCanvas/>
            <div className="overview-tuto-containter">
            <img className="overview-img" src={massaLove} alt="" />
            <p className="overview-text">Use your mouse to explore our ecosystem <br></br> & click on the nodes who uses our blockchain </p>
            </div>
        </div>

    )
}