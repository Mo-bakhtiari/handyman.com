export function ToggleBars({ MenuVisibility, setMenuVisibility }) {

    return (
        <div className="toggle-bars" >
            <i
                onClick={() => setMenuVisibility(!MenuVisibility)}
                className="fa fa-bars"
                aria-hidden="true"
            ></i>
        </div>
    )
}