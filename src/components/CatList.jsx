import { connect } from 'react-redux';

const CatList = (props) => {
    const { cats } = props;
    const catsArray = [];

    for (const cat in cats) {
        catsArray.push(cat);
    }

    return (
        <ul>
            {catsArray.map((catId) => (
                <li key={catId}>{cats[catId].name} is {cats[catId].activity}</li>
            ))}
        </ul>
    );
};

const mapStateToProps = (state) => {
    const { cats } = state;
    return {
        cats,
    };
};

export default connect(mapStateToProps)(CatList);
