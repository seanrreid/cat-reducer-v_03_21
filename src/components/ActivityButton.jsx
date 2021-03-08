import { connect } from 'react-redux';
import { setActivity } from '../redux/actions';

const ActivityButton = (props) => (
    <>
        <button onClick={() => props.handleClick('eating')}>Eating</button>
        <button onClick={() => props.handleClick('napping')}>Napping</button>
        <button onClick={() => props.handleClick('playing')}>Playing</button>
    </>
);

const mapDispatchToProps = (dispatch) => {
    return {
        handleClick: (activity) => {
            dispatch(setActivity(activity));
        },
    };
};

export default connect(null, mapDispatchToProps)(ActivityButton);
