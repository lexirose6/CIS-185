import { useState } from 'react'

function Item() {
    const [id, setId] = useState(0);
    const [text, setText] = useState("");
    const [completed, setCompleted] = useState(Boolean);
    const [createdAt, setCreatedAt] = useState(Date);

     
    return(
        item({
            id: setId,
            text: setText,
            completed: setCompleted,
            createdAt: setCreatedAt
        })
    )
}

    // <>
    //         <input type="checkbox" id={id} value={text}></input>
    //         <label for={id}>{text}</label>
    //     </>
export default Item