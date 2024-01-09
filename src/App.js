
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Join from "./component/Join/Join";
import Chat from "./component/Chat/Chat"; // Import the Chat component
import Message from './component/Message/Message';



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Join/>}/>
          <Route path="/chat" element={<Chat/>}/>
          <Route path='/message' element={<Message/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
