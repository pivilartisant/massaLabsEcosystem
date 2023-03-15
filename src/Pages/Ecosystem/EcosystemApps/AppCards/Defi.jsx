import dusa from "../../../../assets/img/dusa.png";
import retreeb from "../../../../assets/img/retreeb.png";
import arrow from "../../../../assets/img/linkArrow.png";

export function Defi(){
    return(
        <div className="card">
        <div className="card-container">
            <img className="card-img" src={dusa} alt="dusa" />
        <div className="card-text-container">
        <h6 className="card-text-title">Dusa</h6>
        <p className="card-text-desc">The Dusa Protocol is the first DEX with decentralized frontend and automatic orders.</p>
        <p className="card-text-link-dec">
            visit <a className="card-text-link" href="https://dusa.io/" target={"_blank"}>dusa.io </a>  
            <img className="card-link-arrow" src={arrow} alt="link arrow" />
        </p>
        </div>
    </div>

    <div className="card-container">
            <img className="card-img" src={retreeb} alt="retreeb" />
        <div className="card-text-container">
            <h6 className="card-text-title">Retreeb</h6>
                <p className="card-text-desc">Retreeb is the 1st distributed payment solution that shares its network fees to funding social and solidarity projects.</p>
                    <p className="card-text-link-dec"> visit <a className="card-text-link" href="https://retreeb.io/" target={"_blank"}>retreeb.io </a>  
                <img className="card-link-arrow" src={arrow} alt="link arrow" />
            </p>
        </div>
    </div>
</div>
    )
}