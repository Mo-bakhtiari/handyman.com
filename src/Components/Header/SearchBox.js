import {useRef} from 'react';


export function SearchBox() {
    const form = useRef(null);

    let handleInputFocus = (e) => {
        form.current.style.outline = 0.1 + 'em solid yellow';
    }

    let handleInputBlur = () => {
        form.current.style.outline = '';
    }
    return (
        <div id='search-box-wrapper'>
            <form id='search-box' tabIndex='0' ref={form} >

                <i className="fas fa-search"></i>
                <input
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                    type="search"
                    placeholder="به دنبال چه میگردی ...؟" />
            </form>
        </div>
    )
}