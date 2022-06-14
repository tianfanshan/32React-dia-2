import React from 'react'
import '../Home/Home.css'
// import img from '../../assets/1337242483632.jpg'

const Home = (props) => {
    const platos = props.menu.map((plato)=>{
        console.log(props.menu)
        return(
            <div key={plato.id}>
                <img src={plato.img} alt="" className='img'/>
                <p>El plato es {plato.name},es como {plato.description},y cuesta {plato.price}</p>
            </div>
        )
    })
  return (
    <div>
        <h1>Menu del dia</h1>
        {/* <img src={img} alt="" /> */}
        <div className='home'>
        {platos}
        </div>
    </div>
  )
}

export default Home