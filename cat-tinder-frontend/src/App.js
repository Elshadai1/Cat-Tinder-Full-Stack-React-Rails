import React, { Component } from 'react';
import Cats from './components/Cats'
import NewCat from './components/NewCat'
import Header from './components/Header'
import { getCats, createCat, deleteCat, updateCat } from './api'

import './App.css';

class App extends Component {
    constructor(props){
    super(props)
    this.state = {
      cats: []
    }
}

  componentWillMount() {
		getCats()
		.then(APIcats => {
			this.setState({
				cats: APIcats

			})

        })

}

handleNewCat = (newCatInfo) => {
	createCat(newCatInfo)
    .then(successCat => {
        this.setState({
            cats: successCat
        })

    })
    .catch(error => {
      alert(error)
    })
}

handleDeleteCat = (cat) => {
    deleteCat(cat)
    .then(destoryCat => {
        this.setState({
            cats: destoryCat
        })
    })
}

handleUpdateCat = (cat) => {
    updateCat(cat)
    .then(updateCat => {
        this.setState({
            cats:updateCat
        })
    })
}

  render() {
    return (
      <div className="App">
        <Header />

        <Cats
        cats={this.state.cats}
        handleDeleteCat={this.handleDeleteCat} />

        <NewCat handleCreateCat={this.handleNewCat}/>
      </div>
    );
  }
}

export default App;
