import React from 'react'
import '../Home/Home.css'

const Home = (props) => {
    const platos = props.menu.map((plato)=>{
        return(
            <div key={plato.id} className='card'>
                <img src={plato.img} alt="" className='img'/>
                <p>El plato es {plato.name},es como {plato.description},y cuesta {plato.price}</p>
            </div>
        )
    })
  return (
    <div>
        <h1>Menu del dia</h1>
        <div className='home'>
        {platos}
        </div>
    </div>
  )
}

export default Home