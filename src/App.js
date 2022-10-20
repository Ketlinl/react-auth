import Login from "./Containers/login";
import styled from 'styled-components';


function App() {
  return (
    <Container className="container">
      <Login />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export default App;
