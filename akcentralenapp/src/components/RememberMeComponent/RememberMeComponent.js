import React, { Component } from 'react';
import Checkbox from 'react-bootstrap/lib/Checkbox';

var checkboxActive = false;
class App extends Component {

    constructor(props)
    {
        super(props);
        this.RememberMe = this.rememberMeFunction.bind(this);
    }

    rememberMeFunction(event)
    {       
        if (checkboxActive === false)
        {
            console.log("on");
            checkboxActive = true;
        }
        else if (checkboxActive === true)
        {
            console.log("off");
            checkboxActive = false;
        }
    }

    render() {
        return (
        <div>
            <Checkbox onClick={this.rememberMeFunction}>Kom ihåg mig</Checkbox>
        </div>
    );
  }
}

export default App;
