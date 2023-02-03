import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Landing from './pages/Landing';
import PersonalInfo from './pages/PersonalInfo';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/app" element={<Landing />} />
          <Route path="/PersonalInfo" element={<PersonalInfo />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
