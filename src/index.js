import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCqMOiqcsoA-TFKSWwEWbxBQnTaGt2-m73';

// function-based component (no states)
const App = () => {
    return (
        <div>
            <SearchBar/>
        </div>
    )
};

ReactDOM.render(<App />, document.querySelector('.container'));