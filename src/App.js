
import './App.css';
import { CreateTaskComponent } from './components/CreateTask/CreateTaskComponent';
import { TaskComponent } from './components/TaskComponent';
import { TaskContextProvider } from './context/TaskContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { MainRoutes } from './Routes/MainRoutes';


function App() {
  return (
          <TaskContextProvider>
          <Container>
            <Row className="justify-content-center">
              <Col xs={3}>
            <MainRoutes />
              </Col>
            </Row>
          </Container>
          </TaskContextProvider>
  );
}

export default App;
