import RandomNumberGenerator from './components/RandomNumberGenerator'

import './App.css'

const App = () => (
  <div className="app-container">
    <div className="app-card">
      <h1 className="main-heading">Random Number</h1>
      <p className="description">
        Generate a random number in the range of 0 to 100
      </p>
      <RandomNumberGenerator />
    </div>
  </div>
)
export default App
