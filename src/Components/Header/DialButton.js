import { PrimaryButton } from '../buttons';

export function DialButton({setReqWindowVisibility}) {

    const toggleRequestWindow = () => {
        setReqWindowVisibility(true)
    }

    return (
            <PrimaryButton onClick={toggleRequestWindow}  className="dial-button" >
                <i className="fas fa-phone"></i>
                021-54321
            </PrimaryButton>
    )
}