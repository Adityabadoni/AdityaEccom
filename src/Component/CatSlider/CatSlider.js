import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "./catSlider.css"
import { Link } from "react-router-dom";




const CatSlider = (props) => {

    const [allData, seAllData] = useState(props.data)
    const [totalProduct, setTotalProduct] = useState([])

    const [Collection, setCollection] = useState([
        '#fffceb',
        '#ecffec',
        '#feefea',
        '#fff3eb',
        '#fff3ff',
        '#f2fce4',
        '#feefea',
        '#fffceb',
        '#feefea',
        '#ecffec',
        '#feefea',
        '#fff3eb',
        '#fff3ff',
        '#f2fce4',
        '#feefea',
        '#fffceb',
        '#feefea',
        '#ecffec'
    ]);
    useEffect(() => {
        let productLength = 0
        let arrayLength = []

        allData.length !== 0 &&
            allData.map((item) => {
                item.items.length !== 0 &&
                    item.items.map((subItem, subIndex) => {
                        productLength += subItem.products.length

                    })
                arrayLength.push(productLength)
                productLength = 0
            })
        const RemoveDuplicate = arrayLength.filter((item, index) => arrayLength.indexOf(item) === index);
        setTotalProduct(RemoveDuplicate)
        console.log(RemoveDuplicate)

    }, [])
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 10,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
        centerMode: true
    };
    return (
        <>
            <div className="catSlider_Section">
                <div className="container-fluid">
                    <h3>Feature Categories</h3>
                    <Slider {...settings} className="cat_slider_Main ">
                        {
                            allData != 0 && allData.map((items, index) => {
                                return (
                                    <div className="items" >
                                        <Link to={`/cat/${items.cat_name.toLowerCase()}`}>
                                        <div key={index} className="info " style={{ background: Collection[index] }}>
                                            <img src={items.image} className="w-100"></img>
                                            <h6 className="text-capitalize">{items.cat_name}</h6>
                                            <p>{totalProduct[index]}items</p>
                                        </div>

                                        </Link>
                                    </div>

                                )
                            })
                        }
                    </Slider>

                </div>
            </div>
        </>
    )
}
export default CatSlider