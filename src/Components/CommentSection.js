import Comment from "./Comment";
import Carousel, { CarouselItem } from "./Carousel";
import smileEmoji from '../assets/smile.png';
import fakeComments from './data/fakeComments.json';



function CommentSection() {

    const commentCreator = (jsonComment) => {
        return jsonComment.map(comment => (
            <CarouselItem key={comment.id} >
                <Comment
                    fullName={comment.name}
                    repairType={comment.repairType}
                >
                    {comment.commentText}
                </Comment>
            </CarouselItem>
        ))
    }

    return (
        <div className="comment-section" >
            <div className='add' >
                <img loading='lazy' src={smileEmoji} />
                <span>رضایت مشتری یک شعار نیست</span>
            </div>
            <h3>مشتریان هندیمن چه میگویند؟</h3>
            <Carousel 
                NOActiveItems={1} 
                turnOnSlideShow={false}
                decrementRatio={0}
                decrementOffset={0}
                stepLength={1}
            >
                {commentCreator(fakeComments) }
            </Carousel>
        </div>
    )
}

export default CommentSection;