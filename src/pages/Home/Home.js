import React, { useEffect, useState } from "react";
import "./home.css";
import HomeSlider from "./slick/HomeSlider";
import CatSlider from "../../Component/CatSlider/CatSlider";
import Banner from "../../Component/Banners/Banner";
import Banner4 from "../../assets/images/banner4.jpg";
import Slider from "react-slick";
import NewsletterImg from '../../assets/images/newsletter.png';
import Newsletter from "../../Component/NewsLetter/NewsLetter";
import { Link } from "react-router-dom";
import Product from "../../Component/Products/Product";
import TopProduct from "../../Component/TopProduct/TopProduct";
import axios from "axios";
import { baseUrl } from "../../Api";

const Home = (props) => {

  const [productData , setProductData] = useState(props.data)
  const [category, setCategory] = useState([])
  const [activeTabIndex , setActiveTabIndex] = useState(0)
  const [activeTab , setActiveTab] = useState()
  const [activeTabData , setActiveTabData] = useState([])
  const [bestSale , setBestSale] = useState([])

  console.log(productData)
  // const [prodData, setProdData] = useState()
  var settings = {
    dots: false,
    // infinite: true, 
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    fade: false,
    centerMode: true,
  };

  const catArray = [];
  const BestsellArray =[]

 
  useEffect(() => {
    productData.length !== 0 &&
    productData.map((item, index) => {
        item.items.length !== 0 &&
          item.items.map((subItem, subIndex) => {
            catArray.push(subItem.cat_name)
          })
        })
        const RemoveDuplicate = catArray.filter((value,index)=>catArray.indexOf(value)==index)
        setCategory(RemoveDuplicate)
        setActiveTab(RemoveDuplicate[0])
    console.log(RemoveDuplicate, "hdhddhhh")
  }, [])
  console.log(category, "dk")

  useEffect(() => {
    let arr = []
    setActiveTabData(arr)
    if (productData && productData.length !== 0) {
        productData.map((item) => {
            if (item.items && item.items.length !== 0) {
                item.items.map((subItem, subIndex) => {
                  if (subItem.cat_name === activeTab) {
                        setActiveTabData(subItem.products)
                      console.log(subItem.products,"find")
                    }
                })
            }
        })
    }
}, [activeTab, activeTabData, ])

useEffect(()=>{
   
    productData.length!==0 &&
    productData.map((item,index)=>{
      if(item.cat_name==="Electronics"){
        item.items.length!==0 && 
        item.items.map((subItem,subIndex)=>{
          subItem.products.length!==0 &&
          subItem.products.map((product,index)=>{
            BestsellArray.push(product)
            
          })
        }) 
      }
      console.log(item)  
    })
  
  setBestSale(BestsellArray)
   

},[])

  return (
    <>
      <HomeSlider /> 
      <CatSlider data={props.data} />
      <Banner />

      <section>
        <div className="Home_products home_wrapper">
          <div className="container-fluid">
            <div className="d-flex align-items-center justify-content-between">
              <h2 className="hd mb-0 mt-0">Popular Products</h2>
              <ul className="list list-inline filter_tabs mb-0">
                {
                  category.length !== 0 &&
                  category.map((cat, index) => {
                    console.log(cat,"RRRRRRRRRRRRRRRRR")
                    return (
                      <li key={index} className="list-inline-item">
                        <Link to="" className={`cursor ${activeTabIndex===index ? "active" : ''}`}
                        onClick={()=>{
                          setActiveTab(cat)
                          setActiveTabIndex(index)
                        }
                          }>{cat}</Link>
                      </li>
                    );
                  })
                }


              </ul>
            </div>

            <div className="product_row d-flex flex-wrap ">
            {
                             activeTabData.length !== 0 &&
                            activeTabData.map((item, index) => {
                              console.log(item,"tetetetetetetetettttttttt")
                                return (
                                    <div className='product_item' key={index}>
                                        <Product tag={item.type} item={item} />
                                    </div>
                                )
                            })
                        }
            </div>
          </div>
        </div>
      </section>

      {/* Top rated product section */}
      <section className="">
        <div className=" pt-0 home_product_row2 ">
          <div className="container-fluid">
            <div className="d-flex align-items-center justify-content-between">
              <h2 className="hd mb-0 mt-0">Daily Best Sales</h2>
              <ul className="list list-inline filter_tabs mb-0">
                <li className="list-inline-item">
                  <a className="cursor">Featured</a>
                </li>
                <li className="list-inline-item">
                  <a className="cursor">Popular</a>
                </li>
                <li className="list-inline-item">
                  <a className="cursor">Needed</a>
                </li>
              </ul>
            </div>

            <div className="row ">
              <div className="col-md-3 ">
                <img src={Banner4} className="w-100 h-75  mt-3 rounded" />
              </div>

              <div className="col-md-9 ">
                <Slider {...settings} className="Product_slider">
                {
                                    bestSale.length !== 0 &&
                                    bestSale.map((item, index) => {
                                        return (
                                            <div className='item' key={index}>
                                                <Product tag={item.type} item={item} />
                                            </div>
                                        )
                                    })
                                }
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="Top_product_section">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <TopProduct title="Top Product" />
            </div>
            <div className="col">
              <TopProduct title="Top Selling" />

            </div>

            <div className="col">
              <TopProduct title="Recently " />

            </div>

            <div className="col">
              <TopProduct title="Top Rated" />

            </div>
          </div>
        </div>
      </section>
      <section className='newsLetterSection'>
        <div className='container-fluid'>
          <div className='box d-flex align-items-center'>
            <div className='info'>
              <h2>Stay home & get your daily <br />needs from our shop</h2><br />
              <p>Start You'r Daily Shopping with Nest Mart</p>
              {/* <br className='res-hide' /> */}
              <Newsletter />
            </div>

            <div className='img'>
              <img src={NewsletterImg} className='w-100' />
            </div>
          </div>
        </div>
      </section>

    </>
  );
};
export default Home;
