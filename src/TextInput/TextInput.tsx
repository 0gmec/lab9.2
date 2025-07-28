import {useState} from 'react'
import { TextInput } from '../types'

export default function TextInput() {
    const [text, setText]= useState("Text")

const handleClick= ()=> {
    setText("Text Sent")

}
   return (
    <div className="TextInput">
        <p>Text</p>
        <button onClick={()=> setText}></button>
    </div>
   )

}
