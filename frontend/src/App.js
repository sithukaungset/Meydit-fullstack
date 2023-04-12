import logo from './logo.svg';
import './App.css';
import JobForm from './JobForm'; // Import the JobForm component
import JobList from './JobList'; // Import the JobList component


function App() {
  return (
    <div className="App">
      {/* Render the JobForm component */}
      <JobForm />

      {/* Render the JobList component */}
      <JobList />
    </div>
  );
}

export default App;
