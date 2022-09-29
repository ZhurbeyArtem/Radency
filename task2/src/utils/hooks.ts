import {INote} from "./interface";

export function dateForCreated(date: any) {

    const month = date.toLocaleString('en-us', {month: 'long'})
    const year = date.getFullYear()
    const day = date.getDay()
    return `${month} ${day}, ${year}`

}
export function dateForDates(str: string) {
    const dates = str.match(/(\d{1,4}([.\-/])\d{1,2}([.\-/])\d{1,4})/g);
    if (dates) {
        return dates.join(", ");
    }
    return "";
}
export const calculateActive = (notes:INote[] ,category:string) =>
    notes.reduce(
        (acc, note) => (note.category === category && !note.archived ? acc + 1 : acc),
        0,
    );
export const calculateArchived = (notes:INote[] ,category:string) =>
    notes.reduce(
        (acc, note) => (note.category === category && note.archived ? acc + 1 : acc),
        0,
    );