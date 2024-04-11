import React, { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import ViewCompactIcon from '@mui/icons-material/ViewCompact';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';
import banner1 from "../../assets/images/banner1.jpg";
import { Link } from "react-router-dom";

import './nav.css'


const Nav = (props) => {

    const [navData, setNavData] = useState([]);

    useEffect(() => {
        setNavData(props.data, "hero")
    }, [props.data])
    console.log(navData, "hero")

    return (
        <>
            <div className="nav d-flex align-items-center ">
                <div className="container-fluid m-2 ">
                    <div className="row position-relative">
                        <div className="col-sm-3  part1">
                            <Link to="/listning">
                                <Button className="bg-success text-white catTab " ><ViewCompactIcon />&nbsp;Browse All Categories<ArrowDownwardIcon /></Button>
                            </Link>
                        </div>
                        <div className="col-sm-7 part2 position-static">
                            <nav className="mb-0" >
                                <ul className=" list list-inline">
                                    <li className="list-inline-item">
                                        <Button><Link to={"/"}>Home</Link></Button>
                                    </li>
                                    {navData.length !== 0 &&
                                        navData.map((item, index) => {
                                            { console.log(item.cat_name) }

                                            return (
                                                <li key={index} className="list-inline-item">
                                                    <Button><a href={`/cat/${item.cat_name.toLowerCase()}`}>
                                                        {item.cat_name}
                                                    </a>....
                                                    </Button>
                                                    {
                                                        item.items.length !== 0 &&
                                                        <div className="dropdown_menu">
                                                            <ul>
                                                                {item.items.map((subitem, subindex) => {
                                                                    return (
                                                                        <li key={subindex}><Button><a href={`/cat/${item.cat_name.toLowerCase()}/${subitem.cat_name.replace(/\s/g, '-').toLowerCase()}`}>{subitem.cat_name}</a></Button></li>
                                                                    )
                                                                })}
                                                            </ul>
                                                        </div>
                                                    }
                                                </li>
                                            )
                                        })}


                                    <li className="list-inline-item position-static">
                                        <Button><Link>Mega menu<ArrowDownwardIcon /></Link></Button>



                                        <div className="dropdown_menu  Mega_menu w-100">
                                            <div className="row">
                                                {navData.length !== 0 &&
                                                    navData.map((item, index) => {
                                                        return (<div className="col">

                                                            <Link to={`/cat/${item.cat_name.toLowerCase()}`}><h6 className="text-g">{item.cat_name}</h6></Link>

                                                            {
                                                                item.items.length !== 0 &&
                                                                <ul className="p-0 mt-4  mb-0">
                                                                    {
                                                                        item.items.map((subitem, subindex) => {
                                                                            return (
                                                                                <li key={subindex}><Link to={`/cat/${item.cat_name.toLowerCase()}/${subitem.cat_name.replace(/\s/g, "-").toLowerCase()}`}>{subitem.cat_name}</Link></li>

                                                                            )
                                                                        })
                                                                    }

                                                                </ul>
                                                            }


                                                        </div>)
                                                    })}


                                                {/* <div className="col  ">
                                                    <h6 className="text-g">BreakFast & Diary</h6>
                                                    <ul className="p-0 mt-4 mb-0">
                                                        <li><Link to="">Fruits & Vegitable</Link></li>
                                                        <li><Link to="">Fresh Vegitable</Link></li>
                                                        <li><Link to="">Herbs & Seosoning</Link></li>
                                                        <li><Link to="">Cuts & Sprouts</Link></li>
                                                        <li><Link to="">Packages Produce</Link></li>
                                                    </ul>
                                                </div>
                                                <div className="col">
                                                    <h6 className="text-g">Meat & Seafood</h6>
                                                    <ul className="p-0 mt-4 mb-0">
                                                        <li><Link to="">Fruits & Vegitable</Link></li>
                                                        <li><Link to="">Fresh Vegitable</Link></li>
                                                        <li><Link to="">Herbs & Seosoning</Link></li>
                                                        <li><Link to="">Cuts & Sprouts</Link></li>
                                                        <li><Link to="">Packages Produce</Link></li>
                                                    </ul>
                                                </div> */}
                                                <div className="col w-100">
                                                    <img src={banner1}></img>
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                    <li className="list-inline-item">
                                        <Button><Link>Pages <ArrowDownwardIcon /></Link></Button>
                                        <div className="dropdown_menu">
                                            <ul>
                                                <li><Button>About us</Button></li>
                                                <li><Button>Contact</Button></li>
                                                <li><Button>My Account</Button></li>
                                                <li><Button>Login</Button></li>
                                                <li><Button>Register</Button></li>
                                                <li><Button>Reset Password</Button></li>
                                                <li><Button>Privacy Policy</Button></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="list-inline-item">
                                        <Button><Link>Contact</Link></Button>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-sm-2 part3 d-flex align-items-center justify-content-center">
                            <div className=" phNo d-flex align-items-center ml-auto ">
                                <span><HeadphonesOutlinedIcon /></span>
                                <div className="info ml-3">
                                    <h5 className="text-g mb-0">1900 - 888</h5>
                                    <p className="mb-0">24/7 Support Center</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Nav