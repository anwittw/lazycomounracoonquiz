import styled from "styled-components";

export const FinalScoreCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
  max-width: 600px;
  background-color: #f2edef;
  padding: 20px;
`;

export const RestartButton = styled.button`
  cursor: pointer;
  margin: 10px 10px;
  word-wrap: break-word;
  height: 40px;
  width: 90%;
  background: linear-gradient(180deg, #f2edef, #21ae53);
  border: 2px solid #666c59;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  :focus {
    outline: none;
  }
  :hover {
    background: linear-gradient(180deg, #f2edef, #0b6864);
  }
`;
