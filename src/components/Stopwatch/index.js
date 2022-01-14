import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {
    isTimerRunning: false,
    timerCountInSeconds: 0,
  }

  componentWillUnmount() {
    clearInterval(this.timeInterval)
  }

  resetTimer = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimerRunning: false, timerCountInSeconds: 0})
  }

  stopTimer = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimerRunning: false})
  }

  updateTime = () => {
    this.setState(prevState => ({
      timerCountInSeconds: prevState.timerCountInSeconds + 1,
    }))
  }

  startTimer = () => {
    this.timeInterval = setInterval(this.updateTime, 1000)
    this.setState({isTimerRunning: true})
  }

  secondsDisplay = () => {
    const {timerCountInSeconds} = this.state
    const seconds = Math.floor(timerCountInSeconds % 60)

    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  minutesDisplay = () => {
    const {timerCountInSeconds} = this.state
    const minutes = Math.floor(timerCountInSeconds / 60)

    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  render() {
    const {isTimerRunning} = this.state
    const timer = `${this.minutesDisplay()}:${this.secondsDisplay()}`
    return (
      <div className="app-container">
        <div className="stopwatch-container">
          <h1>Stopwatch</h1>
          <div className="timer-container">
            <div className="timer">
              <img
                className="timer-img"
                alt="stopwatch"
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              />
              <p className="heading">Timer</p>
            </div>
            <h1 className="stopwatch-timer">{timer}</h1>
            <div className="timer-buttons">
              <button
                className="start-button"
                onClick={this.startTimer}
                disabled={isTimerRunning}
                type="button"
              >
                Start
              </button>
              <button
                className="stop-button"
                onClick={this.stopTimer}
                type="button"
              >
                Stop
              </button>
              <button
                className="reset-button"
                onClick={this.resetTimer}
                type="button"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
