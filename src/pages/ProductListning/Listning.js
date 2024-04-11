import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import SideBar from "../../Component/SideBar/SideBar";
import Product from "../../Component/Products/Product";
import Select from "../../Component/SelectDrop/Select";
import { Button } from "@mui/material";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import FilterListOutlinedIcon from "@mui/icons-material/FilterListOutlined";
const Listning = (props) => {
    const [openSelect , setOpenSelect] =useState(false)
    const [openSelect2 , setOpenSelect2] =useState(false)
    const [allData , setAllData] = useState([])

    const {id} = useParams()
    const catArray =[]

    useEffect(()=>{
      props.data.length!==0 &&
      props.data.map((item,index)=>{
        if(props.single===true){
          if(item.cat_name.toLowerCase()==id.toLowerCase())
          item.items.length!==0 &&
          item.items.map((subItem,subIndex)=>{
            subItem.products.length!==0 &&
            subItem.products.map((subItems, subIndexs)=>{
              catArray.push(subItems)

            })
          })

        }
        else{
          item.items.length !==0 &&
          item.items.map((item_)=>{
            if(item_.cat_name.split(' ').join('-').toLowerCase()=== id.split(' ').join('-').toLowerCase())
            console.log(item_.cat_name.split(' ').join('-').toLowerCase()=== id.split(' ').join('-').toLowerCase(),"route")
            item_.products.length!==0 &&
            item_.products.map((item__,index__)=>{
            catArray.push(item__)
          })
          })
        }
      })
      const RemoveDuplicate =catArray.filter((value,index)=>catArray.indexOf(value)==index)
      setAllData(RemoveDuplicate)

      console.log(RemoveDuplicate,"****")

    },[])

  return (
    <>
      <div className="Listining">
        <div className="container-fluid">
          <div className="breadcum">
            <h3>Snacks</h3>
            <ul className="list list-inline mb-0">
              <li className="list-inline-item">
                <Link to="">Home</Link>
              </li>
              <li className="list-inline-item">
                <Link to="">Category</Link>
              </li>
              <li className="list-inline-item">
                <Link to="">Back</Link>
              </li>
            </ul>
          </div>

          <div className="listning_data">
            <div className="row">
              <div className="col-md-3 sidebarWrapper">
                <SideBar />
              </div>
              <div className="col-md-9 rightContent Home_products">
                <div className="topStrip d-flex align-items-center justify-content-between">
                  <p className="mb-0">
                    We found <span className="text-success">29</span> items for
                    you!
                  </p>
                  <div className="d-flex align-items-center ">
                    <div className="tab_ me-3 position-relative">
                      <Button className="btn " onClick={()=>setOpenSelect(!openSelect)}>
                        <GridViewOutlinedIcon />
                        &nbsp;Sort : 50
                      </Button>
                      {openSelect==true &&
                      <ul className='dropdownMenu position-absolute'>
                      <li><Button className="align-items-center">50</Button></li>
                      <li><Button className="align-items-center">100</Button></li>
                      <li><Button className="align-items-center">2000</Button></li>
                      <li><Button className="align-items-center">All</Button></li>   
                  </ul>}
                    </div>
                    
                    <div className="tab_ position-relative">
                      <Button className="btn " onClick={()=>setOpenSelect2(!openSelect2)}>
                        <FilterListOutlinedIcon /> 
                        &nbsp;Sort By:Featured
                      </Button>
                      {openSelect2==true &&
                      <ul className='dropdownMenu position-absolute'>
                      <li><Button className="align-items-center">Featured</Button></li>
                      <li><Button className="align-items-center">High to Low</Button></li>
                      <li><Button className="align-items-center">Low to hign</Button></li>
                      <li><Button className="align-items-center">Average</Button></li>   
                  </ul>}
                    </div>
                  </div>
                </div>
                <div className="product_row d-flex flex-wrap pr-0 pl-0  ">
                  {
                    allData.length!==0 &&
                    allData.map((item,index)=>{
                      console.log(item)

                      return(
                        <div className='product_item' key={index}>
                        <Product tag={item.type} item={item} />
                    </div>
                    )
                    })
                  }

                  {/* <div className="product_item">
                    <Product tag="sale" />
                  </div>
                   */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Listning;
