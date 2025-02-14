import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import LetterPage from './pages/LetterPage';
import MessagePage from './pages/MessagePage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LetterPage />} />
        <Route path="/message" element={<MessagePage />} />
      </Routes>
    </Router>
  );
}

export default App;