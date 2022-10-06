import React from 'react';
import {calculateActive, calculateArchived} from "../utils/hooks";

const ArchButton = (fn:Function, theme:string, notes:any) => {
    return (
        <button className='archHeader border-sky-400 bg-sky-100 shadow-md border-2' onClick={() => fn(theme)}>
            <div className='font-bold'>{theme}</div>
            <div>{calculateActive(notes, `${theme}`)}</div>
            <div>{calculateArchived(notes, `${theme}`)}</div>
        </button>
    );
};

export default ArchButton;