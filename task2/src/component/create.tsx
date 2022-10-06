import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {addNote} from "../utils/slicer";

const CreateComponent = () => {
    const dispatch = useDispatch()
    const [isActive, setIsActive] = useState(false);
    const [values, setValues] = useState({
        name: '',
        content: '',
        category: 'Task'
    });
    const handleClick = () => {
        setIsActive(current => !current);
    };
    const handleAddNote = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        dispatch(addNote(values))
        setValues({
            name: '',
            content: '',
            category: values.category
        })
        handleClick()
    }
    return (
        <div>
            <button onClick={handleClick} className="createBtn p-1 my-3 hover:bg-gradient-to-r from-green-300 to-green-400">Create note</button>
            <div className={isActive ? 'modal' : 'modal hidden'}>
                <div className="modal-content">
                    <div className='closeContainer'>
                        <span className="close" onClick={handleClick}>&times;</span>
                    </div>

                    <form id="add-note-form" onSubmit={handleAddNote}>
                        <div className='border-b-2 pb-1'>Create</div>

                        <div className="text">
                            <label htmlFor="name2 ">Name:</label>
                            <input className='border-2 p-1.5' type="text" name="name" id="name2" required value={values.name}
                                   onChange={(e) => setValues({...values, name: e.target.value})}/>
                        </div>
                        <div className="text">
                            <label htmlFor="content2">Content:</label>
                            <textarea className='border-2 p-1.5' name="content" id="content2" required value={values.content}
                                      onChange={(e) => setValues({...values, content: e.target.value})}/>
                        </div>
                        <p className='pb-2'>Please select a note category:</p>
                        <div className='radioBtn'>
                            <input type="radio" id="category1" value="Task" name="category" defaultChecked
                                   onChange={(e) => setValues({...values, category: e.target.value})}/>
                            <label htmlFor="category1">Task</label>

                            <input type="radio" id="category2" value="Random-Thought" name="category"
                                   onChange={(e) => setValues({...values, category: e.target.value})}/>
                            <label htmlFor="category2">Random Thought</label>

                            <input type="radio" id="category3" value="Idea" name="category"
                                   onChange={(e) => setValues({...values, category: e.target.value})}/>
                            <label htmlFor="category3">Idea</label>
                        </div>
                        <button type='submit' className='bg-emerald-400  mt-2 p-1.5 rounded-lg'>Save</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateComponent;