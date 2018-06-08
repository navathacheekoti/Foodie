import React,{ Component} from 'react';

class Timer extends Component {
    state={
        clock:0
    }
componentDidMount(){
    setInterval(()=>(this.setState({clock: new Date()-this.props.start})),1000)
}


  render(){
    return(
      <div>
          <div>
          <br/>
        <span>{Math.round(this.state.clock/1000)}</span>
        <p>seconds</p>
        </div>
      </div>
    );
  }
}
export default Timer;
