import React from "react";
import styled from "styled-components";

const FlipCard = ({title,img}) => {
  return (
    <Card>
      <div class="card">
        <div class="content">
          <img src="https://i.postimg.cc/KvPBTdYm/production.png" alt="production" />
          <p class="heading">Title</p>
          <p class="para">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
            laboriosam at voluptas minus culpa deserunt delectus sapiente
            inventore pariatur
          </p>
          <button class="btn">View More</button>
        </div>
      </div>
    </Card>
  );
};
const Card = styled.div`
  .card {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 20px;
    overflow: hidden;
    /* border-radius: 10px; */
    background: #fff;
    border: 1px solid lightgray;
    transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align:center;
    gap: 20px;
    color: black;
    transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);

    img{
      width: 50px;
      height: auto;
    }
  }

  .content .heading {
    font-weight: 700;
    font-size: 32px;
  }

  .content .para {
    line-height: 1.5;
  }

  .content .btn {
    color: #e8e8e8;
    text-decoration: none;
    padding: 10px;
    font-weight: 600;
    border: none;
    cursor: pointer;
    background-color: #488aec;
    /* border-radius: 5px; */
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    width: 100%;
   
  }

  .card:hover {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }

  .content .btn:hover {
    background-color: #5c96ec;
  }

  .content .btn:active {
    box-shadow: none;
  }
`;
export default FlipCard;
