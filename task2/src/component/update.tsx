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
        <div>
            <div className='modal'>
                <div className="modal-content">
                    <form id="edit-note-form" onSubmit={handleEditNote}>
                        <div>Update</div>
                        <div className="text">
                            <label htmlFor="name2">Name:</label>
                            <input type="text" name="name" id="name2" required value={values.name}
                                   onChange={(e) => setValues({...values, name: e.target.value})}/>
                        </div>
                        <div className="text">
                            <label htmlFor="content2">Content:</label>
                            <textarea name="content" id="content2" required value={values.content}
                                      onChange={(e) => setValues({...values, content: e.target.value})}/>
                        </div>
                        <p>Please select a note category:</p>
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
                        <button type='submit'>Save</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateComponent;