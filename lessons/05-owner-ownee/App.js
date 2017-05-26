import React from 'react';

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            text: 'current state text'
        }
    }

    update(e){
        this.setState({text: e.target.value})
    }

    render(){
        return (
            <div>
                <h1>{this.state.text}</h1>
                <Widget update={this.update.bind(this)} />
                <Widget update={this.update.bind(this)} />
                <Widget update={this.update.bind(this)} />
            </div>
        )
    }
}


class Widget extends React.Component {
    render() {
        return (
            <input type="text" onChange={this.props.update}/>
        );
    }
}

export default App;
