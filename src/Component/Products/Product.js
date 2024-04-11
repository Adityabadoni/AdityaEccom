import React, { useEffect, useState } from "react";
import "./product.css";
import { Button } from "@mui/material";
import Rating from '@mui/material/Rating';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from "react-router-dom";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CompareArrowsOutlinedIcon from '@mui/icons-material/CompareArrowsOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import Tooltip from '@mui/material/Tooltip';
import { baseUrl } from "../../Api";
import axios from "axios";

const Product = (props) => {

    const [productData, setProductData] = useState()
    // console.log(productData, "Product_page")
    useEffect(() => {
        setProductData(props.item)

    }, [props.item])
    return (

        <div className="products_thumb">
            {
                // props.tag!==null && props.tag!==undefined &&
                <span className={`Badge_label ${props.tag} new`}>{props.tag}Best </span>
            }
            {
                productData !== undefined &&
                <>
                    <Link>
                        <div className="image_wrap d-flex justify-content-center">
                            {/* <div className="wrapper p-3 mb-3"> */}
                                <img src={productData.catImg + '?im=Resize=(420,420)'}
                                    className="w-75 wrapper" />
                                    {/* </div>                     */}
                                        <div className="overlay">
                                <ul className="list list-inline mb-0 transition ">
                                    <li className="list-inline-item">
                                        {/* */}
                                        <Tooltip title=" Add to WishList" placement="top-end" classes={{ tooltip: 'custom-tooltip' }} >
                                            <FavoriteBorderOutlinedIcon className="svg" />

                                        </Tooltip>

                                    </li>
                                    <li className="list-inline-item">
                                        <Tooltip title="Compare" placement="top" classes={{ tooltip: 'custom-tooltip' }}>
                                            <CompareArrowsOutlinedIcon />


                                        </Tooltip>
                                    </li>
                                    <li className="list-inline-item">


                                        <Tooltip title="Quick View" placement="top-start" classes={{ tooltip: 'custom-tooltip' }}>
                                            <RemoveRedEyeOutlinedIcon />
                                        </Tooltip>
                                    </li>


                                </ul>

                            </div>

                        </div>

                    </Link>
                    <div className="info">
                        <span className="d-block Cat_name">
                            {productData.brand}
                        </span>
                        <h6 className="title mt-2"><Link>{productData.productName.substr(0, 50) + '...'}</Link></h6>
                        <Rating name="half-rating-read" value={parseFloat(productData.rating)} precision={0.5} readOnly />
                        <span className="d-block brand_name text-g"> By <Link>{productData.brand}</Link></span>

                        {/* <div className="d-flex align-items-center justify-content-between"> */}
                            <div className="d-flex align-items-center mt-2  justify-content-between">
                                <div className="price text-g fs-6 ">₹{productData.price}</div>
                                <div className="old_price ">₹{productData.oldPrice}</div>

                            </div>
                        {/* </div> */}
                            <Button className="bg-g transition w-100 mt-2"><ShoppingCartOutlinedIcon />Add</Button>

                    </div>
                </>
            }

        </div>

    )

}
export default Product