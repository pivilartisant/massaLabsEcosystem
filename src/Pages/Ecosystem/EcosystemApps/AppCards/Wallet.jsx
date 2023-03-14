import bearby from "../../../../assets/img/bearby.png";
import energy8 from "../../../../assets/img/energy8.png"
import arrow from "../../../../assets/img/linkArrow.png";
import wallet from "../../../../assets/img/space_wallet.png";
export function Wallet(){
    return(
        <div className="card">
            <div className="card-container">
                <img className="card-img" src={bearby} alt="" />

                <div className="card-text-container">
                <h6 className="card-text-title">Bearby</h6>
                <p className="card-text-desc">Bearby is a web 3 wallet dedicated to  Massa. It has extended network settings and it never collects users’ data.</p>
                <p className="card-text-link-dec">
                    visit <a className="card-text-link" href="https://bearby.io/" target={"_blank"}>bearby.io </a>  
                    <img className="card-link-arrow" src={arrow} alt="link arrow" />
                </p>
                </div>
            </div>
            {/* different card */}
            <div className="card-container">
                <img className="card-img" src={energy8} alt="" />

                <div className="card-text-container">
                <h6 className="card-text-title">Energy8 Wallet</h6>
                <p className="card-text-desc">
                    A friendly crypto multichain wallet for web3 on Massa, Solana, Polygon and others in the future.
                    </p>
                <p className="card-text-link-dec">
                    visit <a className="card-text-link" href="https://chrome.google.com/webstore/detail/energy8-wallet/mdnaglckomeedfbogeajfajofmfgpoae" target={"_blank"}>energy8.io </a>  
                    <img className="card-link-arrow" src={arrow} alt="link arrow" />
                </p>
                </div>
            </div>

             {/* different card */}
             <div className="card-container">
                <img className="card-img" src={wallet} alt="" />

                <div className="card-text-container">
                 <h6 className="card-text-title">
                    Space Wallet
                 </h6>
                    <p className="card-text-desc">
                        The first mobile wallet that allows to send and receive tokens on Massa.
                    </p>
                <p className="card-text-link-dec">
                    visit <a className="card-text-link" href="https://github.com/bacanlabs/spacewallet/releases/tag/Android" target={"_blank"}>Github </a>  
                    <img className="card-link-arrow" src={arrow} alt="link arrow" />
                </p>
                </div>
            </div>
        </div>
        
    )
}