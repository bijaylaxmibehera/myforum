import './App.css'
import { Routes,Route } from 'react-router-dom'
import { Landing } from './Landing/Landing'
import { Header } from './component/Header/Header'

function App () {
  return <div className='App'>
     <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
  </div>
}

export default App
