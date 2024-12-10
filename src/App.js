// App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import AddResource from './pages/AddResource';
import Resources from './pages/Resources';  // Import Resources
import SupportGroups from './pages/SupportGroups';
import PrivateRoute from './components/PrivateRoute';
import Navbar from './components/Navbar';  // Import Navbar
import ScheduleSession from './pages/schedule_session';
function App() {
    return (
        <Router>
            <Navbar />  {/* Navbar should be rendered once here */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
                <Route path="/add-resource" element={<PrivateRoute><AddResource /></PrivateRoute>} />
                <Route path="/resources" element={<Resources />} />  {/* Route for Resources */} 
                <Route path="/support-groups" element={<PrivateRoute><SupportGroups /></PrivateRoute>} />
                <Route path="/schedule-session" element={<ScheduleSession />}/>
            </Routes>
        </Router>
    );
}

export default App;
