import React from 'react'
import styled from "styled-components";

const SliderCard = () => {
  return (
    <Card>
      <h3>empowering your businness</h3>
      <h1>With our expert service and </h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt quos officiis dolorum illum, eligendi asperiores!</p>
    </Card>
  )
}
const Card = styled.div`
display: flex;
flex-direction: column;
align-items: start;
text-align: left;
gap: 20px;
color: #fff;
    h3{
        text-transform: capitalize;
        font-weight: 400;
    }
    h1{
        text-transform: uppercase;
        font-weight: 600;
        font-size: 40px;
    }
    p{
        text-transform: capitalize;
    }
`
export default SliderCard
