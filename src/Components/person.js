import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { Component } from 'react'
export default class person extends Component {
constructor(props) {
    super(props);
    this.state = {
      person:{
        name:"walid",
        country:"Tunisia",
        profession : "Sales And IT Business Manager",
        biographie : " More than 20 years expeience in Travel distribution systems"
      },
      show:false,
      timer:0,
      interval:null,

    };
}

// component used to show timer's state 
componentDidMount(){
    this.setState({
      interval : setInterval (
        () => this.setState ({timer : this.state.timer + 1}),1000
      )
    })  
    console.log("componentDidMount") }

   // component used to show  counter update  
  componentDidUpdate(){console.log("componentDidUpdate")
                        console.log(this.state.bio)}
  
  // component used to show when component has been unmount                      
  componentWillUnmount(){console.log("You killed me !")
                          clearInterval(this.state.interval)}

// this section cover the butttons  timer and counter creation
render() {
return (

<>
<Card style={{ width: '18rem' }}>
   <Card.Img variant="top" src="./images/espace.jpg" />
    <Card.Body>
        <Card.Title>Personal Biography</Card.Title>
        <Card.Text>Name : {this.state.person.name}</Card.Text>
        <Card.Text>Profession : {this.state.person.profession}</Card.Text>
        <Card.Text>Biography : {this.state.person.biographie}</Card.Text>
        <Card.Text>Timer : {this.state.timer}</Card.Text>
   </Card.Body>
    </Card>

</>
    )    
}
}