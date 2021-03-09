import { Provider } from 'react-redux';
import { store } from './redux/store';

import AddCat from './components/AddCat';
import CatList from './components/CatList';

function App() {
    return (
        <Provider store={store}>
            <div className='App'>
                <h1>Cat Reducer</h1>
                <AddCat />
                <hr />
                <CatList />
            </div>
        </Provider>
    );
}

export default App;
