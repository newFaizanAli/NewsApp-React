
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './HomePage';
import NewsContent from './Components/NewsContent';
import RootLayout from './RootLayout';

function App() {
  return (
   <>
     <Router>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<HomePage />} />
            <Route path="news" element={<NewsContent />} />
          </Route>
        </Routes>
      </Router>
   </>
  );
}

export default App;
