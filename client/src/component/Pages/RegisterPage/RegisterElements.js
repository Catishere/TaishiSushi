import styled from "styled-components";

export const FormTitle = styled.h2`
  color: white;
  text-align: center;
  margin-bottom: 10%;
  letter-spacing: 0.3rem;
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  text-align: center;
  font-style: light;
  font-weight: normal;
  background: linear-gradient(#141e30, #243b55);
  background-position: top left;
  /* border-radius: 20%; */
`;

export const Form = styled.form`
  background: rgba(0, 0, 0, 0.5);
  position: relative;
  padding-top: 1%;
  margin: 0 auto;
  top: 100px;
  width: 40%;
  height: 70%;
  min-width: 300px;

  box-shadow: 0 15px 15px #1b1b1b;
  background: linear-gradient(360deg, #070607 0%, #1F1E1H 100%);
  @media only screen and (max-width: 500px) {
    width: 100%;
    height: 100%;
    margin: 0;
    top: 0;
  }
`;

export const Input = styled.input`
  border: none;
  border-bottom: 1px solid white;
  background: transparent;
  margin: 2% 3% 5% 9%;
  font-size: 16px;
  caret-color: white;
  height: 30px;
  width: 80%;
  color: white;
  display: block;

  &::placeholder {
    color: white;
    text-align: center;
  }
`;
export const Label = styled.label`
  text-align: center;
  color: white;
`;

export const SubmitBtn = styled.button`
  background: transparent;
  border: 1px solid white;
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
  color: white;
  margin: auto 20px;
  padding: 5px 10px;
  font-size: 1rem;

  :hover {
    background-color: #243b55;
  }
`;
