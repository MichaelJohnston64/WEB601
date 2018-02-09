//FORMAT TIME SO THAT IT MOVES ONTO NEXT SECTION  OF TIMER
    const formatTime = (time) => {
      if(time < 10) {
        return '0' + time;
      }
      return time;
    };

//DISPLAY THE TIME IN ORDER
function TimeDisplay(props) {
  let centiseconds = formatTime(
    Math.floor(
      props.millisecond % 1000 / 10
    )
  );
  let seconds = formatTime(
    Math.floor(
      props.millisecond % 60000 / 1000
    )
  );
  let minutes = formatTime(
    Math.floor(
      props.millisecond / 60000
    )
  );

//DISPLAY TIMES TIME AND ALSO TIMES UP IF TIME IS UP
  if(props.millisecond === 0) {
    return (
      <div>
        Times up!
      </div>
    );
  } else {
    return (
      <div>
        {minutes}:{seconds}:{centiseconds}
      </div>
    );
  }
}
//COUNTDOWN FUNCTION TO CHANGE TIME TO COUNT DOWN
function countDown(props) {
    Time -= 10;
    
    this.setState({
      currentMilliseconds: Time
    });
};

//CONTAINS TIMER FUNCTIONALITY AND GRABS CURRENT TIME TO PUT INTO THE TIME DISPLAY
class Watch extends React.Component {
  constructor(props) {
    super(props);
      
   this.handleChange = this.handleChange.bind(this);
      
    this.state = {
      currentMilliseconds: props.currentMilliseconds
    };

    this.timer();
  }

     
handleChange(e) {
    this.setState({currentMilliseconds: e.target.value});
}
    
timer() {
    setInterval(
      function() {
          
        let Time =
          this.state.currentMilliseconds;

        Time += 10;
        this.setState({
          currentMilliseconds: Time
        });
      }.bind(this),
      10
    );
};

  render() {
    return (
      <div>
        
        <TimeDisplay
            millisecond={
                this.state.currentMilliseconds
            } />
         <br />
    <label>
        
        <input type="radio" name="radio"
        onClick={countDown.state == false}/>
        
        Up
    </label>
        
    <label>
       
        <input type="radio" name="radio"
        onClick={countDown.state == true}/>
        
        Down
    </label>
    <br />
        Start Time 
        <input type="text"
          onChange={this.handleChange} />
      </div>
    );
  }
}

ReactDOM.render(
    
  <div>
    <Watch currentMilliseconds={5000}/>
    
  </div>,
  document.getElementById('root')
);