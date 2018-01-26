/* Basic example demonstrating input - using stateful components */
const ListItem = (props) => (
    <li>{props.value}</li>
  );


class BasicInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.addItems = this.addItems.bind(this);
    this.state = {
      userInput: '',
      list: []
    };
  }
    
  handleChange(e) {
    this.setState({userInput: e.target.value});
  }

  addItems(props){
      let myList = this.state.list;
      let myInput = this.state.userInput;
      myList.push(myInput);
      this.setState({
          list: myList
      });
  }

  render() {
     
       const renderedItems = this.state.list.map(x => (
            <ListItem key={x.toString()} value={x}/>
       ));
       
    return (
      <div>
          <p>
            Please enter some input
          </p>
          <input onChange={this.handleChange}/>
        
          <button onClick={this.addItems}>Add</button>
        
          <p>
            You entered: {this.state.userInput}
          </p>
          <p>
            List:
                 <ul>{renderedItems}</ul>
          </p>
      </div>
    ); 
  }
}



const renderBasicInput = () => {
  ReactDOM.render(
    <div>
      This is a simple example to demonstrate a reactive update.
      <BasicInput/>
    </div>,
    document.getElementById('root')
  );
};
