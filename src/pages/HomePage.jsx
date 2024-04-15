import React from "react";
import SimpleCard from "../components/SimpleCard";
import styled from "styled-components";
import FullSLider from "../components/FullSLider";
import FlipCard from "../components/FlipCard";
import TestimonialCard from "../components/TestimonialCard";
import TestimonialSlider from "../components/TestimonialSlider";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <Home>
      <div className="main">
        <div className="hero_section">
          <div className="container">
            <div className="sliders">
              <FullSLider />
            </div>
            <div className="image"></div>
          </div>
        </div>
       <div className="container">
       <div className="problem_solver">
          <h1>problem solver</h1>
          <p>SOLVING PROBLEMS FOR EVERY PART OF YOUR BUSINESS OR START UP</p>
          <div className="cards">
            <SimpleCard />
            <SimpleCard />
            <SimpleCard />
          </div>
        </div>
       </div>
        <div className="container">
        <div className="problem_solver">
          <h1>problem solver</h1>
          <p>SOLVING PROBLEMS FOR EVERY PART OF YOUR BUSINESS OR START UP</p>
          <div className="cards">
            <FlipCard />
            <FlipCard />
            <FlipCard />
            <FlipCard />
            <FlipCard />
            <FlipCard />
          </div>
        </div>
        </div>
        <div className="container">
        <div className="about">
          <div className="image">
            <img
              src="https://mscorpres.com/assets/images/about-us-30092021.png"
              alt="who we are"
            />
          </div>
          <div className="content">
            <h3>who we are</h3>
            <h2>At MsCorpres, our team follows five principles as its value</h2>
            <p>
              We are a company with a straightforward and simple vision and
              mission is "To make our customers successful." We believe that
              your success is our business. To achieve our vision and mission,
              we bring customized
            </p>
            <button>
              <span>read more</span>
              <svg
                width="15"
                height="15"
                stroke="currentColor"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        </div>
       <div className="container">
       <div className="testimonial">
          <h1>Testimonial</h1>
          <div className="sliders">
            <TestimonialSlider />
          </div>
        </div>
       </div>
        <div className="trustedby"></div>
      </div>
    </Home>
  );
};
const Home = styled.section`
  width: 100%;
  overflow-x: hidden; 
  .container{
   margin-top: 50px;
  }
  .hero_section {
    background-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.52),
        rgba(0, 0, 0, 0.73)
      ),
      url("https://i.postimg.cc/zBDKmRyL/annie-spratt-Qckxruozj-Rg-unsplash.jpg");
    
    height: 80vh;
    .container{
      display: flex;
     align-items: center;
     height: 100%;
    }
    .sliders {
      max-width: 650px;
      min-width: 300px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .image {
      padding: 30px;
      img {
        width: 100%;
        height: auto;
      }
    }
  }
  .problem_solver {
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: var(--text-color);

    h1 {
      text-transform: capitalize;
      font-weight: 600;
      color: var(--text-color);
    }
    .cards {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
    }
  }
  .about {
    display: flex;
    gap: 50px;
    align-items: center;
    .content {
      display: flex;
      flex-direction: column;
      gap: 10px;
      height: 100%;
      color: var(--text-color);
      h3 {
        font-weight: 600;
        font-size: 18px;
        text-transform: capitalize;
      }
      h2 {
        font-size: 25px;
      }
      p {
        font-size: 15px;
      }
      button {
        margin-top: 10px;
        width: max-content;
        background-color: #488aec;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.3s linear;
        /* border-radius: 10px; */
        border: none;
        padding: 10px 20px;
        font-size: 15px;
        text-transform: capitalize;
        box-shadow: 0 0.7065919983928324px 0.7065919983928324px -0.625px #00000026,
          0 1.8065619053231785px 1.8065619053231785px -1.25px #00000025,
          0 3.6217592146567767px 3.6217592146567767px -1.875px #00000023,
          0 6.8655999097303715px 6.8655999097303715px -2.5px #00000020,
          0 13.646761411524492px 13.646761411524492px -3.125px #0000001b,
          0 30px 30px -3.75px #0000000d;
      }

      button > svg {
        margin-left: 5px;
        transition: all 0.4s ease-in;
      }

      button:hover > svg {
        font-size: 1.2em;
        transform: translateX(6px);
      }

      button:hover {
        box-shadow: 10px 10px 40px #d1d1d1;
        transform: translateY(-5px);
      }
    }
  }
  .testimonial {
    h1 {
      text-align: center;
    }
    .sliders {
      margin-top: 20px;
    }
  }
  @media only screen and (max-width: 1024px) {
    .problem_solver {
      .cards {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  }
  @media only screen and (max-width: 989px) {
    .hero_section {
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
    }
    .about {
      display: flex;
      gap: 20px;
      flex-direction: column;
      align-items: center;
      background-color: #fff;
      .content {
        align-items: center;
      }
    }
  }
  @media only screen and (max-width: 600px) {
    .problem_solver {
      .cards {
        grid-template-columns: 100%;
      }
    }
    .hero_section {
      .sliders {
        width: 500px;
      }
    }
  }
  @media only screen and (max-width: 426px) {
    .problem_solver {
      .cards {
        grid-template-columns: 100%;
      }
    }
    .hero_section {
      .sliders {
        width: 300px;
      }
    }
  }
`;
export default HomePage;
