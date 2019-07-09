import React, { Component } from 'react'
import NameData from './components/NameData';
import AddItem from './components/AddItem';

class App extends Component {

  state = {
    nameData: [
      {
        id: 1,
        fname: 'juned',
        lname: 'khatri'
      },
      {
        id: 2,
        fname: 'rahil',
        lname: 'bhanushali'
      },
      {
        id: 3,
        fname: 'kanishka',
        lname: 'khemani'
      },
    ],
    error: false
  }

  delElement = (id) => {
    this.setState({ nameData: [...this.state.nameData.filter(data => data.id !== id)] });
  }

  submitHandler = (e, state, ctx) => {
    e.preventDefault()
    console.log("ctx", ctx);
    console.log("clicked submit this.state", state)

    if ((e.target.elements.fname.value === "") || (e.target.elements.lname.value === "")) {
      alert("all fields are compulsory");
    }
    else {
      let validation = this.state.nameData.every((element) => {

        if ((element.fname === state.fname.toLowerCase()) && (element.lname === state.lname.toLowerCase())) {
          return false
        }
        else {
          return true
        }
      });

      if (validation) {
        this.setState({
          nameData: [...this.state.nameData, { id: this.state.nameData.length + 1, fname: state.fname, lname: state.lname }],
          error: false
        });
        ctx.setState({
          fname: "",
          lname: ""
        })
      }
      else {
        this.setState({ error: true })
        ctx.setState({
          fname: "",
          lname: ""
        })
      }

    }


  };



  render() {
    return (
      <div>
        <AddItem
          nameData={this.state.nameData}
          submitItem={this.submitHandler}
        />
        {
          this.state.error ?
            <p style={{ color: 'red' }}>First and Last Name is already present</p> : null
        }
        <NameData
          nameData={this.state.nameData}
          delElement={this.delElement}
        />
      </div>
    )
  }
}

export default App
