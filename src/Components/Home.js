import React from 'react'
 import styled from "styled-components"
import Section from './Section'

export default function Home() {
    return (
       <Container>
          
           <Section
               title="Model S"
               description="Order Online for touchless Delivery"
               backgroundimg="/images/model-s.jpg"
               leftbtntext="Custom order"
               rightbtntext="Existing Inventory"
           />
           
           <Section 
               title="Model Y"
               description="Order Online for touchless Delivery"
               backgroundimg="https://www.cnet.com/a/img/resize/9356af48c1e2f9387232881301109af24ee2ec6c/hub/2021/03/24/32c8ddfa-59e3-4279-bf75-fd96dee83a3a/0x0-model-y-05.jpg?auto=webp&width=1092
               "
               leftbtntext="Custom order"
               rightbtntext="Existing Inventory"
           />
            <Section 
               title="Model 3"
               description="Order Online for touchless Delivery"
               backgroundimg="/images/model-3.jpg"
               leftbtntext="Custom order"
               rightbtntext="Existing Inventory"
           />
           

           <Section 
           
               title="Model X"
               description="Order Online for touchless Delivery"
               backgroundimg="/images/model-x.jpg"
               leftbtntext="Custom order"
               rightbtntext="Existing Inventory"
           />
           <Section 
               title="Lowest cost solar panels in America"
               description="Money-back guarantee"
               backgroundimg="/images/solar-panel.jpg"
               leftbtntext="Order now"
               rightbtntext="Learn more"
           />
           <Section 
               title="Solar for New Roofs"
               description="solar roof cost less than a new roof plus solar panels"
               backgroundimg="/images/solar-roof.jpg"
               leftbtntext="Order now"
               rightbtntext="Learn more"
           />
            <Section 
               title="Accessories"
               description=""
               backgroundimg="/images/accessories.jpg"
               leftbtntext="Shop now"
               rightbtntext=""
           />
           
           
       </Container>
            
        
    )
}


const Container = styled.div`
height:100vh;
z-index:10;
`