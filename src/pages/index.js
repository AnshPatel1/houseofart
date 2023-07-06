// import { useSelector } from "react-redux";
// import { getProducts } from "../lib/product";
// import { LayoutOne } from "../components/Layout";
// import { HeroSliderOne } from "../components/HeroSlider";
// import { ProductTab } from "../components/ProductTab";
// import { ImageCta } from "../components/Cta";
// import heroSliderData from "../data/hero-sliders/hero-slider-one.json";
// import imageCtaData from "../data/image-cta/image-cta-one.json";

// const Home = () => {
//   const { products } = useSelector((state) => state.product);
//   const newProducts = getProducts(products, "decor", "new", 9);
//   const popularProducts = getProducts(products, "decor", "popular", 9);
//   const saleProducts = getProducts(products, "decor", "sale", 9);

//   return (
//     <LayoutOne aboutOverlay={false}>
//       {/* hero slider */}
//       <HeroSliderOne sliderData={heroSliderData} />

//       {/* product tab */}
//       <ProductTab
//         newProducts={newProducts}
//         popularProducts={popularProducts}
//         saleProducts={saleProducts}
//       />

//       {/* image cta */}
//       <ImageCta
//         image={imageCtaData.image}
//         tags={imageCtaData.tags}
//         title={imageCtaData.title}
//         url={imageCtaData.url}
//       />
//     </LayoutOne>
//   );
// };

// export default Home;
import {Col, Container, Row} from "react-bootstrap";
import {IoIosAdd, IoIosBusiness} from "react-icons/io";
import {useSelector} from "react-redux";
import * as Layout from "../components/Layout";
import {ShopInfo} from "../components/Shop";
import {getProducts} from "../lib/product";
import {HeroSliderTwo} from "../components/HeroSlider";
import {CategorySlider} from "../components/Category";
import {SectionTitleOne} from "../components/SectionTitle";
import {ProductGridWrapper} from "../components/ProductThumb";
import {BlogPostSlider} from "../components/Blog";
import Anchor from "../components/anchor";
import categoryData from "../data/categories/category-one.json";
import blogData from "../data/blog-posts/blog-post-one.json";
import heroSliderData from "../data/hero-sliders/hero-slider-two.json";
import {TestimonialOne} from "../components/Testimonial";
import testimonialData from "../data/testimonials/testimonial-one.json";
import {BrandLogoOne} from "../components/BrandLogo";
import brandLogoData from "../data/brand-logos/brand-logo-one.json";
import {FaMoneyBillAlt, FaRegLifeRing, FaShoppingBasket} from "react-icons/fa";

const Home = () => {
    const {products} = useSelector((state) => state.product);
    const popularProducts = getProducts(products, "decor", "popular", 5);

    return (
        <Layout.LayoutFive>
            {/* hero slider */}
            <HeroSliderTwo
                sliderData={heroSliderData}
                spaceBottomClass="space-mb--50"
            />
            {/* category slider */}
            <CategorySlider
                categoryData={categoryData}
                spaceBottomClass="space-mb--r100"
            />

            {/* products */}
            <SectionTitleOne
                title="Spring summer 2020"
                subtitle="Find your style. Fall fashion 20xx"
            />
            <div className="products-wrapper space-mb--r100">
                <Container className="wide">
                    <Row className="five-column">
                        <ProductGridWrapper
                            products={popularProducts}
                            bottomSpace="space-mb--r50"
                        />
                    </Row>
                    <div className="text-center">
                        <Anchor
                            path="/home/decor"
                            className="lezada-loadmore-button"
                        >
                            <IoIosBusiness/> CHECK OUR CORPORATE COLLECTION
                        </Anchor>
                    </div>
                </Container>
            </div>
            <TestimonialOne
                testimonialData={testimonialData}
                backgroundImage="/assets/images/backgrounds/testimonials-bg.png"
            />
            <div className="space-mb--r100"></div>
            {/* brand logo */}
            <BrandLogoOne brandLogoData={brandLogoData}/>
            <div className="space-mb--r100"></div>
            <div
                className="icon-box-area border-top--grey border-bottom--grey space-pt--30 space-pb--30">
                <Container>
                    <Row className="space-mb-mobile-only--m30">
                        <Col md={4} className="space-mb-mobile-only--30">
                            <div className="icon-box icon-box--feature-icon">
                                <div className="icon-box--feature-icon__icon">
                                    <FaMoneyBillAlt/>
                                </div>
                                <div className="icon-box--feature-icon__content">
                                    <h3 className="title">MONEY BACK</h3>
                                    <p className="content">100% money back guarantee</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={4} className="space-mb-mobile-only--30">
                            <div className="icon-box icon-box--feature-icon">
                                <div className="icon-box--feature-icon__icon">
                                    <FaShoppingBasket/>
                                </div>
                                <div className="icon-box--feature-icon__content">
                                    <h3 className="title">FREE SHIPPING &amp; RETURN</h3>
                                    <p className="content">
                                        Free shipping on all orders over $99
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col md={4} className="space-mb-mobile-only--30">
                            <div className="icon-box icon-box--feature-icon">
                                <div className="icon-box--feature-icon__icon">
                                    <FaRegLifeRing/>
                                </div>
                                <div className="icon-box--feature-icon__content">
                                    <h3 className="title">24/7 SUPPORT</h3>
                                    <p className="content">Live fast and good support 24/7.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* blog post slider */}
            {/* <BlogPostSlider blogData={blogData} spaceBottomClass="space-mb--50" /> */}

            {/*shop info*/}
            {/* <ShopInfo /> */}
        </Layout.LayoutFive>
    );
};

export default Home;