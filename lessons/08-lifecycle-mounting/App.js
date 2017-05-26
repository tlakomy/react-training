import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(){
        super();
        this.state = { val: 0 };
        this.update = this.update.bind(this);
    }

    componentDidMount(){
        console.log('componentDidMount');
    }

    componentWillMount(){
        console.log('componentWillMount');
    }

    componentWillUnmount(){
        console.log('componentWillUnmount');
    }

    update(){
        this.setState({val: this.state.val + 1 });
    }

    render(){
        console.log('render')
        return <button onClick={this.update}>{this.state.val}</button>
    }
}









class Wrapper extends React.Component {
    constructor(){
        super();
    }
    mount(){
        ReactDOM.render(<App />, document.getElementById('a'));
    }
    unmount(){
        ReactDOM.unmountComponentAtNode(document.getElementById('a'));
    }
    render(){
        return (
                <div>
                    <button onClick={this.mount.bind(this)}>Mount</button>
                    <button onClick={this.unmount.bind(this)}>Unmount</button>
                    <div id="a"></div>
                </div>
        )
    }
}


export default Wrapper
