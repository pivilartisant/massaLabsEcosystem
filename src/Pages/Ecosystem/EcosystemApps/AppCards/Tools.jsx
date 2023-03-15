import tonana from "../../../../assets/img/tonana.png";
import massex from "../../../../assets/img/massex.png"
import kyve from "../../../../assets/img/kyve.png";
import arrow from "../../../../assets/img/linkArrow.png";

export function Tools(){
    return(
        <div className="card">
        <div className="card-container">
            <img className="card-img" src={massex} alt="massex" />

            <div className="card-text-container">
            <h6 className="card-text-title">Massexplo</h6>
            <p className="card-text-desc">Massexplo allows you to track and explore all the transactions taking place on the Massa blockchain.
                  </p>
            <p className="card-text-link-dec">
                visit <a className="card-text-link" href="https://massexplo.io/" target={"_blank"}>massexplo.io </a>  
                <img className="card-link-arrow" src={arrow} alt="link arrow" />
            </p>
            </div>
        </div>
        {/* different card */}
        <div className="card-container">
            <img className="card-img" src={kyve} alt="kyve" />

            <div className="card-text-container">
            <h6 className="card-text-title">Kyve</h6>
            <p className="card-text-desc">
            KYVE allows developers and applications to store and retrieve any data stream.
                </p>
            <p className="card-text-link-dec">
                visit <a className="card-text-link" href="https://www.kyve.network/" target={"_blank"}>kyve.network </a>  
                <img className="card-link-arrow" src={arrow} alt="link arrow" />
            </p>
            </div>
        </div>

         {/* different card */}
         <div className="card-container">
            <img className="card-img" src={tonana} alt="tonana" />

            <div className="card-text-container">
             <h6 className="card-text-title">
                Tonana
             </h6>
                <p className="card-text-desc">
                Tonana cross-chain bridge uses a lock-and-mint model for moving value between chains as well as wrapped assets.
                </p>
            <p className="card-text-link-dec">
                visit <a className="card-text-link" href="https://tonana.org/" target={"_blank"}>Tonana.org </a>  
                <img className="card-link-arrow" src={arrow} alt="link arrow" />
            </p>
            </div>
        </div>
    </div>
    )
}