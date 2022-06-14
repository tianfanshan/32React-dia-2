import React, { Component } from 'react'

export class TypeClass extends Component {
    constructor(props){
        super(props);
        this.state={
            contador:this.props.initialValue,
            salto:2,
            // text:'Mi contador'
        }
    }
    increment = () => {
        this.setState({contador:this.state.contador+this.state.salto});
    }
    disminuye = () => {
        this.setState({contador:this.state.contador-this.state.salto});
    }
    // setTimeout(() => {
    //   this.setState({text:this.state.text:'Nuestro contador'})
    // }, 3000);
  render() {
    return (
      <div>
        {/* <h1>{this.state.text}</h1> */}
        <h2>{this.state.contador}</h2>
        <button onClick={this.increment}>inclementa</button>
        <button onClick={this.disminuye}>disminuye</button>
      </div>
    )
  }
}

export default TypeClass