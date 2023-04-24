import './App.css';
import JobForm from './JobForm'; // Import the JobForm component
import JobList from './JobList'; // Import the JobList component
import HomePage from './HomePage';
import Consumer from './Consumer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import necessary components from react-router-dom
import ConsumerSignup from './ConsumerSignup';
import ConsumerPage from './ConsumerPage';
import MakerPage from './MakerPage';
import MakerSignup from './MakerSignup';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/consumerpage' element={<ConsumerPage/>} />
        <Route path="/consumer" element={<JobForm />} />
        <Route path="/makerpage" element={<MakerPage />} />
        <Route path="/consumersignup" element={<ConsumerSignup />} />
        <Route path="/makersignup" element={<MakerSignup />} />
        <Route path="/maker" element={<JobList />} />
      </Routes>
    </Router>
  );
};

export default App;
