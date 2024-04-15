import React from "react";
import styled from "styled-components";

const SimpleCard = ({number}) => {
  return (
    <Card>
      <div className="card">
        <p className="card-title">{number}</p>
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
    border:var(--border);
    &:hover {
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
        0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }
  }
  .card-title {
    color: var(--text-color);
    font-size: 3em;
    line-height: normal;
    font-weight: 700;
    margin-bottom: 0.5em;
  }

  .small-desc {
    font-size: 1em;
    font-weight: 400;
    line-height: 1.5em;
    color: var(--text-color);
  }

  .small-desc {
    font-size: 1em;
  }

  .card {
    display: block;
    position: relative;
    max-width: 100%;
    background-color: var(--card-bg);
    /* border-radius: 10px; */
    padding: 2em 1.2em;
    text-decoration: none;
    z-index: 0;
    overflow: hidden;
    color: var(--text-color);
    font-family: Arial, Helvetica, sans-serif;
  }
`;
export default SimpleCard;
