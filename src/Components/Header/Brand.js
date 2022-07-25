import brandLogo from '../../assets/brand-logo.png';


export function Brand() {
    return (
        <div id='brand' >
            <h1 id='brand-name'>هندیمن
                <span>
                    <img src={brandLogo} id='brand-logo' alt='logo' />
                </span>
            </h1>
        </div>
    )
}