import Header from './components/Header'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import WebcamPage from './pages/WebcamPage'
import CContainer from './components/home/components/CContainer'
// import ContinentPage from './pages/ContinentPage'

function App() {
  return (
    <Router>
      <Header />

      <Route
        path={'/webcam/:id'}
        render={(props) => <WebcamPage {...props} />}
      />
      <Route path="/webcams/:selectedOption" component={CContainer} exact />
      <Route path="/page/:pageNumber" component={HomePage} />
      <Route path="/" component={HomePage} exact />
      {/* <Route path="/continents" component={ContinentPage} exact /> */}
    </Router>
  )
}

export default App
