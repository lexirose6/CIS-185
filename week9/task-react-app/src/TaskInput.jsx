import { useState } from 'react'
import Item from './TaskItem.jsx'

function Input() {
    const [input, setInput] = useState("")

    Item.setId(count);
    Item.setText(input);
    Item.setCompleted(false);
    Item.setCreatedAt(new Date());
}
export default Input