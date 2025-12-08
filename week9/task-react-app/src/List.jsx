import { useState } from 'react'
// import Input from './TaskInput.jsx'
// import Item from './TaskItem.jsx'
// use the items and add it to the setIems.
// using the count as the id btw.

function list() {
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState("");
    const [count, setCount] = useState(0);
    const addItem = () => {
        let isCompleted = false;
        setItems([...items, {id: count, text: newItem, completed: isCompleted, createdAt: new Date()}]);
        setNewItem("");
    };
    const removeItem = (id) => {
        setItems(items.filter(item => item.id !== id));
    };
    return (
        <div>
            <ul> {items.map((item, index) => (
                 <li type="checkbox" key={index}>{item}</li> 
                 ))} 
            </ul> 
            <input value={newItem} onChange={(e) => setNewItem(e.target.value)} />
            <button onClick={addItem} {...() => setCount(count + 1)}>Add</button>
        </div>
    );
};

export default list