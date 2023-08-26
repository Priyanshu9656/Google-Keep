import React, { useState } from 'react';
const CreateNote=(props)=>{

    const [expand,setexpand]=useState(false);
    const [note,setNote]=useState({
        title: "",
        content: "",
    });
    
    const InputEvent=(event)=>{

        const{name,value}=event.target;
        setNote((prevData)=>{
            return{
                ...prevData,
                [name]:value
            }
        })
    }

    const addEvent=()=>{
        props.passNote(note);
        setNote({
            title: "",
            content: "",
        })
    }

    const expandit=()=>{
        setexpand(true);
    }

    const batn=()=>{
        setexpand(false);
    }
    return(
    <>
     <div className='main_note' onDoubleClick={batn}>
     <form>
     {expand?
        <input type='text' name="title" value={note.title} onChange={InputEvent} placeholder="Title" />:null}
        <textarea onClick={expandit} rows='' name="content" column="" value={note.content} onChange={InputEvent} placeholder='Write a note...'></textarea>
     </form>
     {expand?<button onClick={addEvent} className="plus-sign">+</button>:null}
     </div>
    </>
    )
}

export default CreateNote;