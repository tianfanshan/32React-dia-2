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
      img:'http://ali.xinshipu.cn/20120517/original/1337242483632.jpg',
      price:10
    },
    {
      id:2,
      name:'Pasta china muy picante de ChongQing',
      description:'En la ciudad de ChonQing casi todos comen eso al dia',
      img:'https://i2.yanglegu.com/yanglegu/img/img/7056161ec3b40.jpg',
      price:20
    },
    {
      id:3,
      name:'Fideo muy popular de GuangDong',
      description:'Cuando andas por la ciudad de GuanDong por la calle,encuentras por todas partes esta comida tipica de la ciudad',
      img:'https://img.alicdn.com/bao/uploaded/i1/123678513/O1CN017E34e62Cl0IYOyukd_!!123678513.jpg',
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
