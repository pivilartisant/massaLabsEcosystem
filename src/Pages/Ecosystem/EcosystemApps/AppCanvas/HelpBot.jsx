import massaLove from "../../../../assets/img/massa_love.png";
import { useState } from "react";

//just some simple react useState hooks to enable and disable our favorite robot

export function HelpBot(){
    const [activeClass, setActiveClass] = useState("overview-help-none")

    const handleBtnClick =()=>{
        if (activeClass === "overview-help-none" ? setActiveClass("overview-help") :  setActiveClass("overview-help-none"));
    }
    return(
        <div className="overview-tuto-containter">
            <div className={activeClass}>
                <img className="overview-help-img" src={massaLove} alt="" />
                    <p className="overview-help-text" >Use your mouse to explore our ecosystem & click on the nodes to see who uses our blockchain </p>
            </div>
            <div className={"help-container-display"} onClick={handleBtnClick} >
                <p className="help" >?</p>
            </div>
        </div>
    )
}