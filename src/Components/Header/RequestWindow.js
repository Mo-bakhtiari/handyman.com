import { SecondaryButton } from '../buttons';
import { ImCross } from 'react-icons/im';
import { useRef, useEffect} from 'react';



export function RequestWindow({ reqWindowVisibility, setReqWindowVisibility }) {
    const requestWindow = useRef(null);
    const nameInput = useRef(null);
    const nameInputError = useRef(null);
    const phoneNumberInput = useRef(null);
    const phoneNumberError = useRef(null);
    const selectInput = useRef(null);
    const selectInputError = useRef(null);
    const resultDialog = useRef(null);

    const nameIsValid = useRef(false);
    const phoneNumberIsValid = useRef(false);
    const selectIsValid = useRef(false);


    useEffect(() => {
        const requestWindowStyle = requestWindow.current.style;
        if (reqWindowVisibility) {
            requestWindowStyle.display = 'block'
            setTimeout(() => {
                requestWindowStyle.opacity = '1';
            }, 0);

        } else {
            requestWindowStyle.opacity = 0;
            setTimeout(() => {
                requestWindowStyle.display = 'none';
            }, 1000);

        }
    }, [reqWindowVisibility]);

    useEffect(() => {
        nameInput.current.addEventListener('blur', handleNameAlteration)
        phoneNumberInput.current.addEventListener('blur', handlePhoneNumberAlteration)
        selectInput.current.addEventListener('change', handleselectError);
        return () => {
            nameInput.current.removeEventListener('change', handleNameAlteration)
            phoneNumberInput.current.removeEventListener('change', handlePhoneNumberAlteration )
            selectInput.current.removeEventListener('change', handleselectError)
        }
    }, []);

    const toggleRequestWindow = () => {
        setReqWindowVisibility(false);
    }

    const handleNameAlteration = (e) => {
        nameInput.current.addEventListener('input', handleNameError);
        handleNameError(e);
        nameInput.current.removeEventListener('blur', handleNameAlteration);
    }
    
    const handleNameError = (e) => {
        const element = e.target? e.target : e.current;
        
        if (element.value === '') {
            nameIsValid.current = false;
        }else if (element.value.length < 7) {
            nameIsValid.current = false;
        }else {
            nameIsValid.current = true;
        }

        handleNameErrorMessage(element, nameInputError.current);
    }

    const handleNameErrorMessage = (inputElement, errorElement) => {

        if (inputElement.value === '') {
            errorElement.innerHTML = 'لطفا نام و نام خانوادگی خود را وارد نمایید';
        }else if (inputElement.value.length < 7) {
            errorElement.innerHTML = 'نام وارد شده صحیح نمی باشد';
        }else {
            errorElement.innerHTML = '';
        }
    }

    const handlePhoneNumberAlteration = (e) => {
        phoneNumberInput.current.addEventListener('input', handlePhoneNumberError);
        handlePhoneNumberError(e);
        phoneNumberInput.current.removeEventListener('blur', handlePhoneNumberAlteration);
    }

    const handlePhoneNumberError = (e) => {
        const element = e.target? e.target : e.current;

        if (!element.value) {
            phoneNumberIsValid.current = false;
        } else if (!element.value.startsWith('09') || element.value.length !== 11) {
            phoneNumberIsValid.current = false;
        } else {
            phoneNumberIsValid.current = true;
        }

        handlePhoneErrorMessage(element, phoneNumberError.current);
    }

    const handlePhoneErrorMessage = (inputElement, errorElement) => {
        if (!inputElement.value) {
            errorElement.innerHTML = 'لطفا شماره موبایل خود را وارد نمایید';
        } else if (!inputElement.value.startsWith('09') || inputElement.value.length !== 11) {
            errorElement.innerHTML = 'شماره موبایل وارد شده معتبر نمی باشد';
        } else {
            errorElement.innerHTML = '';
        }
    }

    const handleselectError = (e) => {
        const element = e.target? e.target : e.current;

        if (element.value === '') {
            selectIsValid.current = false;
        }else {
            selectIsValid.current = true;
        }

        handleselectErrorMessage(element, selectInputError.current);
    }

    const handleselectErrorMessage = (inputElement, errorElement) => {
        if (inputElement.value === 'default') {
            errorElement.innerHTML = 'لطفا نوع دستگاه مود نظر خود را وارد نمایید';
        }else {
            errorElement.innerHTML = '';
        }
    }

    const setFocusOn = () => {
        if (!nameIsValid.current) {
            nameInput.current.focus();
        }else if (!phoneNumberIsValid.current) { 
            phoneNumberInput.current.focus();
        }else if (!selectIsValid.current) { 
            selectInput.current.focus();
        }
    }

    const handleSubmit = (e) => {

        if (nameIsValid.current && phoneNumberIsValid.current && selectIsValid.current) {
            sendDataToServer();
        }else {
            handleNameAlteration(nameInput);
            handlePhoneNumberAlteration(phoneNumberInput);
            handleselectErrorMessage(selectInput.current, selectInputError.current);
            setFocusOn();
        }
        e.preventDefault();
    }

    const sendDataToServer = () => {
        resultDialog.current.innerHTML = 'در حال ارسال اطلاعات...';
        setTimeout(() => {
            resultDialog.current.innerHTML = 'با موفقیت ارسال شد';
        }, 3000);
        setTimeout(() => {
            resultDialog.current.innerHTML = '';
        }, 5000);
    }


    return (
        <div ref={requestWindow} className='Request-window-veil' >
            <div className="Request-window-wrapper" >
                <div className="Request-window" >
                    <ImCross onClick={toggleRequestWindow} />
                    <h2>هندیمن همیشه در کنار شماست</h2>
                    <div className="notice" >
                        <div className='blue-dot' ></div>
                        <p> شما می توانید جهت ثبت درخواست خود فرم زیر را تکمیل کنید.</p>
                    </div>
                    <form onSubmit={handleSubmit} id='Request-form'  >
                        <fieldset className='form-group' >
                            <div className='input-field name' >
                                <label htmlFor="full-name" >نام و نام خانوادگی</label>
                                <input ref={nameInput} type="text" name="full-name" placeholder="محمد بختیاری (مثال)" />
                                <label ref={nameInputError} className='error' htmlFor="full-name" ></label>
                            </div>
                            <div className='input-field phone-number' >
                                <label htmlFor="phone-number" >شماره موبایل</label>
                                <input 
                                    ref={phoneNumberInput}
                                    type="number" 
                                    name="phone-number" 
                                    placeholder="09xxxxxxxxx"
                                />
                                <label ref={phoneNumberError} htmlFor="phone-number" className='error' ></label>
                            </div>
                            <div className='input-field device-type' >
                                <label htmlFor="machine-type" >نوع دستگاه</label>
                                <select ref={selectInput} name="machine-type" defaultValue="default" >
                                    <option value='default'  disabled >دستگاه مورد نظر خود را انتخاب کنید</option>
                                    <option value="لباسشویی" >لباسشویی</option>
                                    <option value="ظرفشویی">ظرفشویی</option>
                                    <option value="یخچال فریزر و ساید بای ساید">یخچال فریزر و ساید بای ساید</option>
                                    <option value="اجاق گاز و گاز رومیزی">اجاق گاز و گاز رومیزی</option>
                                    <option value="فر و ماکروفر">فر و ماکروفر</option><option value="جاروبرقی و جاروشارژی">جاروبرقی و جاروشارژی</option>
                                    <option value="کولرگازی و اسپیلت">کولرگازی و اسپیلت</option>
                                    <option value="تلویزیون">تلویزیون</option>
                                    <option value="خشک کن">خشک کن</option>
                                    <option value="قهوه ساز و اسپرسوساز">قهوه ساز و اسپرسوساز</option>
                                    <option value="سایر">سایر</option>
                                </select>
                                <label ref={selectInputError} className='error' htmlFor="machine-type" ></label>
                            </div>
                        </fieldset>
                        <SecondaryButton  type="submit" className="Request-submit-btn" >ثبت درخواست</SecondaryButton>
                        <div ref={resultDialog} className="result" ></div>
                    </form>
                </div>
            </div>
        </div>
    )
}

