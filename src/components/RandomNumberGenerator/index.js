import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {
    number: 0,
  }

  onClickRandaomNumber = () => {
    const random = Math.ceil(Math.random() * 100)
    this.setState({number: random})
  }

  render() {
    const {number} = this.state

    return (
      <div className="Random-container">
        <button
          type="button"
          className="random-button"
          onClick={this.onClickRandaomNumber}
        >
          Generate
        </button>
        <p className="number">{number}</p>
      </div>
    )
  }
}

export default RandomNumberGenerator
