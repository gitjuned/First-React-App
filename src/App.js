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

  submitHandler = (e) => {
    e.preventDefault()
    console.log("clicked submit")

    if ((e.target.elements.fname.value === "") || (e.target.elements.lname.value === "")) {
      alert("all fields are compulsory");
      e.target.elements.fname.value = "";
      e.target.elements.lname.value = "";
    }
    else {

      const firstName = e.target.elements.fname.value.toLowerCase();
      const lastName = e.target.elements.lname.value.toLowerCase();

      let validation = this.state.nameData.every((element) => {

        if ((element.fname === firstName) && (element.lname === lastName)) {
          return false
        }
        else {
          return true
        }
      });

      if (validation) {
        this.setState({
          nameData: [...this.state.nameData, { id: this.state.nameData.length + 1, fname: firstName, lname: lastName }],
          error: false
        });
      }
      else {
        this.setState({ error: true })
      }
      e.target.elements.fname.value = "";
      e.target.elements.lname.value = "";
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
