// Lesson 44
// const textAreaStyles = {
//    width: 235,
//    margin: 5
//  };
 
//  class MyToDoList extends React.Component {
//    constructor(props) {
//      super(props);
//      // Change code below this line
//      this.state = {
//        userInput: "",
//        toDoList: [],
//      }
//      // Change code above this line
//      this.handleSubmit = this.handleSubmit.bind(this);
//      this.handleChange = this.handleChange.bind(this);
//    }
//    handleSubmit() {
//      const itemsArray = this.state.userInput.split(',');
//      this.setState({
//        toDoList: itemsArray
//      });
//    }
//    handleChange(e) {
//      this.setState({
//        userInput: e.target.value
//      });
//    }
//    render() {
//      const items = this.state.toDoList.map(e => <li>{e}</li>); // Change this line
//      return (
//        <div>
//          <textarea
//            onChange={this.handleChange}
//            value={this.state.userInput}
//            style={textAreaStyles}
//            placeholder='Separate Items With Commas'
//          />
//          <br />
//          <button onClick={this.handleSubmit}>Create List</button>
//          <h1>My "To Do" List:</h1>
//          <ul>{items}</ul>
//        </div>
//      );
//    }
//  }

// Lesson 43
// class GateKeeper extends React.Component {
//    constructor(props) {
//      super(props);
//      this.state = {
//        input: ''
//      };
//      this.handleChange = this.handleChange.bind(this);
//    }
//    handleChange(event) {
//      this.setState({ input: event.target.value })
//    }
//    render() {
//      let inputStyle = {
//        border: '1px solid black'
//      };
//      // Change code below this line
//      this.state.input.length > 15 ? inputStyle.border =  '3px solid red': inputStyle
//      // Change code above this line
//      return (
//        <div>
//          <h3>Don't Type Too Much:</h3>
//          <input
//            type="text"
//            style={inputStyle}
//            value={this.state.input}
//            onChange={this.handleChange} />
//        </div>
//      );
//    }
//  };



// Lesson 42
// class Results extends React.Component {
//    constructor(props) {
//      super(props);
//    }
//    render() {
//      {/* Change code below this line */}
//      return <h1>{this.props.fiftyFifty}</h1>;
//      {/* Change code above this line */}
//    }
//  }
 
//  class GameOfChance extends React.Component {
//    constructor(props) {
//      super(props);
//      this.state = {
//        counter: 1
//      };
//      this.handleClick = this.handleClick.bind(this);
//    }
//    handleClick() {
//      this.setState({
//        counter: this.state.counter + 1
//      }
//      )
//    }
//    render() {
//      const expression = Math.random(); // Change this line
//      return (
//        <div>
//          <button onClick={this.handleClick}>Play Again</button>
//          {/* Change code below this line */}
//  <Results fiftyFifty={expression >= .5 ? "You Win!" : "You Lose!"}/>
//          {/* Change code above this line */}
//          <p>{'Turn: ' + this.state.counter}</p>
//        </div>
//      );
//    }
//  }

// Lesson 41
// const inputStyle = {
//    width: 235,
//    margin: 5
//  };
 
//  class CheckUserAge extends React.Component {
//    constructor(props) {
//      super(props);
//      // Change code below this line
//      this.state = {
//        input: "",
//        userAge: ""
//      }
//      // Change code above this line
//      this.submit = this.submit.bind(this);
//      this.handleChange = this.handleChange.bind(this);
//    }
//    handleChange(e) {
//      this.setState({
//        input: e.target.value,
//        userAge: ''
//      });
//    }
//    submit() {
//      this.setState(state => ({
//        userAge: state.input
//      }));
//    }
//    render() {
//      const buttonOne = <button onClick={this.submit}>Submit</button>;
//      const buttonTwo = <button>You May Enter</button>;
//      const buttonThree = <button>You Shall Not Pass</button>;
//      return (
//        <div>
//          <h3>Enter Your Age to Continue</h3>
//          <input
//            style={inputStyle}
//            type='number'
//            value={this.state.input}
//            onChange={this.handleChange}
//          />
//          <br />
//          {/* Change code below this line */}
//          {this.state.userAge == 0 ? buttonOne : this.state.userAge < 18 ?  buttonThree : buttonTwo}
//          {/* Change code above this line */}
//        </div>
//      );
//    }
//  }

// Lesson 40
// class MyComponent extends React.Component {
//    constructor(props) {
//      super(props);
//      this.state = {
//        display: true
//      }
//      this.toggleDisplay = this.toggleDisplay.bind(this);
//    }
//    toggleDisplay() {
//      this.setState(state => ({
//        display: !state.display
//      }));
//    }
//    render() {
//      // Change code below this line
//      return (
//         <div>
//           <button onClick={this.toggleDisplay}>Toggle Display</button>
//           {this.state.display && <h1>Displayed!</h1>}
//         </div>
//      );
//    }
//  };

// Lesson 39
// class MyComponent extends React.Component {
//    constructor(props) {
//      super(props);
//      this.state = {
//        display: true
//      }
//      this.toggleDisplay = this.toggleDisplay.bind(this);
//    }
//    toggleDisplay() {s
//      this.setState((state) => ({
//        display: !state.display
//      }));
//    }
//    render() {
//      // Change code below this line
//    if(this.state.display == true) {
//        return (
//         <div>
//           <button onClick={this.toggleDisplay}>Toggle Display</button>
//           <h1>Displayed!</h1>
//         </div>
//      );
//    } else {
//      return (
//         <div>
//           <button onClick={this.toggleDisplay}>Toggle Display</button>
//         </div>
//      );
//    }
     
//    }
//  };

// Lesson 38
// const inputStyle = {
//     width: 235,
//     margin: 5,
// };

// class MagicEightBall extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             userInput: "",
//             randomIndex: "",
//         };
//         this.ask = this.ask.bind(this);
//         this.handleChange = this.handleChange.bind(this);
//     }
//     ask() {
//         if (this.state.userInput) {
//             this.setState({
//                 randomIndex: Math.floor(Math.random() * 20),
//                 userInput: "",
//             });
//         }
//     }
//     handleChange(event) {
//         this.setState({
//             userInput: event.target.value,
//         });
//     }
//     render() {
//         const possibleAnswers = [
//             "It is certain",
//             "It is decidedly so",
//             "Without a doubt",
//             "Yes, definitely",
//             "You may rely on it",
//             "As I see it, yes",
//             "Outlook good",
//             "Yes",
//             "Signs point to yes",
//             "Reply hazy try again",
//             "Ask again later",
//             "Better not tell you now",
//             "Cannot predict now",
//             "Concentrate and ask again",
//             "Don't count on it",
//             "My reply is no",
//             "My sources say no",
//             "Most likely",
//             "Outlook not so good",
//             "Very doubtful",
//         ];
//         const answer = possibleAnswers[this.state.randomIndex]; // Change this line
//         return (
//             <div>
//                 <input
//                     type="text"
//                     value={this.state.userInput}
//                     onChange={this.handleChange}
//                     style={inputStyle}
//                 />
//                 <br />
//                 <button onClick={this.ask}>Ask the Magic Eight Ball!</button>
//                 <br />
//                 <h3>Answer:</h3>
//                 <p>
//                     {/* Change code below this line */}
//                     {answer}
//                     {/* Change code above this line */}
//                 </p>
//             </div>
//         );
//     }
// }

// Lesson 37
// const styles = {color: "purple", fontSize: 40, border: "2px solid purple"}
// class Colorful extends React.Component {
//   render() {
//     // Change code below this line
//     return (
//       <div style={styles}>Style Me!</div>
//     );
//     // Change code above this line
//   }
// };

// Lesson 36
// class Colorful extends React.Component {
//    render() {
//      return (
//        <div style={{color: "red", fontSize: 72}}>Big Red</div>
//      );
//    }
//  };

// Lesson 35
// class OnlyEvens extends React.Component {
//    constructor(props) {
//      super(props);
//    }
//    shouldComponentUpdate(nextProps, nextState) {
//      console.log('Should I update?');
//      // Change code below this line
//      return nextProps.value % 2 === 0;
//      // Change code above this line
//    }
//    componentDidUpdate() {
//      console.log('Component re-rendered.');
//    }
//    render() {
//      return <h1>{this.props.value}</h1>;
//    }
//  }
 
//  class Controller extends React.Component {
//    constructor(props) {
//      super(props);
//      this.state = {
//        value: 0
//      };
//      this.addValue = this.addValue.bind(this);
//    }
//    addValue() {
//      this.setState(state => ({
//        value: state.value + 1
//      }));
//    }
//    render() {
//      return (
//        <div>
//          <button onClick={this.addValue}>Add</button>
//          <OnlyEvens value={this.state.value} />
//        </div>
//      );
//    }
//  }

// Lesson 34
// class MyComponent extends React.Component {
//    constructor(props) {
//      super(props);
//      this.state = {
//        message: ''
//      };
//      this.handleEnter = this.handleEnter.bind(this);
//      this.handleKeyPress = this.handleKeyPress.bind(this);
//    }
//    // Change code below this line
//    componentDidMount() {
//        document.addEventListener("keydown", this.handleKeyPress)
//    }
//    componentWillUnmount() {
//        document.removeEventListener("keydown", this.handleKeyPress)
//    }
//    // Change code above this line
//    handleEnter() {
//      this.setState((state) => ({
//        message: state.message + 'You pressed the enter key! '
//      }));
//    }
//    handleKeyPress(event) {
//      if (event.keyCode === 13) {
//        this.handleEnter();
//      }
//    }
//    render() {
//      return (
//        <div>
//          <h1>{this.state.message}</h1>
//        </div>
//      );
//    }
//  };

// Lesson 33
// class MyComponent extends React.Component {
//    constructor(props) {
//      super(props);
//      this.state = {
//        activeUsers: null
//      };
//    }
//    componentDidMount() {
//      setTimeout(() => {
//        this.setState({
//          activeUsers: 1273
//        });
//      }, 2500);
//    }
//    render() {
//      return (
//        <div>
//          {/* Change code below this line */}
//          <h1>Active Users: {this.state.activeUsers}</h1>
//          {/* Change code above this line */}
//        </div>
//      );
//    }
//  }

// Lesson 32
// class MyComponent extends React.Component {
//    constructor(props) {
//      super(props);
//    }
//    componentWillMount() {
//      // Change code below this line
//      console.log("Start")
//      // Change code above this line
//    }
//    render() {
//      return <div />
//    }
//  };

// Lesson 31
// class MyApp extends React.Component {
//    constructor(props) {
//      super(props);
//      this.state = {
//        inputValue: ''
//      }
//      this.handleChange = this.handleChange.bind(this);
//    }
//    handleChange(event) {
//      this.setState({
//        inputValue: event.target.value
//      });
//    }
//    render() {
//      return (
//         <div>
//          { /* Change code below this line */ }
//          <GetInput input={this.state.inputValue} handleChange={this.handleChange}/>
//          <RenderInput input={this.state.inputValue}/>
//          { /* Change code above this line */ }
//         </div>
//      );
//    }
//  };
 
//  class GetInput extends React.Component {
//    constructor(props) {
//      super(props);
//    }
//    render() {
//      return (
//        <div>
//          <h3>Get Input:</h3>
//          <input
//            value={this.props.input}
//            onChange={this.props.handleChange}/>
//        </div>
//      );
//    }
//  };
 
//  class RenderInput extends React.Component {
//    constructor(props) {
//      super(props);
//    }
//    render() {
//      return (
//        <div>
//          <h3>Input Render:</h3>
//          <p>{this.props.input}</p>
//        </div>
//      );
//    }
//  };

// Lesson 30
// class MyApp extends React.Component {
//    constructor(props) {
//      super(props);
//      this.state = {
//        name: 'CamperBot'
//      }
//    }
//    render() {
//      return (
//         <div>
//           {/* Change code below this line */}
//           <Navbar name={this.state.name}/>
//           {/* Change code above this line */}
//         </div>
//      );
//    }
//  };
 
//  class Navbar extends React.Component {
//    constructor(props) {
//      super(props);
//    }
//    render() {
//      return (
//      <div>
//        {/* Change code below this line */}
//        <h1>Hello, my name is: {this.props.name}</h1>
//        {/* Change code above this line */}
//      </div>
//      );
//    }
//  };

// Lesson 29
// class MyForm extends React.Component {
//    constructor(props) {
//      super(props);
//      this.state = {
//        input: '',
//        submit: ''
//      };
//      this.handleChange = this.handleChange.bind(this);
//      this.handleSubmit = this.handleSubmit.bind(this);
//    }
//    handleChange(event) {
//      this.setState({
//        input: event.target.value
//      });
//    }
//    handleSubmit(event) {
//      // Change code below this line
//      event.preventDefault()
//      this.setState({
//        submit: this.state.input
//      })
//      // Change code above this line
//    }
//    render() {
//      return (
//        <div>
//          <form onSubmit={this.handleSubmit}>
//            {/* Change code below this line */}
//            <input value={this.state.input} onChange={this.handleChange}/>
//            {/* Change code above this line */}
//            <button type='submit'>Submit!</button>
//          </form>
//          {/* Change code below this line */}
//          <h1>{this.state.submit}</h1>
//          {/* Change code above this line */}
//        </div>
//      );
//    }
//  }

// Lesson 28
// class ControlledInput extends React.Component {
//    constructor(props) {
//      super(props);
//      this.state = {
//        input: ''
//      };
//      // Change code below this line
//      this.handleChange = this.handleChange.bind(this)
//      // Change code above this line
//    }
//    // Change code below this line
//    handleChange(event) {
//      this.setState({
//        input: event.target.value
//      });
//  }
//    // Change code above this line
//    render() {
//      return (
//        <div>
//          { /* Change code below this line */}
//          <input type="text" value={this.state.input} onChange = {this.handleChange}/>
//          { /* Change code above this line */}
//          <h4>Controlled Input:</h4>
//          <p>{this.state.input}</p>
//        </div>
//      );
//    }
//  };

// Lesson 27
// class Counter extends React.Component {
//    constructor(props) {
//      super(props);
//      this.state = {
//        count: 0
//      };
//      this.increment = this.increment.bind(this);
//      this.decrement = this.decrement.bind(this);
//      this.reset = this.reset.bind(this);
     
//    }
//    increment(){
//      this.setState((state, props) => ({
//        count: state.count + 1
//      }))
//    }
//    decrement(){
//      this.setState((state, props) => ({
//        count: state.count - 1
//      }))
//    }
//    reset(){
//      this.setState((state, props) => ({
//        count: state.count = 0
//      }))
//    }
//    render() {
//      return (
//        <div>
//          <button className='inc' onClick={this.increment}>Increment!</button>
//          <button className='dec' onClick={this.decrement}>Decrement!</button>
//          <button className='reset' onClick={this.reset}>Reset</button>
//          <h1>Current Count: {this.state.count}</h1>
//        </div>
//      );
//    }
//  };

// Lesson 26
// class MyComponent extends React.Component {
//    constructor(props) {
//      super(props);
//      this.state = {
//        visibility: false
//      };
//      // Change code below this line
//      this.toggleVisibility = this.toggleVisibility.bind(this);
//      // Change code above this line
//    }
//    // Change code below this line
//  toggleVisibility() {
//      this.setState((state, props) => ({
//        visibility: !state.visibility
//      }))
//    }
 
//    // Change code above this line
//    render() {
//      if (this.state.visibility) {
//        return (
//          <div>
//            <button onClick={this.toggleVisibility}>Click Me</button>
//            <h1>Now you see me!</h1>
//          </div>
//        );
//      } else {
//        return (
//          <div>
//            <button onClick={this.toggleVisibility}>Click Me</button>
//          </div>
//        );
//      }
//    }
//  }
 // --------------------------------------------------------
// Lesson 25
// class MyComponent extends React.Component {
//    constructor(props) {
//      super(props);
//      this.state = {
//        text: "Hello"
//      };
//      // Change code below this line
//    this.handleClick = this.handleClick.bind(this)
//      // Change code above this line
//    }
//    handleClick() {
//      this.setState({
//        text: "You clicked!"
//      });
//    }
//    render() {
//      return (
//        <div>
//          { /* Change code below this line */ }
//          <button onClick={this.handleClick}>Click Me</button>
//          { /* Change code above this line */ }
//          <h1>{this.state.text}</h1>
//        </div>
//      );
//    }
//  };
 // --------------------------------------------------------
// Lesson 24
// class MyComponent extends React.Component {
//      constructor(props) {
//        super(props);
//        this.state = {
//          name: 'Initial State'
//        };
//        this.handleClick = this.handleClick.bind(this);
//      }
//      handleClick() {
//        // Change code below this line
//    this.setState({
//      name: "React Rocks!"
//    })
//        // Change code above this line
//      }
//      render() {
//        return (
//          <div>
//            <button onClick={this.handleClick}>Click Me</button>
//            <h1>{this.state.name}</h1>
//          </div>
//        );
//      }
//    };
// --------------------------------------------------------
// Lesson 23
// class MyComponent extends React.Component {
//      constructor(props) {
//        super(props);
//        this.state = {
//          name: 'freeCodeCamp'
//        }
//      }
//      render() {
//        // Change code below this line
//    const name = this.state.name
//        // Change code above this line
//        return (
//          <div>
//            { /* Change code below this line */ }
//    <h1>{name}</h1>
//            { /* Change code above this line */ }
//          </div>
//        );
//      }
//    };
// --------------------------------------------------------
// Lesson 22
// class MyComponent extends React.Component {
//      constructor(props) {
//        super(props);
//        this.state = {
//          name: 'freeCodeCamp'
//        }
//      }
//      render() {
//        return (
//          <div>
//            { /* Change code below this line */ }
//            <h1>{this.state.name}</h1>
//            { /* Change code above this line */ }
//          </div>
//        );
//      }
//    };
// --------------------------------------------------------
// Lesson 21
// class StatefulComponent extends React.Component {
//      constructor(props) {
//        super(props);
//        // Only change code below this line
//        this.state = {
//          firstName: "nfad"
//        }
//        // Only change code above this line
//      }
//      render() {
//        return (
//          <div>
//            <h1>{this.state.firstName}</h1>
//          </div>
//        );
//      }
//    };
   // --------------------------------------------------------
// Lesson 20
// class CampSite extends React.Component {
//      constructor(props) {
//        super(props);
//      }
//      render() {
//        return (
//          <div>
//            <Camper />
//          </div>
//        );
//      }
//    };
//    // Change code below this line
//    class Camper extends React.Component {
//      constructor(props) {
//        super(props);
//      }
//      render() {
//        return (
//          <div>
//            <p>{this.props.name}</p>
//          </div>
//        );
//      }
//    };
   
//    Camper.defaultProps = {
//      name: "CamperBot"
//    };
//    Camper.propTypes = {name: PropTypes.string.isRequired};
// --------------------------------------------------------
// Lesson 19
// class App extends React.Component {
//      constructor(props) {
//        super(props);
   
//      }
//      render() {
//        return (
//            <div>
//                { /* Change code below this line */ }
//                <Welcome name="Sergey"/>
//                { /* Change code above this line */ }
//            </div>
//        );
//      }
//    };
   
//    class Welcome extends React.Component {
//      constructor(props) {
//        super(props);
   
//      }
//      render() {
//        return (
//            <div>
//              { /* Change code below this line */ }
//              <p>Hello, <strong>{this.props.name}</strong>!</p>
//              { /* Change code above this line */ }
//            </div>
//        );
//      }
//    };
// --------------------------------------------------------
// Lesson 18
// const Items = (props) => {
//      return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
//    };
   
//    // Change code below this line
//    Items.propTypes = {quantity: PropTypes.number.isRequired}
//    // Change code above this line
   
//    Items.defaultProps = {
//      quantity: 0
//    };
   
//    class ShoppingCart extends React.Component {
//      constructor(props) {
//        super(props);
//      }
//      render() {
//        return <Items />
//      }
//    };
// --------------------------------------------------------
// Lesson 17
// const Items = (props) => {
//      return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
//    }
   
//    Items.defaultProps = {
//      quantity: 0
//    }
   
//    class ShoppingCart extends React.Component {
//      constructor(props) {
//        super(props);
//      }
//      render() {
//        { /* Change code below this line */ }
//        return <Items quantity={10}/>
//        { /* Change code above this line */ }
//      }
//    };
// --------------------------------------------------------
// Lesson 16
// const ShoppingCart = (props) => {
//      return (
//        <div>
//          <h1>Shopping Cart Component</h1>
//        </div>
//      )
//    };
//    // Change code below this line
   
//    ShoppingCart.defaultProps = {
//      items: 0
//    }
// --------------------------------------------------------
// Lesson 15
// const List = (props) => {
//      { /* Change code below this line */ }
//      return <p>{props.tasks.join(", ")}</p>
//      { /* Change code above this line */ }
//    };
   
//    class ToDo extends React.Component {
//      constructor(props) {
//        super(props);
//      }
//      render() {
//        return (
//          <div>
//            <h1>To Do Lists</h1>
//            <h2>Today</h2>
//            { /* Change code below this line */ }
//            <List tasks={["walk dog", "workout"]}/>
//            <h2>Tomorrow</h2>
//            <List tasks={["walk dog", "workout", "eat"]}/>
//            { /* Change code above this line */ }
//          </div>
//        );
//      }
//    };
// --------------------------------------------------------
// Lesson 14
// const CurrentDate = (props) => {
//      return (
//        <div>
//          { /* Change code below this line */ }
//          <p>The current date is: {props.date}</p>
//          { /* Change code above this line */ }
//        </div>
//      );
//    };
   
//    class Calendar extends React.Component {
//      constructor(props) {
//        super(props);
//      }
//      render() {
//        return (
//          <div>
//            <h3>What date is it?</h3>
//            { /* Change code below this line */ }
//            <CurrentDate date={Date()}/>
//            { /* Change code above this line */ }
//          </div>
//        );
//      }
//    };
// --------------------------------------------------------
// Lesson 13
// Change code below this line
// class MyComponent extends React.Component {
//      constructor(props){
//        super(props)
//      }
//      render() {
//        return (
//          <div id='challenge-node'>
//            <h1>My First React Component!</h1>
//          </div>
//        )
//      }
//    }
   
//    ReactDOM.render(<MyComponent/>, document.getElementById("challenge-node"))
// --------------------------------------------------------
// Lesson 12
// class TypesOfFood extends React.Component {
//      constructor(props) {
//        super(props);
//      }
//      render() {
//        return (
//          <div id="challenge-node">
//            <h1>Types of Food:</h1>
//            {/* Change code below this line */}
//    <Fruits/>
//    <Vegetables/>
//            {/* Change code above this line */}
//          </div>
//        );
//      }
//    };
   
//    // Change code below this line
//    ReactDOM.render(<TypesOfFood />, document.getElementById("challenge-node"))
// --------------------------------------------------------
// Lesson 11
// class Fruits extends React.Component {
//      constructor(props) {
//        super(props);
//      }
//      render() {
//        return (
//          <div>
//            <h2>Fruits:</h2>
//            { /* Change code below this line */ }
//              <NonCitrus />
//              <Citrus />
//            { /* Change code above this line */ }
//          </div>
//        );
//      }
//    };
   
//    class TypesOfFood extends React.Component {
//      constructor(props) {
//         super(props);
//      }
//      render() {
//        return (
//          <div>
//            <h1>Types of Food:</h1>
//            { /* Change code below this line */ }
//    <Fruits/>
//            { /* Change code above this line */ }
//            <Vegetables />
//          </div>
//        );
//      }
//    };
// --------------------------------------------------------
// Lesson 10
// const TypesOfFruit = () => {
//      return (
//        <div>
//          <h2>Fruits:</h2>
//          <ul>
//            <li>Apples</li>
//            <li>Blueberries</li>
//            <li>Strawberries</li>
//            <li>Bananas</li>
//          </ul>
//        </div>
//      );
//    };
   
//    const Fruits = () => {
//      return (
//        <div>
//          { /* Change code below this line */ }
//            <TypesOfFruit />
//          { /* Change code above this line */ }
//        </div>
//      );
//    };
   
//    class TypesOfFood extends React.Component {
//      constructor(props) {
//        super(props);
//      }
   
//      render() {
//        return (
//          <div>
//            <h1>Types of Food:</h1>
//            { /* Change code below this line */ }
//            <Fruits />
//            { /* Change code above this line */ }
//          </div>
//        );
//      }
//    };
// --------------------------------------------------------
// Lesson 9
// const ChildComponent = () => {
//      return (
//        <div>
//          <p>I am the child</p>
//        </div>
//      );
//    };
   
//    class ParentComponent extends React.Component {
//      constructor(props) {
//        super(props);
//      }
//      render() {
//        return (
//          <div>
//            <h1>I am the parent</h1>
//            { /* Change code below this line */ }
   
//    <ChildComponent/>
//            { /* Change code above this line */ }
//          </div>
//        );
//      }
//    };
// --------------------------------------------------------
// Lesson 8
// class MyComponent extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         // Change code below this line
//         return (
//             <div>
//                 <h1>Hello React!</h1>
//             </div>
//         );

//         // Change code above this line
//     }
// }
// --------------------------------------------------------
// Lesson 7
// const MyComponent = function() {
//    return (
//      <div>авыавы</div>
//    )
//    }
// --------------------------------------------------------
// Lesson 6
// const JSX = (
//      <div>
//        <h2>Welcome to React!</h2> <br />
//        <p>Be sure to close all tags!</p>
//        <hr />
//      </div>
//    );
// --------------------------------------------------------
// Lesson 5
// const JSX = (
//      <div className="myDiv">
//        <h1>Add a class to this div</h1>
//      </div>
//    );
// --------------------------------------------------------
// Lesson 4
// const JSX = (
//      <div >
//        <h1>Hello World</h1>
//        <p>Lets render this to the DOM</p>
//      </div>
//    );
//    // Change code below this line

//    ReactDOM.render(JSX, document.getElementById("challenge-node"))
// --------------------------------------------------------
// Lesson 3
// const JSX = (
//      <div>
//        <h1>This is a block of JSX</h1>
//        <p>Here's a subtitle</p>
//        {/* Комментарий */}
//      </div>
//    );
// --------------------------------------------------------
// Lesson 2
// const JSX = (
//     <div>
//         <h1></h1>
//         <p></p>
//         <ul>
//             <li></li>
//             <li></li>
//             <li></li>
//         </ul>
//     </div>
// );
// --------------------------------------------------------
// Lesson 1
// const JSX = <h1>Hello JSX!</h1>;
// --------------------------------------------------------
