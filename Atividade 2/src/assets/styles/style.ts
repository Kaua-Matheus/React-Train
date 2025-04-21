import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: #d9d9d9;
  padding: 2.5rem 3.5rem;
  border-radius: 0.5rem;
  gap: 1.5rem;
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  height: 4rem;
  width: 4rem;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;

  p {
    margin: 0;
  }

  hr {
    border: 1px solid black;
    width: 100%;
  }
`;

const Button = styled.a`
  background-color: #065f46;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  text-decoration: none;
  text-align: center;

  &:hover {
    background-color: #064e3b;
  }
`;

export { Container, Card, ProfileImage, InfoContainer, Button };