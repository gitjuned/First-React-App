import React, { Component } from 'react'

class AddItem extends Component {


    onLnameChange = (e) => {
    }

    render() {
        return (

            <form onSubmit={this.props.submitItem}>
                <input
                    type="text"
                    name="fname"
                    placeholder="First Name"
                />

                <input
                    type="text"
                    name="lname"
                    placeholder="Last Name"
                    onChange={this.onLnameChange}
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
