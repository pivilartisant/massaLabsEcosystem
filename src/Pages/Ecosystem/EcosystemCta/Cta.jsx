export function Cta(){
    return(
        <div className="cta">
            <div className="cta-header-container">
                <h3 className="cta-header-title">Build with Massa !</h3>
            </div>
            <div className="cta-buttons">
                <a className="cta-button cta-button-fill" href="https://docs.massa.net/en/latest/web3-dev/smart-contracts.html#introduction" target={"_blank"}>Build on Massa</a>
                <a className="cta-button cta-button-transparent" href="https://docs.google.com/forms/d/1AelPGkMs_-6K_wWCG1G6bFFdt0hD6y9wq3mVOsT42f4/prefill"  target={"_blank"}>Add your App </a>
                <a className="cta-button cta-button-transparent" href="https://massa.net/grants" target={"_blank"}>Apply for a grant</a>
            </div>
        </div>
    )
}