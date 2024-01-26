import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react'
import Person from './Components/person';
import { Button } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';
export default class App extends Person {
  constructor(props) {
    super(props);
    this.state = {show:false};
  }

 toggle=()=>{
  this.setState({show: !this.state.show})
 }
  render() {
    return (
      <div>
      <h2><Badge bg="secondary">Workshop React State</Badge></h2>
        {/* <Button variant="primary">Go somewhere</Button> */}
        <Button onClick={()=>this.toggle()} variant="primary" size="lg">Show / Hide</Button>{' '}
        {/* <Button onClick={()=>this.toggle()}>Show/Hide</Button> */}
        {this.state.show ?<Person/> : null}
                
      </div>
    )
  }
}
