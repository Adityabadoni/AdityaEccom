import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import img2 from "../../assets/images/thumbnail-2.jpg";
import SideBar from "../../Component/SideBar/SideBar";
import { Button } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import Product from "../../Component/Products/Product";
// import Rating from '@mui/material/Rating';

// import ReactImageZoom from 'react-image-zoom';
import NewsletterImg from "../../assets/images/newsletter.png";
import Slider from "react-slick";
var Related = {
    dots: false,
    // infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    // autoplay: true,
    arrows: true,
    fade: false,
    centerMode: true,
  };
const DetailPage = () => {
  var settings2 = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
  };
  const [zoomImage, setZoomImage] = useState(
    "https://www.jiomart.com/images/product/original/491187309/good-life-whole-moong-500-g-product-images-o491187309-p491187309-0-202308311426.jpg"
  );
  const [bigImage, setBigImage] = useState([1500, 1500]);
  const [smallImage, setSmallImage] = useState([150, 150]);
  const [active, setActive] = useState(0);
  const [activeTabs, setActiveTabs] = useState(0);
  const zoomSLider = useRef();

  const goto = (url, index) => { 
    zoomSLider.current.slickGoTo(index);

    setZoomImage(url);
  };
  const isActive = (index) => {
    setActive(index);
  };
  return (
    <>
      <section className="detailsPage mt-5">
        <div className="breadcrumbWrapper">
          <div className="container-fluid">
            <nav aria-label="breadcrumb breadcrumb2">
              <ul class="breadcrumb">
                <li class="breadcrumb-item">
                  <Link>Home</Link>
                </li>
                <li class="breadcrumb-item">
                  <Link> Vegetable & Tuber</Link>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  Seed Of Changes Organic
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="container-fluid detailsContainer  mt-3">
          <div className="row">
            <div className="col-md-4  ">
              <div className="productZoom">
                <Slider {...settings2} className="zoomSliderbig">
                  <div className="item">
                    <InnerImageZoom
                      zoomType="hover"
                      zoomScale={1}
                      src={`${zoomImage}?im=Resize=(${bigImage[0]},${bigImage[1]})`}
                      className="w-100"
                    />
                  </div>
                </Slider>
              </div>
              <Slider {...settings} className="zoomSlider" ref={zoomSLider}>
                <div className="item">
                  <img
                    src={`https://www.jiomart.com/images/product/original/420434311_blue/skinny-jeans-with-button-closure-model5-420434311_blue-5-202308081627.jpg?im=Resize=(${smallImage[0]},${smallImage[1]})`}
                    className="w-100"
                    onClick={() =>
                      goto(
                        `https://www.jiomart.com/images/product/original/420434311_blue/skinny-jeans-with-button-closure-model5-420434311_blue-5-202308081627.jpg`,
                        0
                      )
                    }
                  />
                </div>
                <div className="item">
                  <img
                    src={`https://www.jiomart.com/images/product/original/420434311_blue/skinny-jeans-with-button-closure-model5-420434311_blue-5-202308081627.jpg?im=Resize=(${smallImage[0]},${smallImage[1]})`}
                    className="w-100"
                    onClick={() =>
                      goto(
                        `https://www.jiomart.com/images/product/original/420434311_blue/skinny-jeans-with-button-closure-model5-420434311_blue-5-202308081627.jpg`,
                        1
                      )
                    }
                  />
                </div>
                <div className="item">
                  <img
                    src={`https://www.jiomart.com/images/product/original/420434311_blue/skinny-jeans-with-button-closure-model5-420434311_blue-5-202308081627.jpg?im=Resize=(${smallImage[0]},${smallImage[1]})`}
                    className="w-100"
                    onClick={() =>
                      goto(
                        `https://www.jiomart.com/images/product/original/420434311_blue/skinny-jeans-with-button-closure-model5-420434311_blue-5-202308081627.jpg`,
                        2
                      )
                    }
                  />
                </div>
                <div className="item">
                  <img
                    src={`https://www.jiomart.com/images/product/original/420434311_blue/skinny-jeans-with-button-closure-model5-420434311_blue-5-202308081627.jpg?im=Resize=(${smallImage[0]},${smallImage[1]})`}
                    className="w-100"
                    onClick={() =>
                      goto(
                        `https://www.jiomart.com/images/product/original/420434311_blue/skinny-jeans-with-button-closure-model5-420434311_blue-5-202308081627.jpg`,
                        3
                      )
                    }
                  />
                </div>
                <div className="item">
                  <img
                    src={`https://www.jiomart.com/images/product/original/420434311_blue/skinny-jeans-with-button-closure-model5-420434311_blue-5-202308081627.jpg?im=Resize=(${smallImage[0]},${smallImage[1]})`}
                    className="w-100"
                    onClick={() =>
                      goto(
                        `https://www.jiomart.com/images/product/original/420434311_blue/skinny-jeans-with-button-closure-model5-420434311_blue-5-202308081627.jpg`,
                        4
                      )
                    }
                  />
                </div>
                <div className="item">
                  <img
                    src={`https://www.jiomart.com/images/product/original/420434311_blue/skinny-jeans-with-button-closure-model5-420434311_blue-5-202308081627.jpg?im=Resize=(${smallImage[0]},${smallImage[1]})`}
                    className="w-100"
                    onClick={() =>
                      goto(
                        `https://www.jiomart.com/images/product/original/420434311_blue/skinny-jeans-with-button-closure-model5-420434311_blue-5-202308081627.jpg`,
                        5
                      )
                    }
                  />
                </div>
                {/* <div className="item">
                      <img src={img2} className="w-100" />
                    </div>
                    <div className="item">
                      <img src={img2} className="w-100" />
                    </div>
                    <div className="item">
                      <img src={img2} className="w-100" />
                    </div> */}
              </Slider>
            </div>

            <div className="col-md-8 productInfo">
              <h1>Seed Of change Organic</h1>
              <div className="d-flex align-items-center mb-2 ">
                <Rating
                  name="half-rating-read"
                  defaultValue={3.5}
                  precision={0.5}
                  readOnly
                />
                <span className=" ms-3 text-gray">(32 Review)</span>
              </div>{" "}
              <div>
                <div className="priceSec d-flex align-items-center mb-2">
                  <span className="text-g priceLarge">$38</span>
                  <div className="ms-3 flex flex-column">
                    <span className="text-org ">26% Off</span>
                    <div className="old_price  ">$38</div>
                  </div>
                </div>{" "}
                <p>
                  VLorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <div className="d-flex align-items-center productSize ">
                  <span className="">Size/Weight :</span>
                  <ul className="list list-inline mb-0  ">
                    <li className="list-inline-item">
                      <Link
                        className={`tag ${active == 0 ? "active" : ""}`}
                        onClick={() => isActive(0)}
                      >
                        50g
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link
                        className={`tag ${active == 1 ? "active" : ""}`}
                        onClick={() => isActive(1)}
                      >
                        l00g
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link
                        className={`tag ${active == 2 ? "active" : ""}`}
                        onClick={() => isActive(2)}
                      >
                        l50g
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link
                        className={`tag ${active == 3 ? "active" : ""}`}
                        onClick={() => isActive(3)}
                      >
                        200g
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="addCartSection d-flex">
                  <div className="counterSec">
                    <input type="number" min="1" />
                  </div>
                  <Button className="btn-g ms-4">
                    <ShoppingCartOutlinedIcon />
                    Add To cart
                  </Button>
                  <Button className="btn-border ms-2">
                    <FavoriteBorderOutlinedIcon />
                  </Button>
                  <Button className="btn-border ms-2">
                    <CompareArrowsIcon />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="card detailsPageTabs mt-5 p-4">
            <div className="customTabs">
              <ul className="list inline-inline ps-0">
                <li className="list-inline-item">
                  <Button onClick={() => setActiveTabs(0)} className={`${activeTabs == 0 ? "active" : ""}`}>Description</Button>
                </li>
                <li className="list-inline-item">
                  <Button onClick={() => setActiveTabs(1)} className={ `${activeTabs == 1 ? "active" : ""}`}>
                    Additional Info
                  </Button>
                </li>
                <li className="list-inline-item">
                  <Button onClick={() => setActiveTabs(2)} className={`${activeTabs == 2 ? "active " : ""}`}>Review(3)</Button>
                </li>
              </ul>

              {activeTabs == 0 && (
                <div className="tabContent">
                  <p>
                    galley of type and scrambled it to make a type specimen
                    book. It has survived not only five centuries, but also the
                    leap into electronic typesetting, remaining essentially
                    unchanged. It was popularised in the 1960s with the release
                    of Letraset sheets containing Lorem Ipsum passages, and more
                    recently with desktop publishing software like Aldus
                    PageMaker including versions of Lorem Ipsum.
                  </p>
                  <p>
                    galley of type and scrambled it to make a type specimen
                    book. It has survived not only five centuries, but also the
                    leap into electronic typesetting, remaining essentially
                    unchanged. It was popularised in the 1960s with the release
                    of Letraset sheets containing Lorem Ipsum passages, and more
                    recently with desktop publishing software like Aldus
                    PageMaker including versions of Lorem Ipsum.
                  </p>

                  <h4>Package Delivery</h4>
                  <hr></hr>
                  <p>
                    galley of type and scrambled it to make a type specimen
                    book. It has survived not only five centuries, but also the
                    leap into electronic typesetting, remaining essentially
                    unchanged. It was popularised in the 1960s with the release
                    of Letraset sheets containing Lorem Ipsum passages, and more
                    recently with desktop publishing software like Aldus
                    PageMaker including versions of Lorem Ipsum.
                  </p>

                  <h4>Suggest Use</h4>
                  <hr></hr>
                  <p>
                    galley of type and scrambled it to make a type specimen
                    book. It has survived not only five centuries, but also the
                    leap into electronic typesetting, remaining essentially
                    unchanged. It was popularised in the 1960s with the release
                    of Letraset sheets containing Lorem Ipsum passages, and more
                    recently with desktop publishing software like Aldus
                    PageMaker including versions of Lorem Ipsum.
                  </p>
                </div>
              )}
              {activeTabs == 1 && (
                <div className="tabContent">
                  <div className="table-responsive">
                    <table className="table table-bordered">
                      <tbody>
                        <tr class="stand-up">
                          <th>Stand Up</th>
                          <td>
                            <p>35″L x 24″W x 37-45″H(front to back wheel)</p>
                          </td>
                        </tr>
                        <tr class="folded-wo-wheels">
                          <th>Folded (w/o wheels)</th>
                          <td>
                            <p>32.5″L x 18.5″W x 16.5″H</p>
                          </td>
                        </tr>
                        <tr class="folded-w-wheels">
                          <th>Folded (w/ wheels)</th>
                          <td>
                            <p>32.5″L x 24″W x 18.5″H</p>
                          </td>
                        </tr>
                        <tr class="door-pass-through">
                          <th>Door Pass Through</th>
                          <td>
                            <p>24</p>
                          </td>
                        </tr>
                        <tr class="frame">
                          <th>Frame</th>
                          <td>
                            <p>Aluminum</p>
                          </td>
                        </tr>
                        <tr class="weight-wo-wheels">
                          <th>Weight (w/o wheels)</th>
                          <td>
                            <p>20 LBS</p>
                          </td>
                        </tr>
                        <tr class="weight-capacity">
                          <th>Weight Capacity</th>
                          <td>
                            <p>60 LBS</p>
                          </td>
                        </tr>
                        <tr class="width">
                          <th>Width</th>
                          <td>
                            <p>24″</p>
                          </td>
                        </tr>
                        <tr class="handle-height-ground-to-handle">
                          <th>Handle height (ground to handle)</th>
                          <td>
                            <p>37-45″</p>
                          </td>
                        </tr>
                        <tr class="wheels">
                          <th>Wheels</th>
                          <td>
                            <p>12″ air / wide track slick tread</p>
                          </td>
                        </tr>
                        <tr class="seat-back-height">
                          <th>Seat back height</th>
                          <td>
                            <p>21.5″</p>
                          </td>
                        </tr>
                        <tr class="head-room-inside-canopy">
                          <th>Head room (inside canopy)</th>
                          <td>
                            <p>25″</p>
                          </td>
                        </tr>
                        <tr class="pa_color">
                          <th>Color</th>
                          <td>
                            <p>Black, Blue, Red, White</p>
                          </td>
                        </tr>
                        <tr class="pa_size">
                          <th>Size</th>
                          <td>
                            <p>M, S</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
              {activeTabs === 2 && (
                <div className="tabContent">
                  <div className="row">
                    <div className="col-md-8">
                      <h5>Customer Question & Answer</h5>
                      <div className="card p-3 mt-3 reviewsCard flex-row">
                        <div className="image">
                          <div className="rounded-circle">
                            <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/blog/author-2.png" />
                          </div>
                          <span className="font-weight-bold text-g">
                            Sienna
                          </span>
                        </div>
                        <div className="info ">
                          <div className="d-flex justify-content-between">
                            <h6 className="text-gray">
                              December 25 2022 at 3:12 pm
                            </h6>
                            <Rating
                              name="half-rating-read"
                              defaultValue={3.5}
                              precision={0.5}
                              readOnly
                            />
                          </div>
                          <p>
                            galley of type and scrambled it to make a type
                            specimen book. It has survived not only five
                            centuries, but also the leap into electronic
                            typesetting, remaining essentially unchanged. It was
                            popularised in the 1960s with the release of
                            Letraset sheets containing Lorem Ipsum passages, and
                            more recently with desktop publishing software like
                            Aldus PageMaker including versions of Lorem Ipsum.
                          </p>
                        </div>
                      </div>

                      <div className="card p-3 mt-3 reviewsCard flex-row">
                        <div className="image">
                          <div className="rounded-circle">
                            <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/blog/author-2.png" />
                          </div>
                          <span className="font-weight-bold text-g">
                            Sienna
                          </span>
                        </div>
                        <div className="info ">
                          <div className="d-flex justify-content-between">
                            <h6 className="text-gray">
                              December 25 2022 at 3:12 pm
                            </h6>
                            <Rating
                              name="half-rating-read"
                              defaultValue={3.5}
                              precision={0.5}
                              readOnly
                            />
                          </div>
                          <p>
                            galley of type and scrambled it to make a type
                            specimen book. It has survived not only five
                            centuries, but also the leap into electronic
                            typesetting, remaining essentially unchanged. It was
                            popularised in the 1960s with the release of
                            Letraset sheets containing Lorem Ipsum passages, and
                            more recently with desktop publishing software like
                            Aldus PageMaker including versions of Lorem Ipsum.
                          </p>
                        </div>
                      </div>

                      <br />

                      <form className="reviewForm">
                        <h4>Add a review</h4> <br />
                        <div className="form-group">
                          <textarea
                            className="form-control"
                            placeholder="Write a Review"
                            name="review"
                          ></textarea>
                        </div>
                        <br></br>
                        <div className="row ">
                          <div className="col-md-6">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Name"
                                name="userName"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Email"
                                name="userName"
                              />
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="form-group">
                              <Rating
                                name="half-rating-read"
                                defaultValue={3.5}
                                precision={0.5}
                                readOnly
                              />
                            </div>
                          </div>
                        </div>
                        <br />
                        <div className="form-group">
                          <Button type="submit" className="btn-g btn-lg">
                            Submit Review
                          </Button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-4">
                      <h4>Customer reviews</h4>

                      <div className="d-flex align-items-center mt-2">
                        <Rating
                          name="half-rating-read"
                          defaultValue={4.5}
                          precision={0.5}
                          readOnly
                        />
                        <strong className="ml-3">4.8 out of 5</strong>
                      </div>

                      <br />

                      <div className="progressBarBox d-flex align-items-center">
                        <span className="me-3">5 star</span>
                        <div
                          class="progress"
                          style={{ width: "70%", height: "15px" }}
                        >
                          <div
                            class="progress-bar bg-success"
                            style={{ width: "75%", height: "20px" }}
                          >
                            75%
                          </div>
                        </div>
                      </div>
                      <div className="progressBarBox d-flex align-items-center">
                        <span className="me-3">4 star</span>
                        <div
                          class="progress"
                          style={{ width: "70%", height: "15px" }}
                        >
                          <div
                            class="progress-bar bg-success"
                            style={{ width: "65%", height: "20px" }}
                          >
                            75%
                          </div>
                        </div>
                      </div>
                      <div className="progressBarBox d-flex align-items-center">
                        <span className="me-3">3 star</span>
                        <div
                          class="progress"
                          style={{ width: "70%", height: "15px" }}
                        >
                          <div
                            class="progress-bar bg-success"
                            style={{ width: "55%", height: "20px" }}
                          >
                            75%
                          </div>
                        </div>
                      </div>
                      <div className="progressBarBox d-flex align-items-center">
                        <span className="me-3">2 star</span>
                        <div
                          class="progress"
                          style={{ width: "70%", height: "15px" }}
                        >
                          <div
                            class="progress-bar bg-success"
                            style={{ width: "45%", height: "20px" }}
                          >
                            75%
                          </div>
                        </div>
                      </div>
                      <div className="progressBarBox d-flex align-items-center">
                        <span className="me-3">1 star</span>
                        <div
                          class="progress"
                          style={{
                            width: "70%",
                            height: "15px",
                            marginRight: "5px",
                          }}
                        >
                          <div
                            class="progress-bar bg-success"
                            style={{ width: "35%", height: "20px" }}
                          >
                            75%
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
<div className="related_product pt-4 ">
    
<Slider {...Related} className="Product_Slider">
                  <div className="item">
                    <Product />
                  </div>
                  <div className="item">
                    <Product />
                  </div>
                  <div className="item">
                    <Product />
                  </div>
                  <div className="item">
                    <Product />
                  </div>
                </Slider>
</div>
        </div>
      </section>
    </>
  );
};
export default DetailPage;
