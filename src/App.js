import { Provider } from 'react-redux';
import { store } from './redux/store';
import Activity from './components/Activity';
import PlayButton from './components/PlayButton';
import NapButton from './components/NapButton';
import EatButton from './components/EatButton';

function App() {
    return (
        <Provider store={store}>
            <div className='App'>
                <h1>Cat Reducer</h1>
                <Activity />
                <PlayButton />
                <NapButton />
                <EatButton />
            </div>
        </Provider>
    );
}

export default App;
