import { Routes, Route } from 'react-router-dom';
import Msg from './components/msgs/Msg';

const App = () => (
  <>
    <Routes>
      <Route path='/' element={<Msg />} />
    </Routes>
  </>
)

export default App;
