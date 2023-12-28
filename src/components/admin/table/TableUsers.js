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
import CreateUser from "./CreateUser";
import avatarGirl from '../../../images/avatar-girl.svg';


const users = [
    { id: 1, gender: 'female', fullName: 'Jessica Smith', phoneNumber: '+123456789', dateBirth: '20/08/1998', color: 'green'},
    { id: 2, gender: 'female', fullName: 'Jessica Smith', phoneNumber: '+123456789', dateBirth: '20/08/1998', color: 'green'},
    { id: 3, gender: 'female', fullName: 'Jessica Smith', phoneNumber: '+123456789', dateBirth: '20/08/1998', color: 'green'},
    { id: 4, gender: 'female', fullName: 'Jessica Smith', phoneNumber: '+123456789', dateBirth: '20/08/1998', color: 'green'},
    { id: 5, gender: 'female', fullName: 'Jessica Smith', phoneNumber: '+123456789', dateBirth: '20/08/1998', color: 'green'},
    { id: 6, gender: 'female', fullName: 'Jessica Smith', phoneNumber: '+123456789', dateBirth: '20/08/1998', color: 'green'},
    { id: 7, gender: 'female', fullName: 'Jessica Smith', phoneNumber: '+123456789', dateBirth: '20/08/1998', color: 'green'},
    { id: 8, gender: 'female', fullName: 'Jessica Smith', phoneNumber: '+123456789', dateBirth: '20/08/1998', color: 'green' },
    { id: 9, gender: 'female', fullName: 'Jessica Smith', phoneNumber: '+123456789', dateBirth: '20/08/1998', color: 'green'},
    { id: 10, gender: 'female', fullName: 'Jessica Smith', phoneNumber: '+123456789', dateBirth: '20/08/1998', color: 'green' },
    { id: 11, gender: 'female', fullName: 'Jessica Smith', phoneNumber: '+123456789', dateBirth: '20/08/1998', color: 'green'},
    { id: 12, gender: 'female', fullName: 'Jessica Smith', phoneNumber: '+123456789', dateBirth: '20/08/1998', color: 'green' },
    { id: 13, gender: 'female', fullName: 'Jessica Smith', phoneNumber: '+123456789', dateBirth: '20/08/1998', color: 'green' },
    { id: 14, gender: 'female', fullName: 'Jessica Smith', phoneNumber: '+123456789', dateBirth: '20/08/1998', color: 'green' },
    { id: 15, gender: 'female', fullName: 'Jessica Smith', phoneNumber: '+123456789', dateBirth: '20/08/1998', color: 'green' },
    { id: 16, gender: 'female', fullName: 'Jessica Smith', phoneNumber: '+123456789', dateBirth: '20/08/1998', color: 'green' },
    { id: 17, gender: 'female', fullName: 'Jessica Smith', phoneNumber: '+123456789', dateBirth: '20/08/1998', color: 'green' }
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
    const records = users.slice(firstIndex, lastIndex);
    const npage = Math.ceil(users.length / recordsPerPage);
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

    const [createUserOpen, setCreateUserOpen] = useState(false);
  
  return (
    <div className="container">
      <div className="container__header">
        <h1 className="container__header__title">Users</h1>
        <div className="container__header__info">
          <p className="container__header__info__number">578 total</p>
          <p className="container__header__info__sort">Sort by: <span>Full Name</span> <GoChevronDown className="container__header__info__sort__icon"/></p>
        </div>
        <div className="container__header__buttons">
          <button className="container__header__buttons__filter">
            <PiSliders className="container__header__buttons__filter__icon"/>Filter</button>
          <button className="container__header__buttons__add" onClick={()=> setCreateUserOpen(true)} >
            <MdOutlineAddCircle className="container__header__buttons__add__icon"/> Add User</button>
            {createUserOpen && (
                <CreateUser
                    closeCreateUser={()=> {
                        setCreateUserOpen(false);
                    }} 
            />)}
        </div>
      </div>

      <div className="container__div">
        <table className="container__div__table">
            <thead className="container__div__table__thead">
                <tr className="container__div__table__thead__tr">
                    <th style={{width: '30px'}}></th>
                    <th>Icon</th>
                    <th>Gender</th>
                    <th>Full Name</th>
                    <th>Phone Number</th>
                    <th>Date Birth</th>
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
                        <img src={avatarGirl} alt="" />
                        <div className={`container__div__table__tbody__tr__icon--${data.color}`}></div>
                    </td>
                    <td className="container__div__table__tbody__tr__fuel">{data.gender}</td>
                    <td className="container__div__table__tbody__tr__name">{data.fullName}</td>
                    <td className="container__div__table__tbody__tr__price">{data.phoneNumber}</td>
                    <td className="container__div__table__tbody__tr__date">{data.dateBirth}</td>
                    <td className="container__div__table__tbody__tr__more">
                        <MoreHorizRoundedIcon style={{cursor: 'pointer'}} onClick={() => toggleRowOpen(data.id)}/>
                        <div className={`container__div__table__tbody__tr__more__menu ${rowOpen[data.id] ? 'active' : 'inactive'}`}>
                            <ul className="container__div__table__tbody__tr__more__menu__ul">
                                <DropdownMore icon={<FaRegEdit />} text={"Edit User"}/>
                                <DropdownMore icon={<MdDelete />} text={"Remove User"}/>
                                <DropdownMore icon={<BiSolidCopy />} text={"Duplicate User"}/>
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
