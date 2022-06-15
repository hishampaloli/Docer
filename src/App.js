import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Page1 from './pagess/Page1/Page1';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page2 from './pagess/Page2/Page2';
import Page3 from './pagess/Page3/Page3';
import Page4 from './pagess/Page4/Page4';
import Header from './components/header/Header';

function App() {
  return (
    <div className="App">
    <Router>
    <Header />
      <Routes>
        <Route exact path="/" element={<Page1 />} />
        <Route exact path="/page2" element={<Page2 />} />
        <Route exact path="/page3" element={<Page3 />} />
        <Route exact path="/page4" element={<Page4 />} />
      </Routes>
    </Router>
  </div>
  );
}

export default App;
