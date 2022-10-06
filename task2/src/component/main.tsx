import React from 'react';
import {BsFillArchiveFill, BsFillTrashFill } from 'react-icons/bs'
import { useSelector} from "react-redux";
import type {RootState} from "../utils/store";

import Archived from "./archived";
import CreateComponent from "./create";
import TableTr from "./tableTr";



const MainComponent = () => {

    const {notes} = useSelector((state: RootState) => state.notes)

    return (
        <div className="container">
            <table className="w-full">
                <thead className="tblHeader">
                <tr className='divide-x space-x-2'>
                    <th>Name</th>
                    <th>Created</th>
                    <th>Category</th>
                    <th>Content</th>
                    <th>Dates</th>
                    <th><BsFillArchiveFill className='inline'/> <BsFillTrashFill className='inline'/></th>
                </tr>
                </thead>
                <tbody className="tblBody">
                {
                    notes.map((item) =>
                         item.archived === false &&
                        <TableTr key={item.id} {...item}/>
                )}
                </tbody>

            </table>
            <CreateComponent />
           <header className="flex justify-around font-bold border-2 mt-14 mb-5">
                <span>Category</span>
                <span>Active</span>
                <span>Archived</span>
            </header>
            <Archived/>

        </div>
    );
};

export default MainComponent;