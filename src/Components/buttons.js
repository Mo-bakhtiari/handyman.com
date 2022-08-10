import { useRef } from 'react'


export function SecondaryButton(props) {
    const content = useRef(null);
    const transientLayer = useRef(null);

    const useSecondaryBtnyHover = useHandleSecondaryBtnyHover(content)(transientLayer);

    const { className, ...restProps } = props;

    return (
        <button
            type="button"
            className={`btn btn-secondary ${className ? className : ''}`}
            onMouseEnter={useSecondaryBtnyHover}
            onMouseLeave={useSecondaryBtnyHover}
            {...restProps}
        >
            <div ref={content} className='btn-content'>{props.children}</div>
            <div ref={transientLayer} className='btn-secondary-tran'></div>
        </button>
    )
}


export function PrimaryButton(props) {
    const content = useRef(null);
    const transientLayer = useRef(null);

    const handlePrimaryBtnHover = useHandlePrimarBtnyHover(content)(transientLayer);

    const { className, ...restProps } = props;

    return (
        <button
            type="button"
            className={`btn btn-primary ${className ? className : ''}`}
            onMouseEnter={handlePrimaryBtnHover}
            onMouseLeave={handlePrimaryBtnHover}
            {...restProps}
        >
            <div ref={content} className='btn-content'>{props.children}</div>
            <div ref={transientLayer} className='btn-primary-tran'></div>
        </button>
    )
}


function useHandleSecondaryBtnyHover(contentElement) {
    return (transientLayer) => {
        const handleTransition = (e) => {
            if (e.type === 'mouseenter') {
                transientLayer.current.style.height = 100 + '%';
                contentElement.current.style.color = 'black';
            } else {
                transientLayer.current.style.height = ''
                contentElement.current.style.color = '';
            }
        }
        return handleTransition;
    }
}

function useHandlePrimarBtnyHover(contentElement) {
    return (transientLayer) => {
        const handleTransition = (e) => {
            if (e.type === 'mouseenter') {
                transientLayer.current.style.height = 100 + '%';
                contentElement.current.style.color = 'white';
            } else {
                transientLayer.current.style.height = ''
                contentElement.current.style.color = '';
            }
        }
        return handleTransition;
    }
}