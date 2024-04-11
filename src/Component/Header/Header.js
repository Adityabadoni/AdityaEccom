import React, { useEffect, useRef, useState } from "react";
import Logo from '../../assets/images/logo.svg';
import '../Header/header.css';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Select from "../SelectDrop/Select";
import Nav from '../Navbar/Nav';
import axios from "axios";
import Button from '@mui/material/Button';
import IconCompare from "../../assets/images/icon-compare.svg"
import IconHeart from "../../assets/images/icon-heart.svg"
import IconCart from "../../assets/images/icon-cart.svg"
import IconAccount from "../../assets/images/icon-user.svg"
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { ClickAwayListener } from '@mui/base';



const Header = (props) => {
    const [openSelect , setOpenSelect] = useState(false)
    const headerRef= useRef()

    const [categories, setcategories] = useState([
        'Milks and Dairies',
        'Wines & Drinks',
        'Clothing & beauty',
        'Fresh Seafood',
        'Pet Foods & Toy',
        'Fast food',
        'Baking material',
        'Vegetables',
        'Fresh Fruit',
        'Bread and Juice',
        'Clothing & beauty',
        'Fresh Seafood'
    ]);
    const countrylist = []
    // console.log(countrylist,"check")

    const getCountry = async (url) => {
        try {
            await axios.get(url).then
                ((res) => {
                    if (res !== null)
                        // console.log(res);
                        res.data.data.map((item, index) => {
                            //   return  item.country
                            // console.log(item.country)
                            countrylist.push(item.country)

                        })
                })


        }
        catch (error) {
            console.log(error.message)
        }
    }
    // getCountry()
    useEffect(() => {
        getCountry("https://countriesnow.space/api/v0.1/countries/")


    }, [])
    useEffect(()=>{
        console.log(props.data,"header")

        window.addEventListener("scroll",()=>{
            let position = window.pageYOffset
            if(position>200){
            headerRef.current.classList.add("fixed")
            }
            else{
                headerRef.current.classList.remove("fixed")
            }
            console.log(position);
        })

    },[])

    return (
        <>

            <div className="header_wrapper " ref={headerRef}>
            <header >
                <div className="container-fluid ">
                    <div className="row">
                        <div className="col-sm-2 ">
                            <img src={Logo} className="logo_img"></img>
                        </div>
                        <div className="col-sm-5">
                            <div className="headerSearch d-flex align-items-center">
                                <Select data={categories} placeholder={'All Categories'} icon={false} />
                                <div className="search">
                                    <input type="text" className="form-control" placeholder="Search for items...." />
                                    <SearchIcon className="searchIcon cursor" />
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-5 d-flex align-items-center">
                            <div className="ml-auto d-flex align-items-center">
                                <div className="countryWrapper ">
                                    <Select data={countrylist} placeholder={"Your Location"} icon={<LocationOnOutlinedIcon style={{ opacity: "0.3", fontSize: "18px" }} />} />
                                </div>
                            </div>
                            <ClickAwayListener onClickAway={()=>setOpenSelect(false )}>
                            <ul className="list list-inline mb-0 headerTabs ">
                                    <li className="list-inline-item  ">
                                        {/* <span>
                                            <img src={IconCompare} />
                                            <span className="badge bg-success rounded-circle">3</span>
                                            Compare
                                        </span> */}
                                        <span className="w-100">
                                            <select className="form-control"  size={"sm"}>
                                                <option>5</option>
                                                <option>5</option>
                                                <option>5</option>

                                            </select>
                                        </span>
                                    </li>
                                    <li className="list-inline-item  ">
                                        <span>
                                            <img src={IconHeart} />
                                            <span className="badge bg-success rounded-circle">2</span>
                                            Wishlist
                                        </span>
                                    </li>
                                    <li className="list-inline-item  ">
                                        <span>
                                            <img src={IconCart} />
                                            <span className="badge bg-success rounded-circle">4</span>
                                            Cart
                                        </span>
                                    </li>
                                    <li className="list-inline-item  ">
                                        <span onClick={()=>setOpenSelect(!openSelect)}>
                                            <img src={IconAccount} />
                                            {/* <span className="badge bg-success rounded-circle">3</span> */}
                                            Account
                                        </span>
                                       {openSelect===true &&
                                        <ul className='dropdownMenu'>
                                        <li><Button className=''><PersonOutlineIcon /> My Account</Button></li>
                                        <li><Button><LocationOnOutlinedIcon /> Order Tracking</Button></li>
                                        <li><Button><FavoriteBorderOutlinedIcon /> My Wishlist</Button></li>
                                        <li><Button><SettingsOutlinedIcon /> Setting</Button></li>
                                        <li><Button onClick={''}><LogoutOutlinedIcon /> Sign out</Button></li>
                                    </ul>}
                                    </li>

                                </ul>
   
                            </ClickAwayListener>
                        </div>

                    </div>


                </div>

            </header>
            <Nav data={props.data}/>


            </div>

            <div className="afterHeader">

            </div>

        

        </>
    )

}
export default Header