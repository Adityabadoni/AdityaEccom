import { React, useState } from "react";
import '../SelectDrop/Select.css';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
// import { ClickAwayListener } from '@mui/base/ClickAwayListener';
// or
import { ClickAwayListener } from '@mui/base';



const Select = ({ data, placeholder, icon }) => {
    const [isopenSelect, setIsopenSelect] = useState(false)
    const [selectIndex, setSelectIndex] = useState(0)
    const [selectItem, setSelectItem] = useState(placeholder)
    const [filterData , setFilterData] = useState(data)
    const [filterData2 , setFilterData2] = useState(data)



    const openSelect = () => {
        setIsopenSelect(!isopenSelect)
    }
    const closeSelect = (index, name) => {
        setIsopenSelect(false)
        setSelectItem(name)
        setSelectIndex(index)

    }
    const filter =(e)=>{
        const list = e.target.value.toLowerCase()
        const data = filterData2.filter((item)=>{
            return item.toLowerCase().includes(list)
        })
        const removeDuplicateData = data.filter((item,index)=>data.indexOf(item)===index)
        setFilterData(removeDuplicateData)
        // console.log(removeDuplicateData);

    }
    // console.log(data)
    return (
        <>
            <ClickAwayListener onClickAway={() => setIsopenSelect(false)}>

                <div className="selectDrop cursor position-relative">
                    {icon}
                    <span className="openSelect " onClick={openSelect}> {selectItem.length>14 ? selectItem.substr(0,14)+"...":selectItem} <ArrowDownwardIcon className='arrow' /></span>


                    {
                        isopenSelect === true &&

                        <div className="selectDrop1">
                            <div className="searchField p-3">
                                <input type="text"onChange={filter} /> 
                            </div>
                            <ul className="searchResults">
                                <li key={0} onClick={() => closeSelect(0, placeholder)} className={`${selectIndex === 0 ? '' : ""}`}>{placeholder}</li>

                                {
                                    filterData.map((item, index) => {
                                        return (
                                            <>
                                                <li key={index} onClick={() => closeSelect(index, item)} className={`${selectIndex === index ? 'active' : ""}`}>{item}</li>

                                            </>
                                        )
                                    })
                                }
                            </ul>
                        </div>

                    }
                </div>
            </ClickAwayListener>
        </>
    )
}
export default Select