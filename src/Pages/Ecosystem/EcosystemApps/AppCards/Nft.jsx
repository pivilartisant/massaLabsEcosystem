import joyler from "../../../../assets/img/joyler.png";
import gummu from "../../../../assets/img/gummu.png";
import collectors from "../../../../assets/img/collectors.png";
import star from "../../../../assets/img/starOrigins.webp";
import massacar from "../../../../assets/img/massacar.png";
import mech from "../../../../assets/img/mecham.png";
import arrow from "../../../../assets/img/linkArrow.png";

export function Nft(){
    return(
        <div className="card">
            <div className="card-container">
                <img className="card-img" src={collectors} alt="nft collectors" />
                    <div className="card-text-container">
                    <h6 className="card-text-title">NFT Collectors</h6>
                        <p className="card-text-desc">Get access to every Massa NFT projects, track data and launch your collections.</p>
                    <p className="card-text-link-dec">visit <a className="card-text-link" href="https://nftcollectors.com/" target={"_blank"}>nftcollectors.com </a>  <img className="card-link-arrow" src={arrow} alt="link arrow" /></p>
                </div>
            </div>
        <div className="card-container">
            <img className="card-img" src={joyler} alt="joyler" />
                <div className="card-text-container">
                    <h6 className="card-text-title">Joyler</h6>
                <p className="card-text-desc">Joyler strives to fix Web2 social problems with Web3 tech and a hint of IRC nostalgia.</p>
            </div>
        </div>
 
         <div className="card-container">
            <img className="card-img" src={gummu} alt="gummu" />
            <div className="card-text-container">
             <h6 className="card-text-title">Gummu</h6>
                <p className="card-text-desc">Gummu is decentralized music streaming platform that is revolutionizing the way artists and fans interact.</p>
            </div>
        </div>
    
        <div className="card-container">
            <img className="card-img" src={star} alt="star origins" />
            <div className="card-text-container">
                <h6 className="card-text-title">Star Origins</h6>
                    <p className="card-text-desc">Star Origins is a Play & Earn Game. Choose your planet and send your fleet to outer space.</p>
                        <p className="card-text-link-dec"> visit <a className="card-text-link" href="https://starorigins.com/" target={"_blank"}>starorigins.com </a>  
                    <img className="card-link-arrow" src={arrow} alt="link arrow" />
                </p>
            </div>
        </div>

        <div className="card-container">
            <img className="card-img" src={massacar} alt="masscar" />
            <div className="card-text-container">
                <h6 className="card-text-title">Massacar</h6>
                    <p className="card-text-desc">Masscar is a car race game that allows to mint a car as a NFT and enhance it victory after victory.</p>
                        <p className="card-text-link-dec"> visit <a className="card-text-link" href="https://www.masscar.io/" target={"_blank"}>masscar.io </a>  
                    <img className="card-link-arrow" src={arrow} alt="link arrow" />
                </p>
            </div>
        </div>
        <div className="card-container">
            <img className="card-img" src={mech} alt="mecha-m" />
            <div className="card-text-container">
                <h6 className="card-text-title">Mecha-M</h6>
                    <p className="card-text-desc">The Mecha-M project combines a thrilling game, an immersive comic, and a window into the Massa ecosystem in a truly unique and innovative way.
                  </p>
            </div>
        </div>
    </div>
    )
}