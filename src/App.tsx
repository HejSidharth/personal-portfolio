
import './App.css'
import { ThemeProvider } from './components/theme-provider'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Projects from './pages/Projects'
import StudentQueue from './pages/projects/StudentQueue'
import Notemon from './pages/projects/Notemon'
import Trackalack from './pages/projects/Trackalack'
import Test from './Test'
import Taskmon from './pages/projects/Taskmon'
function App() {

  return (
    <>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <BrowserRouter>
    <Navbar/>
     <Routes>
     <Route path='/' element={<HomePage/>}/>
     <Route path='/projects' element={<Projects/>}/>
     <Route path='/projects/student-queue' element={<StudentQueue/>}/>
     <Route path='/projects/notemon' element={<Notemon/>}/>
     <Route path='/projects/trackalack' element={<Trackalack/>}/>
     <Route path='/test' element={<Test/>}/>
     <Route path='/projects/taskmon' element={<Taskmon/>}/>


      </Routes>
      <Footer/>
     </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App