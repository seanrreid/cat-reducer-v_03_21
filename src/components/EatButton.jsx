import { connect } from 'react-redux';
import { actionEat } from '../redux/actions';

const EatButton = (props) => (
    <>
        <button onClick={props.handleClick}>Eating</button>
    </>
);

const mapDispatchToProps = (dispatch) => {
    return {
        handleClick: () => {
            dispatch(actionEat());
        },
    };
};

export default connect(null, mapDispatchToProps)(EatButton);
