import { useState } from "react";
import BookEdit from "./BookEdit";

function BookShow({book ,onDelete, onEdit}){
    const [editShow, setEditShow] = useState(false)

    const handleDeleteClick = () =>{
        onDelete(book.id)
    }
    const handleEditClick = () =>{
        setEditShow(!editShow);
    }
    const handleSubmit = (id,newTitle) =>{
        setEditShow(false);
        onEdit(id,newTitle);
    }


    let content = book.title;
    if(editShow){
        content = <BookEdit book={book} onSubmit={handleSubmit}/>
    }

    return <div className="book-show">
        <img alt='books' src={`https://picsum.photos/seed/${book.id}/300/200`}/>
        <div>{content}</div>
        <div className="actions">
            <button className="edit" onClick={handleEditClick}>Edit</button>
            <button className="delete" onClick={handleDeleteClick}>Delete</button>
        </div>
    </div>
}
export default BookShow;