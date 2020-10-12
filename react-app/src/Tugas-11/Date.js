import React from 'react'
import Timer from './Timer'

class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
  
    componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
      }
    componentWillUnmount() {
        clearInterval(this.timerID);
      }

      tick() {
        this.setState({
          date: new Date()
        });
      }
  
    render() {
      return (
        <div style={{textAlign: 'center', width: "50%", margin: "100px auto" }}>
          <h2 style={{float: "left"}}>Sekarang jam {this.state.date.toLocaleTimeString()}</h2>
          <h2 style={{float: "right"}}>
              <Timer></Timer>
          </h2>
        </div>
      );
    }
  }
  
  export default Clock



