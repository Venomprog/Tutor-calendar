import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HomePage } from '../pages/home/ui/HomePage';
import {CalendaerPage} from '../pages/calendar/ui/CalendaerPage';
import Header from '../widgets/Header/ui/Header';
import { Provider } from 'react-redux';
import {store} from './store';
import AuthPage from 'src/pages/auth/ui/AuthPage';
import StudentsPage from 'src/pages/students/ui/StudentsPage';
import StudentProfilePage from 'src/pages/studentProfile/ui/StudentProfile';
import { Navbar } from 'src/widgets/Navbar/ui/Navbar';

export const App = () => {
  return (
    <Provider store={store}>

      <div className="App">
        <Header/>
        <Router>
          <Routes>
            <Route path='/' element={<HomePage/>}>
              <Route path='calendar' element={<CalendaerPage/>}></Route>
              <Route path='auth' element={<AuthPage/>}></Route>
              <Route path='students' element={<StudentsPage/>}></Route>
              <Route path='students/:studentId' element={<StudentProfilePage/>}></Route>
            </Route>
          </Routes>
          <Navbar/>
        </Router>
      </div>
    </Provider>
  );
}


export default App


