import { useState } from 'react'
import  TextInput from './types'
import StatsDisplay from './types'
import './App.css'

function App() {
  const [text, setText]= useState(" ")

  const handleTextChange = (text:string)=> {
    setText(text)
  }

  return (
    <>
      <TextInput 
      onTextChange={handleTextChange}
      placeholder="Enter text"
      initialValue=" "

      />
    </>
  )
}

export default App
