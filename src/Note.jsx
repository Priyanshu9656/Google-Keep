import React from 'react';

const Note=(props)=>{
    const deleteNote=()=>{
        props.deleteItem(props.id);
        console.log(props.id);
    }
    return (<>
    <div className='note'>
    <h1>{props.title}</h1>
    <br/>
    <p>{props.content}</p>
    <button className="btn" onClick={deleteNote}> del </button>
    </div>
    </>);
};

export default Note;