import AddAnimationTo from './AddAnimationTo';
import ImageWobbler from './ImageWobbler';
import CommentSection from './CommentSection';
import commentPic from '../assets/comment.jpg';


function PostSection4() {

    return (
        <div className="post-section section-4" >
            <AddAnimationTo
                animationName="emergeFromRight"
                aproximateHeight={510} >
                <CommentSection />
            </AddAnimationTo>
            <AddAnimationTo
                animationName="emergeFromLeft"
                aproximateHeight={510}
            >
                <ImageWobbler src={commentPic} alt="از فروشگاه ما دیدن کنید" />
            </AddAnimationTo>
        </div>
    )
}


export default PostSection4;