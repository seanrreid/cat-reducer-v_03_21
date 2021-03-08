import { connect } from 'react-redux';
import { actionNap } from '../redux/actions';

const NapButton = (props) => (
    <>
        <button onClick={props.handleClick}>Napping</button>
    </>
);

const mapDispatchToProps = (dispatch) => {
    return {
        handleClick: () => {
            dispatch(actionNap());
        },
    };
};

export default connect(null, mapDispatchToProps)(NapButton);
