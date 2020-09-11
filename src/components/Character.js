// Write your Character component here
import React from "react";
import styled, { keyframes } from "styled-components";

const big_card = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.05);
  }
`;

const Wrapper = styled.div`
  padding: 2rem 2.5rem;
  width: 32%;
  height: 32rem;
`;
const Card = styled.div`
  width: 90%;
  height: 95%;
  margin: 0 auto;
  padding: 2rem 1rem;
  background-color: white;
  border-radius: 8px;
  &:hover {
    animation: ${big_card} 2 0.8s linear;
  }
`;
const CardImg = styled.img`
  margin-bottom: 1rem;
`;
const CardBody = styled.div``;

const Character = (props) => {
  return (
    <Wrapper>
      <Card>
        <CardImg
          top
          width="50%"
          src={props.charData.image}
          alt={props.charData.name + " image"}
        />
        <CardBody>
          <h2>{props.charData.name}</h2>
          <p>Status: {props.charData.status}</p>
          <p>species: {props.charData.species}</p>
          <p>gender: {props.charData.gender}</p>
        </CardBody>
      </Card>
    </Wrapper>
  );
};

export default Character;
