import React, {useState} from 'react';
import {BsFillArchiveFill, BsFillTrashFill, BsPencilFill} from "react-icons/bs";
import {archNote, delNote} from "../utils/slicer";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../utils/store";
import {calculateActive, calculateArchived} from "../utils/hooks";
import {useNavigate} from "react-router-dom";

const Archived = () => {
    const {notes} = useSelector((state: RootState) => state.notes)
    const navigate = useNavigate()
    const [isActive, setIsActive] = useState(true);
    const [category, setCategory] = useState('');
    const handleClick =  (str: string) => {
        setCategory(str)
        setIsActive(current => !current);
    };

    const dispatch = useDispatch()
    return (
        <div className="wrapper">
            <button className='archHeader' onClick={() => handleClick('Task')}>
                <div>Task</div>
                <div>{calculateActive(notes, 'Task')}</div>
                <div>{calculateArchived(notes, 'Task')}</div>
            </button>
            <button className='archHeader' onClick={() => handleClick('Idea')}>
                <div>Idea</div>
                <div>{calculateActive(notes, 'Idea')}</div>
                <div>{calculateArchived(notes, 'Idea')}</div>
            </button>
            <button className='archHeader' onClick={() => handleClick('Random-Thought')}>
                <div>Random Thought</div>
                <div>{calculateActive(notes, 'Random-Thought')}</div>
                <div>{calculateArchived(notes, 'Random-Thought')}</div>
            </button>
            <table className={isActive ? "tbl hidden" : "tbl "}>
                <tbody className="tblBody">
                {notes.map(e =>
                    (e.archived === true && e.category === category) &&
                    <tr key={e.id}>
                        <td>{e.name}</td>
                        <td>{e.created}</td>
                        <td>{e.category}</td>
                        <td>{e.content}</td>
                        <td>{e.dates}</td>
                        <td>
                            <button onClick={() => dispatch(archNote(e.id))}><BsFillArchiveFill/></button>
                            <button className='btnBody' onClick={() => navigate(`/update/${e.id}`)}><BsPencilFill/></button>
                            <button className='btnBody' onClick={() => dispatch(delNote(e.id))}><BsFillTrashFill/>
                            </button>

                        </td>
                    </tr>
                )}
                </tbody>

            </table>
        </div>
    );
};

export default Archived;