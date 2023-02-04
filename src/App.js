import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Landing from './pages/Landing';
import PersonalInfo from './pages/PersonalInfo';
import EducationPage from './pages/EducationPage';
import ExperiencePage from './pages/ExperiencePage';
import CVPage from './pages/CVPage';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/PersonalInfo" element={<PersonalInfo />} />
          <Route path="/Education" element={<EducationPage />} />
          <Route path="/Experience" element={<ExperiencePage />} />
          <Route path="/CV" element={<CVPage />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
