// Write your code here
import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {countMango: 0, countBanana: 0}

  incrementMango = () => {
    this.setState(prevState => ({countMango: prevState.countMango + 1}))
  }

  incrementBanana = () => {
    this.setState(prevState => ({countBanana: prevState.countBanana + 1}))
  }

  render() {
    const {countMango} = this.state
    const {countBanana} = this.state

    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading-text">
            Bob ate <span className="span-text">{countMango}</span> mangoes{' '}
            <span className="span-text">{countBanana}</span> bananas
          </h1>
          <div className="flex-container">
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="mango-image"
              />
              <div>
                <button
                  type="submit"
                  className="mango-button"
                  onClick={this.incrementMango}
                >
                  Eat Mango
                </button>
              </div>
            </div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="mango-image"
              />
              <div>
                <button
                  type="submit"
                  className="mango-button"
                  onClick={this.incrementBanana}
                >
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
