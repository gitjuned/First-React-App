import React, { Component } from 'react'
import '../style.css'

class NameData extends Component {
    render() {

        return this.props.nameData.map((data) => (
            <div key={data.id}>
                <h4 >{data.fname} {data.lname} Added Successfully
                    <span>
                        <button
                            onClick={this.props.delElement.bind(this, data.id)}>X
                        </button>
                    </span>
                </h4>
            </div>

        ));
    }
}

export default NameData;
