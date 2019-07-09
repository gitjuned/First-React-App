import React, { Component } from 'react'

class AddItem extends Component {

    state = {
        fname: "",
        lname: ""
    }

    handleFname = (e) => {
        this.setState({
            fname: e.target.value
        })
    }

    handleLname = (e) => {
        this.setState({
            lname: e.target.value
        })
    }

    render() {
        return (

            <form onSubmit={(e) => this.props.submitItem(e, this.state, this)}>
                <input
                    type="text"
                    name="fname"
                    placeholder="First Name"
                    value={this.state.fname}
                    onChange={this.handleFname}
                />

                <input
                    type="text"
                    name="lname"
                    placeholder="Last Name"
                    value={this.state.lname}
                    onChange={this.handleLname}
                />
                <input
                    type="submit"
                    value="Submit"
                    className="submitBtn"
                />
            </form>
        )
    }
}

export default AddItem
