import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {updateNote} from "../utils/slicer";
import {RootState} from "../utils/store";
import {useNavigate, useParams} from "react-router-dom";


const UpdateComponent = () => {
    const navigate = useNavigate()
    const params = useParams();
    const {notes} = useSelector((state: RootState) => state.notes)
    const categories = ['Task', 'Idea', 'Random-Thought']
    const existingNote = notes.filter(note => note.id === Number(params.id))
    const {id, name, content, category} = existingNote[0]
    const dispatch = useDispatch()
    const [values, setValues] = useState({
        id,
        name,
        content,
        category
    });
    const handleEditNote = () => {
        dispatch(updateNote(values))
        setValues({
            id: 0,
            name: '',
            content: '',
            category: values.category
        })
        navigate('/')
    }
    return (
            <div className='update flex items-center justify-center h-screen'>
                <div className="rounded-lg p-2 ring-blue-500 ring-2 w-1/3">
                    <form id="edit-note-form" onSubmit={handleEditNote}>
                        <div className='border-b-2 pb-1'>Update</div>
                        <div className="text">
                            <label htmlFor="name2">Name:</label>
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

                            {
                                categories.map(el =>
                                    el === category
                                        ?
                                        <div key={el}><input type="radio" id={el} value={el} name="category"
                                                             defaultChecked
                                                             onChange={(e) => setValues({
                                                                 ...values,
                                                                 category: e.target.value
                                                             })}/>
                                            <label htmlFor={el}>{el}</label></div>
                                        :
                                        <div key={el}><input type="radio" id={el} value={el} name="category"
                                                             onChange={(e) => setValues({
                                                                 ...values,
                                                                 category: e.target.value
                                                             })}/>
                                            <label htmlFor={el}>{el}</label></div>
                                )
                            }
                        </div>
                        <button type='submit' className='bg-emerald-400  p-1.5 rounded-lg'>Save</button>
                    </form>
                </div>
            </div>
    );
};

export default UpdateComponent;