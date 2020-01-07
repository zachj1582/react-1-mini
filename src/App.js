import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(){
    super()
    this.state = {
      friends: [],
      pictures: '',
      name: ''
    }
    this.addFriend = this.addFriend.bind(this)
  }

  updatePicture(val){
    this.setState({picture: val})
  }

  updateName(val){
    this.setState({name: val})
  }

  addFriend(){
    let newFriends = this.state.friends.slice();
    newFriends.push({name: this.state.name, picture: this.state.picture})
    this.setState({friends: newFriends, picture: '', name: ''})
  }

  render(){
    const friends = this.state.friends.map((element, index) => {
      return (
        <div key= {index}>
          <img width='100px' src={element.picture} alt={element.name}/>
          <span>{element.name}</span>
        </div>
      )
    })
    return (
      <div className='App'>
        <span>Picture:</span>
        <input value={this.state.picture} onChange={(e) => this.updatePicture(e.target.value)} />
        <span>Name:</span>
        <input value={this.state.name} onChange={(e) => this.updateName(e.target.value)}/>
        <button onClick= {this.addFriend}>Add Friend</button>
        {friends}
      </div>
    )
  }
}

export default App;
