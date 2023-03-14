import { Link } from "react-router-dom";
import { useState } from "react";

export function Navigator(){

    const [activeButton, setActiveButton] = useState("overview");

    const handleClick=(buttonName)=>{
        setActiveButton(buttonName)
    }
    

    return(
        <div className="navigator">
            <Link className={activeButton === "overview" ? "button active-button" : "button passive-button"} 
                onClick={()=>handleClick("overview")} 
                to={"/"} >
                Overview 
            </Link>
            <Link className={activeButton === "defi" ? "button active-button" : "button passive-button"} 
                onClick={()=>handleClick("defi")} 
                to={"/defi"}>
                DeFI    
            </Link>
            <Link className={activeButton === "games" ? "button active-button" : "button passive-button"} 
                onClick={()=>handleClick("games")} 
                to={"/games"}>
                Games  
            </Link>
            <Link className={activeButton === "nft" ? "button active-button" : "button passive-button"} 
                onClick={()=>handleClick("nft")} 
                to={"/nft"}>
                NFTs     
            </Link>
            <Link className={activeButton === "soc" ? "button active-button" : "button passive-button"} 
                onClick={()=>handleClick("soc")} 
                to={"/social"}>
                Social
            </Link>
            <Link className={activeButton === "tools" ? "button active-button" : "button passive-button"} 
            onClick={()=>handleClick("tools")} 
            to={"/tools"}>
            Tools
            </Link>
            <Link className={activeButton === "wallet" ? "button active-button" : "button passive-button"} 
            onClick={()=>handleClick("wallet")} 
            to={"/wallet"}
            >
            Wallet
            </Link>
        </div>
    )
}

// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// export function Navigator() {
//   const [activeButton, setActiveButton] = useState("Overview");

//   return (
//     <div className="navigator">
//       {["Overview", "DeFI", "Games", "nft", "Social", "Tools", "Wallet"].map(buttonName => (
//         <Link
//           key={buttonName}
//           className={activeButton === buttonName ? "button active-button" : "button passive-button"}
//           onClick={() => setActiveButton(buttonName)}
//           to={`/${buttonName.toLowerCase()}`}
//         >
//           {buttonName}
//         </Link>
//       ))}
//     </div>
//   );
// }



/*Legacy code incase of incompatibility*/
/* <a className="button active-button" href="/">Overview</a>
            <a className="button passive-button" href="/defi">DeFI</a>
            <a className="button passive-button" href="/games">Games</a>
            <a className="button passive-button" href="/nft">NFTs</a>
            <a className="button passive-button" href="/social">Social</a>
            <a className="button passive-button" href="/tools">Tools</a>
            <a className="button passive-button" href="/wallet">Wallet</a> */