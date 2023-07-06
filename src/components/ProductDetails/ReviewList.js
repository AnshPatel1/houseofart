import SingleReview from "./SingleReview";

const ReviewList = ({reviews}) => {
    return reviews.map(review => (
        <SingleReview reviewData={review}/>
    ));

}

export default ReviewList;