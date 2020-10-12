import React from 'react'

class Timer extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      time: 0
    }
  }

  componentDidMount(){
    if (this.props.start !== undefined){
      this.setState({time: this.props.start})
    }
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      time: this.state.time + 1 
    });
  }


  render(){
    return(
      <div>{this.state.time}</div>
    )
  }
}

export default Timer