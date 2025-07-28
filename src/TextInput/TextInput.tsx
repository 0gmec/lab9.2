import { useState } from 'react'
import { TextInputProps } from '../types'


function TextInput({
}: TextInputProps) {

    const [text, setText] = useState(" ")

    const onTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newText = event.target.value
        setText(newText)

    }
    return (
        <div className="TextInput">
            <p>Text</p>
            <input type="text"
                id="myInput"
                value={text}
                onChange={onTextChange} />
            <button onClick={() => setText}>Text</button>
        </div>
    )

}



