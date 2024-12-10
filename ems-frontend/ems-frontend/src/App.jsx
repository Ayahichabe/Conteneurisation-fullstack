
import './App.css'
import AddStudent from './Components/AddStudent'
import Footer from './Components/Footer'
import Header from './Components/Header'
import ListStudent from './Components/ListStudent'
import{BrowserRouter,Routes , Route} from 'react-router-dom'
import StudentDetails from './Components/StudentDetails'
import NewNote from './Components/NewNote'


function App() {
  
  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
        {/* // http://localhost:5174 */}
        <Route path='/' element = {<ListStudent/>}></Route>
        {/* // http://localhost:5174/students */}
        <Route path='/students' element = {<ListStudent/>}></Route>
        {/* // http://localhost:5174/add-student */}
        <Route path='/add-student' element = {<AddStudent/>}></Route>
        {/* // http://localhost:5174/student-details/:id */} 
        <Route path="/students/:id" element={<StudentDetails />} /> 
         {/* // http://localhost:5174/add-student */}
         <Route path='/add-note' element = {<NewNote/>}></Route>
       
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App  
