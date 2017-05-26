//Before:
import React from 'react';

class App extends React.Component {
    constructor(){
        super();
        this.state = {a: '', b: ''}
    }
    update(event){
        this.setState({
            a: event.target.value,
            b: event.target.value
        });
    }
    render(){
        return (
            <div>
                <input
                    type="text"
                    onChange={this.update.bind(this)}
                    /> {this.state.a}
                <hr />
                <input
                    type="text"
                    onChange={this.update.bind(this)}
                    /> {this.state.b}
            </div>
        )
    }
}

class Input extends React.Component {
    render(){
        return (
            <div>
                <input ref="input" type="text" onChange={this.props.update}/>
            </div>
        );
    }
}

export default App;




//After:
import React from 'react';

class App extends React.Component {
    constructor(){
        super();
        this.state = {a: '', b: ''}
    }
    update(){
        this.setState({
            a: this.refs.a.value,
            b: this.refs.b.value
        });
    }
    render(){
        return (
            <div>
                <input
                    ref="a"
                    type="text"
                    onChange={this.update.bind(this)}
                    /> {this.state.a}
                <hr />
                <input
                    ref="b"
                    type="text"
                    onChange={this.update.bind(this)}
                    /> {this.state.b}
            </div>
        )
    }
}

class Input extends React.Component {
    render(){
        return (
            <div>
                <input ref="input" type="text" onChange={this.props.update}/>
            </div>
        );
    }
}

export default App
