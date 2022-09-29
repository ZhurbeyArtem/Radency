import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { INoteCreate, INoteUpdate, NotesSliceState} from "./interface";
import {dateForCreated, dateForDates} from "./hooks";

const initialState: NotesSliceState = {
    notes: [{
        id: 1,
        name: `shopping List 1`,
        created: '2021-11-20',
        category: 'Task',
        content: 'Tomatoes, bread',
        dates: '3/5/2021',
        archived: false,
    },
        {
            id: 2,
            name: 'shopping List 2',
            created: '2021-02-10',
            category: 'Task',
            content: 'Phone, Tv 3/5/2021',
            dates: '3/5/2021',
            archived: false,
        },
        {
            id: 3,
            name: 'shopping List 3',
            created: '2021-04-20',
            category: 'Idea',
            content: 'Tomatoes, bread, milk',
            dates: '3/5/2021',
            archived: false,
        },
        {
            id: 4,
            name: 'shopping List 4',
            created: '2021-04-20',
            category: 'Task',
            content: 'Tomatoes, bread',
            dates: '3/5/2021',
            archived: false,
        },
        {
            id: 5,
            name: 'shopping List 5',
            created: '2018-12-10',
            category: 'Task',
            content: 'Tomatoes, bread',
            dates: '3/5/2021',
            archived: false,
        },
        {
            id: 6,
            name: 'shopping list 6',
            created: '2021-04-20',
            category: 'Random-Thought',
            content: 'Tomatoes, bread',
            dates: '3/5/2021',
            archived: true,
        }]
}

export const noteSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        addNote: (state, action: PayloadAction<INoteCreate>) => {
            const {name, category, content} = action.payload
            state.notes = [
                ...state.notes, {
                    id: state.notes.length+1,
                    name,
                    created: dateForCreated(new Date()),
                    category,
                    content,
                    dates: dateForDates(content),
                    archived: false
                }
            ]
        },
        delNote: (state, action: PayloadAction<number>) => {
            state.notes = state.notes.filter(({id}) => id !== action.payload)
        },
        archNote: (state, action: PayloadAction<number>) => {

            const existNote = state.notes.find((el) => el.id === action.payload)
                    if(existNote) {
                        existNote.archived = !existNote.archived
                    }

        },
        updateNote: (state, action: PayloadAction<INoteUpdate>) => {
            const {id, name, content, category} = action.payload
            const existUser = state.notes.find(note => note.id === id)
            if (existUser) {
                existUser.name = name
                existUser.category = category
                existUser.content = content
                existUser.dates = dateForDates(content)
            }
        }
    }
})

export const {addNote, delNote, archNote, updateNote} = noteSlice.actions
export default noteSlice.reducer

