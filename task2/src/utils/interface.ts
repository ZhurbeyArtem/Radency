export interface INote {
    id: number,
    name: string,
    created: string,
    category: string,
    content: string,
    dates: string,
    archived: boolean
}

export interface INoteCreate{
    name: string,
    category: string,
    content: string
}
export interface INoteUpdate{
    id: number,
    name: string,
    category: string,
    content: string
}
export interface NotesSliceState {
    notes: INote[]
}