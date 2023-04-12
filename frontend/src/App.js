import './App.css';
import JobForm from './JobForm'; // Import the JobForm component
import JobList from './JobList'; // Import the JobList component
import HomePage from './HomePage';
import Consumer from './Consumer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import necessary components from react-router-dom

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/consumer" element={<Consumer />} />
        <Route path="/maker" element={<JobForm />} />
      </Routes>
    </Router>
  );
};

export default App;
