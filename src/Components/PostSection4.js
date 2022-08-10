import AddAnimationTo from './AddAnimationTo';
import ImageWobbler from './ImageWobbler';
import CommentSection from './CommentSection';
import commentPic from '../assets/comment.webp';


function PostSection4() {

    return (
        <div className="post-section section-4" >
            <AddAnimationTo
                animationName="emergeFromRight"
            >
                <CommentSection />
            </AddAnimationTo>
            <AddAnimationTo
                animationName="emergeFromLeft"
            >
                <ImageWobbler src={commentPic} alt="از فروشگاه ما دیدن کنید" />
            </AddAnimationTo>
        </div>
    )
}


export default PostSection4;