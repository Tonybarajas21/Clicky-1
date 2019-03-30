import React from "react";
import Characters from "./components/Characters/";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";

import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)
 
    this.state ={
      friends: friends
    }
 
  }
 
  removeCard = (id) => {
    console.log(id)
 
    let newFriends = this.state.friends.filter(item=> {
      if(item.id !== id) {
        return true;
      }
    })
    this.setState({friends: newFriends})
 
  }
 
   render(){
   return (
     <Wrapper>
       <h1 className="title">Friends List</h1>
     {
       this.state.friends.map(friend => {
           return <Characters
                     removeCard={this.removeCard}
                     name={friend.name}
                     image={friend.image}
                     occupation={friend.occupation}
                     location={friend.location}
                     id={friend.id}
                     />
     })
     }
       
     
     </Wrapper>
   );
 }
 }
 
 export default App;