import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCat } from '../redux/actions';

class AddCat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            petName: '',
            petActivity: ''
        };
    }

    _handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    _handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleClick(this.state.petName, this.state.petActivity);
        this.setState({
            petName: '',
            petActivity: '',
        });
    };

    render() {
        const { petName, petActivity } = this.state;
        return (
            <form onSubmit={this._handleSubmit}>
                <label>
                    Cat's Name
                    <input
                        type='text'
                        name='petName'
                        value={petName}
                        onChange={this._handleChange}
                        placeholder='What is their name?'
                    />
                </label>
                <br/>
                <label>
                    Cat's Activity
                    <input
                        type='text'
                        name='petActivity'
                        value={petActivity}
                        onChange={this._handleChange}
                        placeholder='What are they doing?'
                    />
                </label>
                <button type='submit'>Add Cat</button>
            </form>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleClick: (name, activity) => {
            dispatch(addCat(name, activity));
        },
    };
};

export default connect(null, mapDispatchToProps)(AddCat);
