import logo from './logo.svg';
import './App.css';
import {Header} from './component/common';
import Main from './pages/Main';
import Favourites from './pages/Favourites';

import {Route, Routes} from 'react-router-dom';

function App() {

    return (
        <div className="App">
            <Header/>
            <div>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="favourites" element={<Favourites/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
