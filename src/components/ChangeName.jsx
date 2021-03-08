import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setName } from '../redux/actions';

class ChangeName extends Component {
    constructor(props) {
        super(props);
        this.state = {
            petName: ''
        }
    }

    _handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    _handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleClick(this.state.petName);
        this.setState({
            petName: ''
        })

    }

    render() {
        const { petName } = this.state;
        return (
            <form onSubmit={this._handleSubmit}>
                <label>
                    Change Cat's Name
                    <input type='text' name="petName" value={petName} onChange={this._handleChange} placeholder="Enter a new name"/>
                </label>
                <button type="submit">Change Name</button>
            </form>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleClick: (name) => {
            dispatch(setName(name));
        },
    };
};

export default connect(null, mapDispatchToProps)(ChangeName);