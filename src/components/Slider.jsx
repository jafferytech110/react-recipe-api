import React from 'react'
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";

const Slider = (props) => {
  return (
    <Wrapper>
      <h3>{props.heading}</h3>
      <Splide options={{
          perPage:4,
          arrows: false,
          pagination: false,
          drag: 'free',
          gap: '5rem'
      }}>
        {props.recipe.map((recipe) => {
          return (
            <SplideSlide key={recipe.id}>
              <Card key={recipe.id}>
                  <Link to={"/recipe/" + recipe.id}>
                    <p>{recipe.title}</p>
                    <img src={recipe.image} alt={recipe.title} />
                    <Gradient />
                </Link>
              </Card>
            </SplideSlide>
          );
        })}
      </Splide>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    
`;

const Card = styled.div`
overflow: hidden;
position: relative;
width:400px;
height:300px;

img{
    position:absolute;
    left:0;
    width:100%;
    height:100%;
    object-fit:cover;
}

p{
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 25%;
    transform: translate(-50%,0%);
    color:#fff;
    width:100%;
    text-align:center;
    font-weight:600;
    font-size: 1rem;
    height:40%;
    display:flex;
    justify-content: center;
    align-items: center;
}
`;

const Gradient = styled.div`
z-index:3;
position: absolute;
width:100%;
height:100%;
background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
border-radius:2rem;
`

export default Slider
