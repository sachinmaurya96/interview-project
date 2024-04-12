import React from "react";
import styled from "styled-components";

const FlipCard = () => {
  return (
    <Card>
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <p class="title">Production</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, fuga repellat odit doloribus ex nisi aliquam sunt sapiente tempora accusamus facere officiis consectetur? Ducimus, dolorem!</p>
          </div>
          <div class="flip-card-back">
            <p class="title">production</p>
            <button>View more</button>
          </div>
        </div>
      </div>
    </Card>
  );
};
const Card = styled.div`
  .flip-card {
    background-color: transparent;
    width: 100%;
    height: 254px;
    perspective: 1000px;
    font-family: sans-serif;
  }

  .title {
    font-size: 1.5em;
    font-weight: 900;
    text-align: center;
    margin: 10px 0;
    text-transform: capitalize;
  }

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }

  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }
.flip-card-back {
    display: flex;
    flex-direction: column;
    align-items: center;
    button{
    width: max-content;
    padding: 10px 15px;
    border: 1px solid lightgray;
    outline: none;
    cursor: pointer;
    border-radius: 10px;
    font-size: 15px;
    background-color: rgb(18, 143, 245);
    color: #fff;
    transition: 0.3s;
    &:hover{
        background-color: #fff;
        color: black;
    }
}
}
  .flip-card-front,
  .flip-card-back {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border: 1px solid lightgray;
    border-radius: 1rem;
    padding: 10px;
  }

  .flip-card-front {
    background: linear-gradient(
      120deg,
      #fff 60%,
      rgb(255, 255, 255) 88%,
      rgb(255, 255, 255) 40%,
      rgba(80, 191, 255, 0.603) 48%
    );
    color: #3d3d3d;
  }

  .flip-card-back {
    background: linear-gradient(
      120deg,
      rgb(18, 143, 245) 30%,
      rgb(18, 143, 245),
      rgb(18, 143, 245),
      rgb(18, 143, 245) 78%
    );
    color: white;
    transform: rotateY(180deg);
  }
`;
export default FlipCard;
