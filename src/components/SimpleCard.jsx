import React from "react";
import styled from "styled-components";

const SimpleCard = () => {
  return (
    <Card>
      <div className="card">
        <p className="card-title">01</p>
        <p className="small-desc">
          Whether you're a startup looking for support or an MNC planning to
          enter the Indian market, we've got the right solutions. Grow and
          prosper with us, and say goodbye to business challenges.
        </p>
      </div>
    </Card>
  );
};
const Card = styled.div`
  .card {
    border: 1px solid lightgray;
    &:hover {
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
        0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }
  }
  .card-title {
    color: #262626;
    font-size: 3em;
    line-height: normal;
    font-weight: 700;
    margin-bottom: 0.5em;
  }

  .small-desc {
    font-size: 1em;
    font-weight: 400;
    line-height: 1.5em;
    color: #452c2c;
  }

  .small-desc {
    font-size: 1em;
  }

  .card {
    display: block;
    position: relative;
    max-width: 100%;
    background-color: #f2f8f9;
    /* border-radius: 10px; */
    padding: 2em 1.2em;
    text-decoration: none;
    z-index: 0;
    overflow: hidden;
    background: #fff;
    font-family: Arial, Helvetica, sans-serif;
  }
`;
export default SimpleCard;
