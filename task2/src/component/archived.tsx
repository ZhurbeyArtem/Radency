import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../utils/store";

import archButton from "./archButton";
import TableTr from "./tableTr";


const Archived = () => {
    const {notes} = useSelector((state: RootState) => state.notes)
    const [isActive, setIsActive] = useState(true);
    const [category, setCategory] = useState('');
    const handleClick =  (str: string) => {
        setCategory(str)
        setIsActive(current => !current);
    };


    return (
        <div>
            {archButton(handleClick,'Task',notes)}
            {archButton(handleClick,'Idea',notes)}
            {archButton(handleClick,'Random-Thought',notes)}

            <table className={isActive ? "w-full hidden" : "w-full "}>
                <tbody className="tblBody">
                {notes?.map(item =>
                    (item.archived === true && item.category === category) &&
                    <TableTr key={item.id} {...item}/>
                )}
                </tbody>

            </table>
        </div>
    );
};

export default Archived;