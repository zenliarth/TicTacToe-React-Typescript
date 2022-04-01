import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  background: linear-gradient(to right, #333 0%, #eee 100%);
`;

export const Button = styled.button`
  width: 100px;
  height: 15px;
  min-width: 100px;
  min-height: 30px;
  background-color: #f44336;
  margin: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
  border: none;
  outline: none;
  border: 1px solid #000;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #000;
    color: #fff;
    border: 1px solid #f44336;
  }
`;

export const Moviments = styled.ol`
  width: 100%;
  max-width: 208px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  padding-inline-start: 0px;

  li {
    margin-bottom: 10px;
    font-weight: bold;
  }
  button {
    width: 100%;
    padding: 5px;
    background-color: #ddd;
    font-size: 14px;
    font-weight: bold;
    color: #333;
    cursor: pointer;
    border: none;
    outline: none;
    border: 1px solid #333;
    transition: all 0.3s ease-in-out;
  }
`;

export const Status = styled.div`
    width: 100%;
    max-width: 208px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    font-size: 16px;
    font-weight: bold;
    background-color: #000;
    color: #fff;
    padding: 5px 0;
    border: 1px solid #000;
    margin-top: 50px;

    span {
        padding: 5px 10px;
    }
`;

export const Tie = styled.div`
    width: 100%;
    max-width: 208px;
    height: 30px;
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: bold;
    background-color: #ddd;
    color: #333;
    border: 1px solid #000;
    
    p {
        width: 100%;
        padding: 0px 10px;
        text-align: center;
    }
`;
