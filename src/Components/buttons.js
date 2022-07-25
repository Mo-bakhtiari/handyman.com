import {useRef} from 'react'


export function SecondaryButton(props) {
    const transitionLayer = useRef(null)

    const handleHover = useHandleHover(transitionLayer);

    const {className, ...restProps} = props ;

    return (
        <button 
            type="button"
            className={`btn btn-secondary ${className}`}
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
            {...restProps}
        >
            <div className='btn-content'>{props.children}</div>
            <div ref={transitionLayer} className='btn-secondary-tran'></div>
        </button>
    )
}


export function PrimaryButton(props) {
    const transitionLayer = useRef(null)

    const handleHover = useHandleHover(transitionLayer);

    const {className, ...restProps} = props ;

    return (
        <button 
            type="button"
            className={`btn btn-primary ${className}`}
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
            {...restProps}
        >
            <div className='btn-content'>{props.children}</div>
            <div ref={transitionLayer} className='btn-primary-tran'></div>
        </button>
    )
}

function useHandleHover(transitionLayer) {
    const handleHover = (e) => {
        if (e.type === 'mouseenter') {
            transitionLayer.current.style.height = 100 + '%'
        } else {
            transitionLayer.current.style.height = ''
        }
    }
    return handleHover
}