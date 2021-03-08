import { connect } from 'react-redux';

const Activity = (props) => (
    <>
        <p>The cat is {props.activity}</p>
    </>
);

const mapStateToProps = (state) => {
    return {
        activity: state.activity,
    };
};

export default connect(mapStateToProps)(Activity);
