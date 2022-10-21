import React from "react";
import styled from "styled-components";

const CustomJson = styled.pre`
  border: 1px solid #ccc;
  background: rgba(0, 0, 0, 0.1);
  box-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.2);
  padding: 20px;
  margin: 0 10px 0;
`;

export const Json = props => <CustomJson {...props}>{JSON.stringify(props.values, 0, 2)}</CustomJson>;


const CustomLoading = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 10rem;
`;

const CustomSpin = styled.div`
  color: #00629B;
`;

const SpinText = styled.span`
  font-family: Noto Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 1rem;
  text-align: center;
  padding-left: 20px;
  font-size: 1.222rem;
  color: #00629B;
`;

export const Loading = ({ text="Carregando..." }) => {
  return (
    <CustomLoading>
      <CustomSpin className="spinner-border" /> <SpinText>{text}</SpinText>
    </CustomLoading>
  );
};