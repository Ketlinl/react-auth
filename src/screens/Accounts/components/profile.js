import styled from 'styled-components';

export const ProfileComponent = props => {
  const { user } = props;

  if (!user) {
    return (
      <Container className="container">
        <p>Ola</p>
      </Container>
    )
  }

  return (
    <Container className="container">
      <p>Ola {user.name}</p>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;
