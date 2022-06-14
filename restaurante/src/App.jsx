import './App.css';
import Header from './components/Header/Header'
import Home from './components/Home/Home.jsx'
import Reserve from './components/Reserve/Reserve';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Address from './components/Address/Address';



function App() {
  const dishes = [
    {
      id:1,
      name:'Empanadilla china',
      description:'Comida tradicional de China',
      img:'./assets/1337242483632.jpg',
      price:10
    },
    {
      id:2,
      name:'Pasta china muy picante de ChongQing',
      description:'En la ciudad de ChonQing casi todos comen eso al dia',
      img:'./assets/2021100716336175861992868819358.jpg',
      price:20
    },
    {
      id:3,
      name:'Fideo muy popular de GuangDong',
      description:'Cuando andas por la ciudad de GuanDong por la calle,encuentras por todas partes esta comida tipica de la ciudad',
      img:'./assets/O1CN017E34e62Cl0IYOyukd_!!123678513.jpg',
      price:15
    }
  ]
  
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home menu={dishes}/>}/>
        <Route path='/reserve' element={<Reserve />}/>
        <Route path='/address' element={<Address/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
