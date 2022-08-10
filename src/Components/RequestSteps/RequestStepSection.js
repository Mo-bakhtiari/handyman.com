import RequestStep from "./RequestStep";
import step1 from '../../assets/step-1.png';
import step2 from '../../assets/step-2.png';
import step3 from '../../assets/step-3.png';
import step4 from '../../assets/step-4.png';


function RequestStepSection() {

    return (
        <div className="request-guide-section" >
            <h3>مراحل انجام درخواست شما</h3>
            <div className="steps" >
            <RequestStep 
                imgSrc={step1} 
                alternative="مرحله اول"
                stepNumber={1}
                hedding="ثبت درخواست توسط شما"
                description="درخواست خود را به صورت آنلاین در سایت ثبت نمایید و یا با 45396 تماس بگیرید."
            />
            <RequestStep 
                imgSrc={step2} 
                alternative="مرحله دوم"
                stepNumber={2}
                hedding="هماهنگی کارشناسان با شما"
                description="پس از تایید اطلاعات، کارشناسان در کمترین زمان به منظور هماهنگی با شما تماس خواهند گرفت.."
            />
            <RequestStep 
                imgSrc={step3} 
                alternative="مرحله سوم"
                stepNumber={3}
                hedding="مراجعه کارشناس واعلام هزینه"
                description="درخواست خود را به صورت آنلاین در سایت ثبت نمایید و یا با 45396 تماس بگیرید."
            />
            <RequestStep 
                imgSrc={step4} 
                alternative="مرحله چهارم"
                stepNumber={4}
                hedding="تست دستگاه و پایان سفارش"
                description="دستگاه به صورت کامل تست شده و صحیح سالم تحویل شما خواهد گردید..."
            />
            </div>
        </div>
    )
}

export default RequestStepSection;