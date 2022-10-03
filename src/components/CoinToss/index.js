import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    defaultImg: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
    flagHead: 0,
    flagTail: 0,
    totalCount: 0,
  }

  coinTheToss = () => {
    const tossResult = Math.floor(Math.random() * 2)
    console.log(tossResult)
    if (tossResult === 0) {
      this.setState({
        defaultImg: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      })
      this.setState(prevState => ({totalCount: prevState.totalCount + 1}))
      this.setState(prevState => ({flagHead: prevState.flagHead + 1}))
    } else {
      this.setState({
        defaultImg: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      })
      this.setState(prevState => ({totalCount: prevState.totalCount + 1}))
      this.setState(prevState => ({flagTail: prevState.flagTail + 1}))
    }
  }

  render() {
    const {defaultImg, flagHead, flagTail, totalCount} = this.state
    return (
      <div className="coin-toss-container">
        <div className="toss-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img src={defaultImg} className="img-resize" alt="toss result" />
          <button type="button" className="button" onClick={this.coinTheToss}>
            Toss Coin
          </button>
          <div className="head-tail-total-container">
            <p className="result">Total: {totalCount}</p>
            <p className="result">Heads: {flagHead}</p>
            <p className="result">Tails: {flagTail}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
