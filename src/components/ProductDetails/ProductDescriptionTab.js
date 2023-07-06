import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import {IoIosStar, IoIosStarOutline} from "react-icons/io";
import SingleReview from "./SingleReview";
import ReviewList from "./ReviewList";

const ProductDescriptionTab = ({product}) => {
    const reviewList = [
        {
            stars: 1,
            name: "Scott James",
            date: "April 5, 2020",
            body: "Thanks for always keeping your HTML themes up to date. Your level of support and dedication is second to none.",
        },
        {
            stars: 5,
            name: "Scott Young",
            date: "April 7, 2030",
            body: "Thanks for always keeping your HTML themes up to date. nd to none.",
        },
        {
            stars: 3,
            name: "Scott James",
            date: "April 5, 2020",
            body: "Thanks for always keeping your HTML themes up to date. Your level of support and dedication is second to none.",
        }
    ];
    return (
        <div className="product-description-tab space-pt--r100 space-mt--r100 border-top--grey">
            <Tab.Container defaultActiveKey="description">
                <Nav
                    variant="pills"
                    className="product-description-tab__navigation text-center justify-content-center space-mb--50"
                >
                    <Nav.Item>
                        <Nav.Link eventKey="description">Description</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="additionalInfo">
                            Additional Information
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="reviews">
                            Reviews {product.ratingCount ? `(${product.ratingCount})` : ""}
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
                <Tab.Content>
                    <Tab.Pane eventKey="description">
                        <div className="product-description-tab__details">
                            {product.fullDescription}
                        </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="additionalInfo">
                        <div className="product-description-tab__additional-info">
                            <table className="shop-attributes">
                                <tbody>
                                <tr>
                                    <th>Size</th>
                                    <td>
                                        <p>L, M, S, XS</p>
                                    </td>
                                </tr>
                                <tr>
                                    <th>Color</th>
                                    <td>
                                        <p>Black, Blue, Brown</p>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="reviews">
                        <div className="product-description-tab__review">
                            <h2 className="review-title space-mb--20">
                                {product.ratingCount ? product.ratingCount : ""} reviews on{" "}
                                {product.name}
                            </h2>
                            <ReviewList reviews={reviewList}/>
                            <h2 className="review-title space-mb--20">Add a review</h2>
                            <p className="text-center">
                                Your email address will not be published. Required fields are
                                marked *
                            </p>
                            {/*=======  review form  =======*/}
                            <div className="lezada-form lezada-form--review">
                                <form>
                                    <div className="row">
                                        <div className="col-lg-6 space-mb--20">
                                            <input type="text" placeholder="Name *" required/>
                                        </div>
                                        <div className="col-lg-6 space-mb--20">
                                            <input type="email" placeholder="Email *" required/>
                                        </div>
                                        <div className="col-lg-12 space-mb--20">
                      <span className="rating-title space-mr--20">
                        YOUR RATING
                      </span>
                                            <span className="product-rating">
                        <IoIosStarOutline/>
                        <IoIosStarOutline/>
                        <IoIosStarOutline/>
                        <IoIosStarOutline/>
                        <IoIosStarOutline/>
                      </span>
                                        </div>
                                        <div className="col-lg-12 space-mb--20">
                      <textarea
                          cols={30}
                          rows={10}
                          placeholder="Your review *"
                          defaultValue={""}
                      />
                                        </div>
                                        <div className="col-lg-12 text-center">
                                            <button
                                                type="submit"
                                                className="lezada-button lezada-button--medium"
                                            >
                                                submit
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            {/*=======  End of review form  =======*/}
                        </div>
                    </Tab.Pane>
                </Tab.Content>
            </Tab.Container>
        </div>
    );
};

export default ProductDescriptionTab;
