import React ,{ useState } from 'react'
 import styled from 'styled-components'
 import  MenuIcon from '@mui/icons-material/Menu';
 import CloseIcon from '@mui/icons-material/Close';
 import { selectcars } from '../features/car/carslice';
 import { useSelector } from 'react-redux';


export default function Header() {
 
    const [burgerStatus, setBurgerStatus] = useState(false);
    const cars = useSelector(selectcars)
    return (
        <Container>
        <a>
            <img src="/images/logo.svg"/>
        </a>
        <Menu>

        {cars&&cars.map((car,index)=>(
            <p><a key={index} href="#"> {car}</a></p>
        ))}
            
           
        </Menu>
        <Rightm>
            <a href="#">Shop</a>
            <a href="#">Tesla Account</a>
            <Custommenu  onClick={()=>setBurgerStatus(true)}/>
        </Rightm>
        <Bnav  burgerStatus={burgerStatus}>
         <Closewrap>
         <Customclose onClick={()=>setBurgerStatus(false)}/>
         </Closewrap>
            {cars&&cars.map((car,index)=>(
           
            <li><a key={index} href="#"> {car}</a></li>
           ))}
            <li><a href="#"> Existing inventory</a></li>
            <li><a href="#"> used inventory</a></li>
            <li><a href="#"> trade inventory</a></li>
            <li><a href="#"> cyber truck</a></li>
            
        </Bnav>

        </Container>
    )
}
 const Container =styled.div`
 min-height:60px;
 position:fixed;
 display:flex;
 justify-content:space-between;
 align-items:center;
 padding:0 20px;
 top:0;
 left:0;
 right:0;
 z-index:1;
 
 `

 const Menu= styled.div`
 display:flex;
 align-items:center;
 justify-content:center;
 flex:1;
 p{
     font-weight:600;
     text-transform:uppercase;
     padding:0 10px;
     flex-wrap:nowrap;
 }
 @media(max-width:768px){
     display:none
 }
 `
 const Rightm=styled.div`
 display:flex;
 align-items:center;
 a{
     font-weight:600;
     text-transform:uppercase;
     margin-right: 10px;
    
 }
 `
 const Custommenu= styled(MenuIcon)`
 cursor:pointer;
 
 `
 
 
 const Bnav= styled.div`
 position:fixed;
 top:0;
 bottom:0;
 right:0;
 background:white;
 width:300px;
 z-index:100;
 list-style:none;
 padding:20px;
 display:flex;
 flex-direction:column;
 
 text-align:start;
 
 transform:${({burgerStatus})=>burgerStatus ?`translateX(0)`: `translateX(100%)` };
 transition:transform 0.2s ease-in-ease-out;
 li{
     padding:15px 0;
     border-bottom: 1px solid rgba(0,0,0,2);

     a{
         font-weight:400;

     }

 }
 `
 const Customclose=styled(CloseIcon)`
 cursor:pointer;
 
 `
 const Closewrap= styled.div`
  display:flex;
  justify-content:flex-end;
 
 `