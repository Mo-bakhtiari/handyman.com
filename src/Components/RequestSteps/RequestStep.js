

function RequestStep(props) {
    const {
        imgSrc,
        alternative,
        stepNumber,
        hedding,
        description,
    } = props;

    return (
        <div className="request-step-guide" >
            <div className="image-wrapper" >
                <img loading='lazy' src={imgSrc} alt={alternative} />
                <span className="number" >
                    {stepNumber}
                </span>
            </div>
            <h4 >{hedding}</h4>
            <p >{description}</p>
        </div>
    )
}

export default RequestStep