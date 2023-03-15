import joyler from "../../../../assets/img/joyler.png";
import amb from "../../../../assets/img/amb.png"
import gummu from "../../../../assets/img/gummu.png";
import arrow from "../../../../assets/img/linkArrow.png";


export function Social(){
    return(
        <div className="card">
            <div className="card-container">
            <img className="card-img" src={joyler} alt="joyler" />
                <div className="card-text-container">
                    <h6 className="card-text-title">Joyler</h6>
                        <p className="card-text-desc">Joyler strives to fix Web2 social problems with Web3 tech and a hint of IRC nostalgia.</p>
                </div>
            </div>
            <div className="card-container">
                <img className="card-img" src={amb} alt="amb" />
                <div className="card-text-container">
                    <h6 className="card-text-title">Amb</h6>
                        <p className="card-text-desc">Functional platform designed for crypto projects and successful implementation of their ambassador programs.</p>
                            <p className="card-text-link-dec">visit <a className="card-text-link" href="https://amb.place/" target={"_blank"}>amb.place </a>  
                        <img className="card-link-arrow" src={arrow} alt="link arrow" />
                    </p>
                </div>
            </div>
             <div className="card-container">
                <img className="card-img" src={gummu} alt="gummu" />
                    <div className="card-text-container">
                         <h6 className="card-text-title">Gummu</h6>
                    <p className="card-text-desc">Gummu is decentralized music streaming platform that is revolutionizing the way artists and fans interact.</p>
                </div>
            </div>
        </div>
    )
}