import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import {IoIosStar, IoIosStarOutline} from "react-icons/io";

const SingleReview = ({reviewData}) => {
    const numberOfStars = reviewData.stars;
    const numberOfEmptyStars = 5 - reviewData.stars;
    return (

        <div className="single-review">
            <div className="single-review__content">
                {/*=======  rating  =======*/}
                <div className="single-review__rating">
                    {
                        Array.from({length: numberOfStars}, (_, i) => (
                            <IoIosStar/>
                        ))
                    }
                    {
                        Array.from({length: numberOfEmptyStars}, (_, i) => (
                            <IoIosStarOutline/>
                        ))
                    }
                </div>

                {/*=======  username and date  =======*/}
                <p className="username">
                    {reviewData.name} <span className="date">/ {reviewData.date}</span>
                </p>

                {/*=======  message  =======*/}
                <p className="message">
                    {reviewData.body}
                </p>
                {/*=======  End of message  =======*/}
            </div>
        </div>)

}

export default SingleReview;