import './App.css';
import { Route, Routes } from 'react-router-dom';
import PageLayout from './PageLayout/PageLayout';
import Modal from './components/Modal/Modal';

function App() {
  return (
    <div>
     <Routes>
      <Route path="/" element={ <PageLayout></PageLayout>} />
     </Routes>
    </div>
  );
}

export default App;
