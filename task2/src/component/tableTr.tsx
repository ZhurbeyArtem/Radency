import React from 'react';
import {archNote, delNote} from "../utils/slicer";
import {BsFillArchiveFill, BsFillTrashFill, BsPencilFill} from "react-icons/bs";
import {useNavigate} from "react-router-dom";

import {INote} from "../utils/interface";
import {useDispatch} from "react-redux";


const TableTr = (e:INote) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    return (
        <tr key={e.id}>
            <td>{e.name}</td>
            <td>{e.created}</td>
            <td>{e.category}</td>
            <td>{e.content}</td>
            <td>{e.dates}</td>
            <td>
                <button className='hover:animate-pulse' onClick={() => dispatch(archNote(e.id))}><BsFillArchiveFill/></button>
                <button className='ml-2 hover:animate-pulse' onClick={() => navigate(`/update/${e.id}`)}><BsPencilFill/></button>
                <button className='ml-2 hover:animate-pulse' onClick={() => dispatch(delNote(e.id))}><BsFillTrashFill/></button>
            </td>

        </tr>
    );
};

export default TableTr;