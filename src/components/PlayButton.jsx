import { connect } from 'react-redux';
import { actionPlay } from '../redux/actions';

const PlayButton = (props) => (
    <>
        <button onClick={props.handleClick}>Playing</button>
    </>
);

const mapDispatchToProps = (dispatch) => {
    return {
        handleClick: () => {
            dispatch(actionPlay());
        },
    };
};

export default connect(null, mapDispatchToProps)(PlayButton);
