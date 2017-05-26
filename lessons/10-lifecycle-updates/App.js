import React from 'react';

class App extends React.Component {
    constructor(){
        super();
        this.state = {increasing: false}
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     return nextProps.value % 5 === 0;
    // }

    componentWillReceiveProps(nextProps){
        console.log('componentWillReceiveProps');
        this.setState({increasing: nextProps.value > this.props.value});
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate');
        console.log('prevProps.value: ', prevProps.value);
        console.log('this.props.value: ', this.props.value);
    }

    render(){
        console.log('is increasing: ', this.state.increasing)
        return (
            <button onClick={this.props.update}>
                {this.props.value}
            </button>
        )
    }

}
App.defaultProps = {value: 0}


class Wrapper extends React.Component {
    constructor() {
        super();
        this.state = {value: 0}
    }

    update() {
        this.setState({
            value: this.state.value + 1
        });
    }

    render() {
        return (
            <App
                value={this.state.value}
                update={this.update.bind(this)}
            />
        );
    }
}

export default Wrapper;
