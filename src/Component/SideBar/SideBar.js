import React, { useState } from "react";
import "./sidebar.css";
import Slider from "@mui/material/Slider";
import Checkbox from "@mui/material/Checkbox";
import bannerImg from '../../assets/images/banner1.jpg';
import { Button } from "@mui/material";
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';



const label = { inputProps: { "aria-label": "Checkbox demo" } };
function valuetext(value) {
  return `${value}°C`;
}

const SideBar = () => {
  const [value, setValue] = useState([100, 60000]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className="sidebar">
        <div className="card border-0 shadow">
          <h3>Category</h3>
          <div className="catList">
            <div className="catItem d-flex align-items-center justify-content-between">
              <span>
                <img
                  src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-1.svg"
                  width={30}
                />
              </span>
              <h4 className="ml-3 mb-0">Milk Diaries</h4>
              <span className="d-flex rounded-circle align-items-center ml-auto">
                30
              </span>
            </div>
            <div className="catItem d-flex align-items-center justify-content-between">
              <span>
                <img
                  src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-1.svg"
                  width={30}
                />
              </span>
              <h4 className="ml-3 mb-0">Milk Diaries</h4>
              <span className="d-flex rounded-circle align-items-center ml-auto">
                30
              </span>
            </div>{" "}
            <div className="catItem d-flex align-items-center justify-content-between">
              <span>
                <img
                  src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-1.svg"
                  width={30}
                />
              </span>
              <h4 className="ml-3 mb-0">Milk Diaries</h4>
              <span className="d-flex rounded-circle align-items-center ml-auto">
                30
              </span>
            </div>{" "}
            <div className="catItem d-flex align-items-center justify-content-between">
              <span>
                <img
                  src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-1.svg"
                  width={30}
                />
              </span>
              <h4 className="ml-3 mb-0">Milk Diaries</h4>
              <span className="d-flex rounded-circle align-items-center ml-auto">
                30
              </span>
            </div>{" "}
            <div className="catItem d-flex align-items-center justify-content-between">
              <span>
                <img
                  src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-1.svg"
                  width={30}
                />
              </span>
              <h4 className="ml-3 mb-0">Milk Diaries</h4>
              <span className="d-flex rounded-circle align-items-center ml-auto">
                30
              </span>
            </div>
          </div>
        </div>

        <div className="card border-0 shadow">
          <h3>Filter By Price</h3>
          <Slider
            getAriaLabel={() => "Temperature range"}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            color="success"
            min={5}
            step={1}
            max={100}
          />
          <div className="d-flex justify-content-between priceRange">
            <span>
              From <strong className="text-success">${value[0]}</strong>
            </span>
            <span className="">
              From <strong className="text-success">${value[1]}</strong>
            </span>
          </div>
          <div className="filters">
            <h6>Color</h6>
            <ul className="p-0 mb-0">
              <li>
                <Checkbox {...label} color="success" />
                Red(56)
              </li>
              <li>
                <Checkbox {...label} color="success" />
                Blue(90)
              </li>
              <li>
                <Checkbox {...label} color="success" />
                Green(52)
              </li>
              <li>
                <Checkbox {...label} color="success" />
                Red(56)
              </li>
              <li>
                <Checkbox {...label} color="success" />
                Blue(90)
              </li>
              <li>
                <Checkbox {...label} color="success" />
                Green(52)
              </li>
              <li>
                <Checkbox {...label} color="success" />
                Red(56)
              </li>
              <li>
                <Checkbox {...label} color="success" />
                Blue(90)
              </li>
              <li>
                <Checkbox {...label} color="success" />
                Green(52)
              </li>
            </ul>
          </div>
          <div className="filters">
            <h6>Items Condition</h6>
            <ul className="p-0 mb-0">
              <li>
                <Checkbox {...label} color="success" />
                New(56)
              </li>
              <li>
                <Checkbox {...label} color="success" />
                Used(90)
              </li>

              <li>
                <Checkbox {...label} color="success" />
                New(56)
              </li>
              <li>
                <Checkbox {...label} color="success" />
                Used(90)
              </li>
              <li>
                <Checkbox {...label} color="success" />
                New(56)
              </li>
              <li>
                <Checkbox {...label} color="success" />
                Used(90)
              </li>
              <li>
                <Checkbox {...label} color="success" />
                New(56)
              </li>
              <li>
                <Checkbox {...label} color="success" />
                Used(90)
              </li>
            </ul>
          </div>
          <div className="d-flex justify-content-start mt-2">
      <Button className="btn-g text-white"> <FilterAltOutlinedIcon/>Filter</Button>

        </div>
        </div>
        
        <div>
            <img src ={bannerImg} className="w-100"/>
        </div>
      </div>
    </>
  );
};
export default SideBar;
