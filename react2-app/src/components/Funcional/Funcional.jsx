import React,{useState,useEffect} from 'react'

const Funcional = (props) => {
    const numero = 2;
    const numero1 = 4;
    const [contador,setContador] = useState(props.initialValue);
    const [favoriteColor,setFavoriteColor] = useState('red')
    const increment = () => {
        setContador(contador+numero)
    }
    const disminuir = () => {
        setContador(contador-numero1)
    }
    const reset = () => {
      setContador(props.initialValue)
    }
    useEffect(()=>{
      setTimeout(()=>{
        setContador(contador * 100)
        setFavoriteColor('blue')
      },3000)
    },[])

      useEffect(()=>{
        return()=>{
          alert('El componente HA SIDO ELIMINADO')
        }
      })
  

  return (
    <div>
        <p>{favoriteColor}</p>
        <p>{contador}</p>
        <button onClick={increment}>Boton de incrementar</button>
        <button onClick={disminuir}>Boron de disminuir</button>
        <button onClick={reset}>para resetear</button>
    </div>
  )
}

export default Funcional