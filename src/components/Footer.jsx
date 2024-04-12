import React from "react";
import styled from "styled-components";
import { MdChevronRight } from "react-icons/md";
import { FaTwitter, FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <Wrapper>
      <div className="news_letter">
        <div className="popup">
          <form className="form">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 34 34"
                height="34"
                width="34"
              >
                <path
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  stroke="#115DFC"
                  d="M7.08385 9.91666L5.3572 11.0677C4.11945 11.8929 3.50056 12.3055 3.16517 12.9347C2.82977 13.564 2.83226 14.3035 2.83722 15.7825C2.84322 17.5631 2.85976 19.3774 2.90559 21.2133C3.01431 25.569 3.06868 27.7468 4.67008 29.3482C6.27148 30.9498 8.47873 31.0049 12.8932 31.1152C15.6396 31.1838 18.3616 31.1838 21.1078 31.1152C25.5224 31.0049 27.7296 30.9498 29.331 29.3482C30.9324 27.7468 30.9868 25.569 31.0954 21.2133C31.1413 19.3774 31.1578 17.5631 31.1639 15.7825C31.1688 14.3035 31.1712 13.564 30.8359 12.9347C30.5004 12.3055 29.8816 11.8929 28.6437 11.0677L26.9171 9.91666"
                ></path>
                <path
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  stroke="#115DFC"
                  d="M2.83331 14.1667L12.6268 20.0427C14.7574 21.3211 15.8227 21.9603 17 21.9603C18.1772 21.9603 19.2426 21.3211 21.3732 20.0427L31.1666 14.1667"
                ></path>
                <path
                  stroke-width="2.5"
                  stroke="#115DFC"
                  d="M7.08331 17V8.50001C7.08331 5.82872 7.08331 4.49307 7.91318 3.66321C8.74304 2.83334 10.0787 2.83334 12.75 2.83334H21.25C23.9212 2.83334 25.2569 2.83334 26.0868 3.66321C26.9166 4.49307 26.9166 5.82872 26.9166 8.50001V17"
                ></path>
                <path
                  stroke-linejoin="round"
                  stroke-linecap="round"
                  stroke-width="2.5"
                  stroke="#115DFC"
                  d="M14.1667 14.1667H19.8334M14.1667 8.5H19.8334"
                ></path>
              </svg>
            </div>
            <div className="note">
              <label className="title">Subscribe for updates</label>
              <span className="subtitle">
                Subscribe to this weekly news letter so you don’t miss out on
                the new hot tech topics.
              </span>
            </div>
            <input
              placeholder="Enter your e-mail"
              title="Enter your e-mail"
              name="email"
              type="email"
              className="input_field"
            />
            <button className="submit">Submit</button>
          </form>
        </div>
      </div>
      <div className="footer_content">
        <div className="container">
          <div className="about_company">
            <h3>MsCorpres Automation</h3>
            <p>
              Unit No 321, Tower - 4,
              <br />
              Assotech Business Cresterra, Sector 135,
              <br />
              Expressway Noida, UP 201301
              <br />
              GSTIN/UIN: 09AANCM0798D1Z4
              <br />
              CIN: U52601RJ2019PTC067024
              <br />
              <br />
              <strong>Phone 1:</strong> +91 75 29 939393 (For Recruitment)
              <br />
              <strong>Phone 2:</strong> +91 88 26 788880 (For Sales)
              <br />
              <strong>Email:</strong>{" "}
              <a href="#" className="__cf_email__">
                iot@mscorpres.in
              </a>
              <br />
            </p>
          </div>
          <div className="usefull_link">
            <h4>Useful Links</h4>
            <ul>
              <li>
                <MdChevronRight />{" "}
                <a href="https://www.mscorpres.com/index.php">Home</a>
              </li>
              <li>
                <MdChevronRight />{" "}
                <a href="https://www.mscorpres.com/about-us.php">About us</a>
              </li>
              <li>
                <MdChevronRight />{" "}
                <a href="https://www.mscorpres.com/services.php">Services</a>
              </li>
              <li>
                <MdChevronRight />{" "}
                <a href="https://www.mscorpres.com/terms-and-services.php">
                  Terms of service
                </a>
              </li>
              <li>
                <MdChevronRight />{" "}
                <a href="https://www.mscorpres.com/privacy-and-policy.php">
                  Privacy policy
                </a>
              </li>
            </ul>
          </div>
          <div className="our_services">
            <h4>Our Services</h4>
            <ul>
              <li>
                <MdChevronRight /> <a>--</a>
              </li>
              <li>
                <MdChevronRight /> <a>--</a>
              </li>
              <li>
                <MdChevronRight /> <a>--</a>
              </li>
              <li>
                <MdChevronRight /> <a>--</a>
              </li>
              <li>
                <MdChevronRight />{" "}
                <a href="./sitemap.xml" targe="_blank" title="XML Sitemap">
                  Site Map
                </a>
              </li>
            </ul>
          </div>
          <div className="social_links">
            <h4>Our Social Networks</h4>
            <p>You can find us here also -</p>
            <div className="social">
              <a href="#" className="twitter">
                <FaTwitter size={25} />
              </a>
              <a href="#" className="facebook">
                <FaFacebook size={25} />
              </a>
              <a href="#" className="linkedin">
                <FaLinkedin size={25} />
              </a>
              <a href="#" className="youtube">
                <FaYoutube size={25} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
       <div className="container">
       © Copyright{" "}
        <strong>
          <span>MsCorpres</span>
        </strong>{" "}
        | All Rights Reserved
       </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.footer`
  background-color: #f1fffe;
  border-top: 1px solid lightgray;
  .copyright{
    padding: 20px 0;
  }
  .footer_content {
    margin-top: 50px;
    background-color: #fff;
    padding: 20px 0;
    .container {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 50px;
    }
    .usefull_link,
    .our_services {
      ul {
        display: flex;
        flex-direction: column;
        gap: 15px;
        margin-top: 15px;
        li {
          list-style: none;
          display: flex;
          align-items: center;
        }
      }
    }
    .social_links {
      display: flex;
      flex-direction: column;
      gap: 15px;
      .social {
        display: flex;
        align-items: center;
        gap: 10px;

        a {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 5px 10px;
          color: #fff;
          border-radius: 5px;
        }
        .twitter {
          background-color: #0f9afb;
        }
        .facebook {
          background-color: #0d6efd;
        }
        .linkedin {
          background-color: #0a66c2;
        }
        .youtube {
          background-color: #ff0101;
        }
      }
    }
  }
  .news_letter {
    display: flex;
    justify-content: center;
    align-items: center;
    .popup {
      position: relative;
      width: 600px;
      height: fit-content;
    }

    .form {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 20px;
      gap: 20px;
    }

    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 60px;
      height: 60px;
      background: #ecf1fd;
      box-shadow: 0px 0.5px 0.5px #efefef,
        0px 1px 0.5px rgba(239, 239, 239, 0.5);
      border-radius: 5px;
    }

    .note {
      display: flex;
      flex-direction: column;
      gap: 8px;
      text-align: center;
    }

    .title {
      font-style: normal;
      font-weight: 700;
      font-size: 17px;
      line-height: 24px;
      color: #2b2b2f;
    }

    .subtitle {
      font-style: normal;
      font-weight: 600;
      font-size: 13px;
      line-height: 18px;
      color: #5f5d6b;
    }

    .input_field {
      width: 100%;
      height: 42px;
      padding: 0 0 0 12px;
      border-radius: 5px;
      outline: none;
      border: 1px solid #e5e5e5;
      filter: drop-shadow(0px 1px 0px #efefef)
        drop-shadow(0px 1px 0.5px rgba(239, 239, 239, 0.5));
      transition: all 0.3s cubic-bezier(0.15, 0.83, 0.66, 1);
    }

    .input_field:focus {
      border: 1px solid transparent;
      box-shadow: 0px 0px 0px 1px #2b2b2f;
      background-color: transparent;
    }

    .form {
      button {
        text-transform: uppercase;
        display: flex;
        align-items: center;
        gap: 5px;
        border-radius: 8px;
        height: 40px;
        border: none;
        background-color: #488aec;
        color: white;
        padding: 15px;
        box-shadow: 0 0.7065919983928324px 0.7065919983928324px -0.625px #00000026,
          0 1.8065619053231785px 1.8065619053231785px -1.25px #00000025,
          0 3.6217592146567767px 3.6217592146567767px -1.875px #00000023,
          0 6.8655999097303715px 6.8655999097303715px -2.5px #00000020,
          0 13.646761411524492px 13.646761411524492px -3.125px #0000001b,
          0 30px 30px -3.75px #0000000d;
        font-weight: bold;
        font-family: Montserrat;
        cursor: pointer;
        display: flex;
        align-items: center;
        transition: 150ms ease-in-out;
      }

      button:active {
        scale: 0.95;
        background: #fff;
        color: black;
        box-shadow: rgba(0, 0, 0, 0.26) 0px 0.637473px 1.14745px -1.125px,
          rgba(0, 0, 0, 0.24) 0px 1.93094px 3.4757px -2.25px,
          rgba(0, 0, 0, 0.192) 0px 5.10423px 9.18761px -3.375px,
          rgba(0, 0, 0, 0.03) 0px 16px 28.8px -4.5px;
      }
    }
  }
  .footer_content {
  }
  @media only screen and (max-width: 989px){

  }
`;
export default Footer;
