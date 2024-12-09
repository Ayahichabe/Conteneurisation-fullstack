
import './App.css'
import AddStudent from './Components/AddStudent'
import Footer from './Components/Footer'
import Header from './Components/Header'
import ListStudent from './Components/ListStudent'
import{BrowserRouter,Routes , Route} from 'react-router-dom'

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
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
