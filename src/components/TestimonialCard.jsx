import React from "react";
import styled from "styled-components";
import { FaQuoteLeft,FaQuoteRight } from "react-icons/fa";

const TestimonialCard = () => {
  return (
    <Card>
      <div className="page">
        <div className="margin"></div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mauris
          risus, lobortis a neque aliquet, ornare rutrum purus. Integer
          hendrerit ac est non cursus. Integer quis risus tincidunt nunc mattis
          ultricies. Proin sed enim tellus.
        </p>
      </div>
      <div className="user">
        <div className="image">
            <img src="https://mscorpres.com/assets/images/user-blank.png" alt="user" />
        </div>
        <p className="name">jhon doe</p>
        <p className="bio">iit delhi</p>
      </div>
    </Card>
  );
};
const Card = styled.div`
.user{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
    .name{
        font-size: 20px;
        text-transform: capitalize;
        margin-top: 10px;
        font-weight: 600;
    }
    .bio{
        color: gray;
        text-transform: uppercase;
    }
    .image{
        width: 100px;
        height: 100px;
       border-radius: 50%;
        overflow: hidden;
        background-color: red;
        border: 1px solid lightgray;
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            background-position: center;
        }
    }
}
  .page {
    position: relative;
    box-sizing: border-box;
    max-width: 100%;
    min-height: 200px;
    max-height: max-content;
    font-family: cursive;
    font-size: 20px;
    border-radius: 10px;
    background: #fff;
    background-image: linear-gradient(#f5f5f0 1.1rem, #ccc 1.2rem);
    background-size: 100% 1.2rem;
    line-height: 1.2rem;
    padding: 1.4rem 0.5rem 0.3rem 4.5rem;
  }

  .page::before,
  .page::after {
    position: absolute;
    content: "";
    bottom: 10px;
    width: 40%;
    height: 10px;
    box-shadow: 0 5px 14px rgba(0, 0, 0, 0.7);
    z-index: -1;
    transition: all 0.3s ease;
  }

  .page::before {
    left: 15px;
    transform: skew(-5deg) rotate(-5deg);
  }

  .page::after {
    right: 15px;
    transform: skew(5deg) rotate(5deg);
  }

  .page:hover::before,
  .page:hover::after {
    box-shadow: 0 2px 14px rgba(0, 0, 0, 0.4);
  }

  .margin {
    position: absolute;
    border-left: 1px solid #d88;
    height: 100%;
    left: 3.3rem;
    top: 0;
  }

  .page p {
    margin: 0;
    text-indent: 1rem;
    padding-bottom: 1.2rem;
    color: black;
    line-height: 20px;
    text-align: center;
  }
`;
export default TestimonialCard;
