import { OverviewCanvas } from "./OverviewCanvas";
import massaLove from "../../../../assets/img/massa_love.png";
import { useState } from "react";

export function OverviewScene(){
    const [activeClass, setActiveClass] = useState("overview-img-none")
    // if helpBtn ? : ;

    const handleBtnClick =()=>{
        if (activeClass === "overview-img-none" ? setActiveClass("overview-img-display") :  setActiveClass("overview-img-none"));
    }

    return(
        <div className="overview-scene">
            <OverviewCanvas/>
            <div className="overview-tuto-containter">
            <img className={activeClass} src={massaLove} alt="" />
            <p className={activeClass}>Use your mouse to explore our ecosystem <br></br> & click on the nodes to see who uses our blockchain </p>
            <div className={"help-container-display"} onClick={handleBtnClick} >
                <p className="help" >?</p>
            </div>
            </div>
        </div>

    )
}