import React from 'react'
import styled from 'styled-components'
import './Section.css'

import Fade from 'react-reveal/Fade';
export default function Section(props) {
    return (
        <Wrap bgimage={props.backgroundimg}>
            <Fade bottom>
            <Itemtext>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
            </Itemtext>
            </Fade>
            <Button >
            <Fade bottom>
            <Buttongroup>
                <Leftbutton> {props.leftbtntext}</Leftbutton>
                {props.rightbtntext &&
                    <Rightbutton> {props.rightbtntext} </Rightbutton>
                }
                
            </Buttongroup>
            </Fade>
            <Downarrow src="\images\down-arrow.svg" alt="white drop down arrow PNG image with transparent background "/>
          </Button>
        
        </Wrap>
           
    )
}


 const Wrap = styled.div`
     height:100vh;
     width:100vw;
     
     /*background-image: url("https://tesla-cdn.thron.com/delivery/public/image/tesla/32e5e0f3-5c04-42ef-8f8f-c6b1c26f8a9e/bvlatuR/std/2880x1800/ms-main-hero-desktop");*/
      background-size:cover;
      background-repeat: no repeat;
      background-position:center;
      display:flex;
      flex-direction:column;
      justify-content:space-between;
      align-items:center;
      background-image:${props=> `url("${props.bgimage}")`}
     /*background-image:url("C:\Users\esraa\tesla-clone\src\images\model-s.jpg")8*/
`;

const Itemtext = styled.div`

z-index:-1;
padding-top:15vh;
text-align:center;
`
const Buttongroup = styled.div`
display:flex;
margin-bottom:30px;

@media(max-width:768px){
    flex-direction:column;
}

`
const Leftbutton = styled.div`
 background-color:rgba(23,26,32,0.8);
 height:40px;
 width:256px;
 color:white;
 display:flex;
 justify-content:center;
 align-items:center;
 border-radius:100px;
 opacity:0.85;
 text-transform:uppercase;
 font-size:12px;
 cursor:pointer;
 margin:8px;
`

const Rightbutton = styled(Leftbutton)`
background:white;
opacity:0.65;
color:black;

`

const Downarrow= styled.img`


height:40px;
overflow-x:hidden;
animation:animateDown infinite 1.5s;

`
const Button = styled.div`
`