import React from 'react';

class App extends React.Component {
    constructor(){
        super();
        this.state = {items: [], filter: ''}
    }

    componentDidMount(){
        fetch( 'https://swapi.co/api/people/?format=json' )
            .then( response => response.json() )
            .then( ({results: items}) => this.setState({items}))
    }

    setNewFilter(e){
        this.setState({filter: e.target.value})
    }

    filterItems() {
        let items = this.state.items;
        if(this.state.filter){
            items = items.filter(item => {
                return item.name.toLowerCase().includes(this.state.filter.toLowerCase())
            })
        }
        return items;
    }

    render(){
        return (
            <div>
                <input
                    type="text"
                    onChange={this.setNewFilter.bind(this)}
                />
                {this.filterItems().map(item =>
                    <Person key={item.name} person={item} />)}
            </div>
        )
    }
}

const Person = (props) => <h4>{props.person.name}</h4>

export default App
