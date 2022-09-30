import React from 'react';
import {useNavigate} from "react-router-dom";
import {BsFillArchiveFill, BsFillTrashFill, BsPencilFill} from 'react-icons/bs'
import {useDispatch, useSelector} from "react-redux";

import type {RootState} from "../utils/store";
import '../style.css'
import {archNote, delNote} from "../utils/slicer";
import Archived from "./archived";
import CreateComponent from "./create";


const MainComponent = () => {
    const navigate = useNavigate()
    const {notes} = useSelector((state: RootState) => state.notes)

    const dispatch = useDispatch()
    return (
        <div className="container">
            <table className="tbl">
                <thead className="tblHeader">
                <tr>
                    <th>Name</th>
                    <th>Created</th>
                    <th>Category</th>
                    <th>Content</th>
                    <th>Dates</th>
                    <th><BsFillArchiveFill/> <BsFillTrashFill/></th>
                </tr>
                </thead>
                <tbody className="tblBody">
                {notes.map(e =>
                    e.archived === false &&
                    <tr key={e.id}>
                        <td>{e.name}</td>
                        <td>{e.created}</td>
                        <td>{e.category}</td>
                        <td>{e.content}</td>
                        <td>{e.dates}</td>
                        <td>
                            <button onClick={() => dispatch(archNote(e.id))}><BsFillArchiveFill/></button>
                           <button className='btnBody' onClick={() => navigate(`/update/${e.id}`)}><BsPencilFill/></button>{/*//модалку над*/}
                            <button className='btnBody' onClick={() => dispatch(delNote(e.id))}><BsFillTrashFill/>
                            </button>


                        </td>

                    </tr>
                )}
                </tbody>

            </table>
            {/*<button onClick={() => navigate('/create')} className="createBtn">Create note</button>*/}
            <CreateComponent />
           <header className="headerList">
                <span>Category</span>
                <span>Active</span>
                <span>Archived</span>
            </header>
            <Archived/>

        </div>
    );
};

export default MainComponent;