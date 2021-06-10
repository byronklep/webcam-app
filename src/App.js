import Header from './components/Header'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'

function App() {
  return (
    <Router>
      <Header />
      <Route path="/" component={HomePage} exact />
    </Router>
  )
}

export default App
