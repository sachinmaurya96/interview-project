import React from "react";
import styled from "styled-components";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const TestimonialCard = () => {
  return (
    <Card>
      <div class="testimonial-container">
        <p class="testimonial">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia
          repellendus, vitae suscipit culpa molestiae possimus voluptate
          consequuntur odit nulla saepe obcaecati dolorem laudantium praesentium
          aspernatur mollitia aperiam laborum rem cum commodi doloremque
          asperiores officia hic similique. Sint ad nobis quos?
        </p>
        <div class="user">
          <img
            src="https://randomuser.me/api/portraits/women/46.jpg"
            alt="user"
            class="user-image"
          />
          <div class="user-details">
            <h4 class="username">Lola Smith</h4>
            <p class="role">Marketing</p>
          </div>
        </div>
      </div>
    </Card>
  );
};
const Card = styled.div`
.testimonial-container{
  background-color: var(--card-bg);

  color: var(--text-color);
  /* border-radius: 5px; */
  padding: 20px;
  max-width: 768px;
  position:relative;
  border: var(--border);
  margin: 50px 0;

  &:hover{
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }
}

.fa-quote{
  color:#FFD369;
  font-size: 28px;
  position: absolute;
  top: 70px;
}

.fa-quote-right{
  left: 40px;
}

.fa-quote-left{
  right: 40px;
}

.testimonial{
  line-height: 1.7;
  text-align: justify;
  margin-bottom: 30px;
}

.user{
  display:flex;
  align-items:center;
  justify-content: center;
}

.user .user-image{
  border-radius: 50%;
  border: 3px solid #FFD369;
  height: 75px;
  width: 75px;
  object-fit: cover;
}

.user .user-details{
  margin-left: 10px;
}

.user .username{
  margin: 0;
}

.user .role{
  font-weight: normal;
  margin: 10px 0;
}

.progress-bar{
  background-color: #FFD369;
  height: 4px;
  width: 100%;
  margin-bottom: 40px;
  animation: grow 10s linear infinite;
  transform-origin: left;
}
@media(max-width: 768px){
  .testimonial-container{
    padding: 20px 30px;
  }
  
  .fa-quote{
    display: none;
  }
}
`;
export default TestimonialCard;
