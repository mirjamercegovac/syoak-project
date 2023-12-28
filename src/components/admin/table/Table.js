import React, {useState} from 'react';
import './table.scss';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import { GoChevronDown } from "react-icons/go";
import NavigateBeforeRoundedIcon from '@mui/icons-material/NavigateBeforeRounded';
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';
import { MdOutlineAddCircle } from "react-icons/md";
import { PiSliders } from "react-icons/pi";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { BiSolidCopy } from "react-icons/bi";
import Create from "./Create";


const dataList = [
    { id: 1, provider: 'INA d.d.', fuelType: 'Autogas', fullName: 'EUROSUPER95', price: '0.75€', dateCreated: '31/08/2020', color:'dark-blue', icon:'I' },
    { id: 2, provider: 'INA d.d.', fuelType: 'Autogas', fullName: 'EURODIESEL', price: '1.52€', dateCreated: '31/08/2020',color:'dark-blue', icon:'I' },
    { id: 3, provider: 'INA d.d.', fuelType: 'Autogas', fullName: 'EUROSUPER95', price: '0.84€', dateCreated: '31/08/2020',color:'dark-blue', icon:'I' },
    { id: 4, provider: 'INA d.d.', fuelType: 'Autogas', fullName: 'EUROSUPER95', price: '1.35€', dateCreated: '31/08/2020',color:'dark-blue', icon:'I' },
    { id: 5, provider: 'INA d.d.', fuelType: 'Autogas', fullName: 'EUROSUPER95', price: '0.30€', dateCreated: '31/08/2020',color:'dark-blue', icon:'I' },
    { id: 6, provider: 'INA d.d.', fuelType: 'Autogas', fullName: 'EUROSUPER95', price: '1.94€', dateCreated: '31/08/2020',color:'dark-blue', icon:'I' },
    { id: 7, provider: 'INA d.d.', fuelType: 'Autogas', fullName: 'EUROSUPER95', price: '0.67€', dateCreated: '31/08/2020',color:'dark-blue', icon:'I' },
    { id: 8, provider: 'INA d.d.', fuelType: 'Autogas', fullName: 'EUROSUPER95', price: '0.79€', dateCreated: '31/08/2020',color:'dark-blue', icon:'I' },
    { id: 9, provider: 'INA d.d.', fuelType: 'Autogas', fullName: 'EUROSUPER95', price: '0.75€', dateCreated: '31/08/2020', color:'dark-blue', icon:'I' },
    { id: 10, provider: 'INA d.d.', fuelType: 'Autogas', fullName: 'EURODIESEL', price: '1.52€', dateCreated: '31/08/2020',color:'dark-blue', icon:'I' },
    { id: 11, provider: 'INA d.d.', fuelType: 'Autogas', fullName: 'EUROSUPER95', price: '0.84€', dateCreated: '31/08/2020',color:'dark-blue', icon:'I' },
    { id: 12, provider: 'INA d.d.', fuelType: 'Autogas', fullName: 'EUROSUPER95', price: '1.35€', dateCreated: '31/08/2020',color:'dark-blue', icon:'I' },
    { id: 13, provider: 'INA d.d.', fuelType: 'Autogas', fullName: 'EUROSUPER95', price: '0.30€', dateCreated: '31/08/2020',color:'dark-blue', icon:'I' },
    { id: 14, provider: 'INA d.d.', fuelType: 'Autogas', fullName: 'EUROSUPER95', price: '1.94€', dateCreated: '31/08/2020',color:'dark-blue', icon:'I' },
    { id: 15, provider: 'INA d.d.', fuelType: 'Autogas', fullName: 'EUROSUPER95', price: '0.67€', dateCreated: '31/08/2020',color:'dark-blue', icon:'I' },
    { id: 16, provider: 'INA d.d.', fuelType: 'Autogas', fullName: 'EUROSUPER95', price: '0.79€', dateCreated: '31/08/2020',color:'dark-blue', icon:'I' },
    { id: 17, provider: 'INA d.d.', fuelType: 'Autogas', fullName: 'EUROSUPER95', price: '0.75€', dateCreated: '31/08/2020', color:'dark-blue', icon:'I' },
    { id: 18, provider: 'INA d.d.', fuelType: 'Autogas', fullName: 'EURODIESEL', price: '1.52€', dateCreated: '31/08/2020',color:'dark-blue', icon:'I' },
    { id: 19, provider: 'INA d.d.', fuelType: 'Autogas', fullName: 'EUROSUPER95', price: '0.84€', dateCreated: '31/08/2020',color:'dark-blue', icon:'I' },
    { id: 20, provider: 'INA d.d.', fuelType: 'Autogas', fullName: 'EUROSUPER95', price: '1.35€', dateCreated: '31/08/2020',color:'dark-blue', icon:'I' },
    { id: 21, provider: 'INA d.d.', fuelType: 'Autogas', fullName: 'EUROSUPER95', price: '0.30€', dateCreated: '31/08/2020',color:'dark-blue', icon:'I' },
    { id: 22, provider: 'INA d.d.', fuelType: 'Autogas', fullName: 'EUROSUPER95', price: '1.94€', dateCreated: '31/08/2020',color:'dark-blue', icon:'I' },
    { id: 23, provider: 'INA d.d.', fuelType: 'Autogas', fullName: 'EUROSUPER95', price: '0.67€', dateCreated: '31/08/2020',color:'dark-blue', icon:'I' },
    { id: 24, provider: 'INA d.d.', fuelType: 'Autogas', fullName: 'EUROSUPER95', price: '0.79€', dateCreated: '31/08/2020',color:'dark-blue', icon:'I' },
];

const Table = () => {
    const [selectedRows, setSelectedRows] = useState([]);

    const toggleRow = (id) => {
        setSelectedRows((prevSelectedRows) => {
        if (prevSelectedRows.includes(id)) {
            return prevSelectedRows.filter((rowId) => rowId !== id);
        } else {
            return [...prevSelectedRows, id];
        }
        });
    };

    

    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 8;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = dataList.slice(firstIndex, lastIndex);
    const npage = Math.ceil(dataList.length / recordsPerPage);
    const numbers = [...Array(npage + 1).keys()].slice(1);


    const [rowOpen, setRowOpen] = useState({});

    const toggleRowOpen = (id) => {
        setRowOpen((prevRowOpen) => {
        return {
            ...prevRowOpen,
            [id]: !prevRowOpen[id],
        };
        });
    };

    const [createOpen, setCreateOpen] = useState(false);
  
  return (
    <div className="container">
      <div className="container__header">
        <h1 className="container__header__title">Datalist</h1>
        <div className="container__header__info">
          <p className="container__header__info__number">578 total</p>
          <p className="container__header__info__sort">Sort by: <span>Fuel type</span> <GoChevronDown className="container__header__info__sort__icon"/></p>
        </div>
        <div className="container__header__buttons">
          <button className="container__header__buttons__filter">
            <PiSliders className="container__header__buttons__filter__icon"/>Filter</button>
          <button className="container__header__buttons__add" onClick={()=> setCreateOpen(true)} >
            <MdOutlineAddCircle className="container__header__buttons__add__icon"/> Add Fuel</button>
            {createOpen && (
                <Create
                    closeCreate={()=> {
                        setCreateOpen(false);
                    }} 
            />)}
        </div>
      </div>

      <div className="container__div">
        <table className="container__div__table">
            <thead className="container__div__table__thead">
                <tr className="container__div__table__thead__tr">
                    <th style={{width: '30px'}}></th>
                    <th>Provider</th>
                    <th>Fuel Type</th>
                    <th>Full Name</th>
                    <th>Price</th>
                    <th>Date Created</th>
                    <th style={{textAlign: 'end'}}>
                    <ul className="container__div__table__thead__tr__pagination">
                        <li className="container__div__table__thead__tr__pagination__page-item">
                            <a href="#" className="container__div__table__thead__tr__pagination__page-item__page-link" onClick={prevPage}>
                                <NavigateBeforeRoundedIcon className="container__div__table__thead__tr__pagination__page-item__page-link__icon"/></a>
                        </li>
                        {
                            numbers.map((n, i) => (
                                <li className={`container__div__table__thead__tr__pagination__page-item ${currentPage === n ? 'active' : ''}`} key={i}>
                                    <a href="#" className="container__div__table__thead__tr__pagination__page-item__page-link num" onClick={() => changeCPage(n)}>{n}</a>
                                </li>
                            ))
                        }
                        <li className="container__div__table__thead__tr__pagination__page-item next">
                            <a href="#" className="container__div__table__thead__tr__pagination__page-item__page-link" onClick={nextPage}>
                                <NavigateNextRoundedIcon className="container__div__table__thead__tr__pagination__page-item__page-link__icon"/></a>
                        </li>
                    </ul>
                    </th>
                   
                </tr>
            </thead>
            <tbody className="container__div__table__tbody">
            {records.map((data) => (
                <tr key={data.id} className="container__div__table__tbody__tr">
                    <td className="container__div__table__tbody__tr__checkbox">
                        <input
                            type="checkbox"
                            checked={selectedRows.includes(data.id)}
                            onChange={() => toggleRow(data.id)}
                        />
                    </td>
                    <td className="container__div__table__tbody__tr__icon">
                        <div className={`container__div__table__tbody__tr__icon__box--${data.color}`}>
                            <h3 className={`container__div__table__tbody__tr__icon__box--${data.color}--char`}>{data.icon}</h3>
                        </div>
                        {data.provider}
                    </td>
                    <td className="container__div__table__tbody__tr__fuel">{data.fuelType}</td>
                    <td className="container__div__table__tbody__tr__name">{data.fullName}</td>
                    <td className="container__div__table__tbody__tr__price">{data.price}</td>
                    <td className="container__div__table__tbody__tr__date">{data.dateCreated}</td>
                    <td className="container__div__table__tbody__tr__more">
                        <MoreHorizRoundedIcon style={{cursor: 'pointer'}} onClick={() => toggleRowOpen(data.id)}/>
                        <div className={`container__div__table__tbody__tr__more__menu ${rowOpen[data.id] ? 'active' : 'inactive'}`}>
                            <ul className="container__div__table__tbody__tr__more__menu__ul">
                                <DropdownMore icon={<FaRegEdit />} text={"Edit Data"}/>
                                <DropdownMore icon={<MdDelete />} text={"Remove Data"}/>
                                <DropdownMore icon={<BiSolidCopy />} text={"Duplicate Data"}/>
                            </ul>
                        </div>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
      </div>
      
    </div>
  );
    function prevPage(){
        if(currentPage !== 1){
            setCurrentPage(currentPage -1)
        }
    }

    function changeCPage(id){
        setCurrentPage(id)
    }

    function nextPage(){
        if(currentPage !== npage){
            setCurrentPage(currentPage + 1)
        }
    }
};

function DropdownMore(props){
    return(
        <li className='container__div__table__tbody__tr__more__menu__ul__dropdown-item'>
            <span>{props.icon}</span>
            <a>{props.text}</a>
        </li>
    );
}


export default Table;
