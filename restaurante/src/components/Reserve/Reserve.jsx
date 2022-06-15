import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Reserve = () => {
    let users = JSON.parse(localStorage.getItem('user')) || []
    const saveData =()=>{
        users.push(data)
        localStorage.setItem('user',JSON.stringify(users))
    }
    const date = new Date()
    const currentDate = date.getDate()
    let navigate =useNavigate()
    const [data,setData] = useState({
        name:'',
        phoneNumber:'',
        reserva:'',
        date:currentDate
    })
    const [btnDisabled,setBtnDisabled] = useState(true)
    const [message,setMessage] = useState('')
    const initialState = {
        name:'',
        phoneNumber:'',
        reserva:'',
        date:''
    }
    const clearState = () =>{
        setData({...initialState})
    }
    const handleInputChange = (event) =>{
        if(data.name.length < 2){
            setMessage('Tienes que introducir por lo menos 3 letras')
            setBtnDisabled(true)
        }else{
            setMessage(null)
            setBtnDisabled(false)
        }
        setData({
            ...data,
            [event.target.name]:event.target.value
        })
    }

    const handleSubmit = (event) =>{
        event.preventDefault()
        saveData()
        clearState()
        setMessage('Te llevamos al pagina Home')
        setTimeout(()=>{
            navigate('/')
        },3000)
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <input type="text"
            placeholder='name'
            value={data.name}
            onChange={handleInputChange}
            name='name'
        />
        <input type="text"
            placeholder='phoneNumber'
            value={data.phoneNumber}
            onChange={handleInputChange}
            name='phoneNumber'
        />
        <input type="date"
            placeholder='reserva'
            value={data.reserva}
            onChange={handleInputChange}
            name='reserva'
            min={new Date().toISOString().split("T")[0]}
        />
        <button type='submit' disabled={btnDisabled}>Enviar</button>
        </form>
        <p>{message}</p>
    </div>
  )
}

export default Reserve