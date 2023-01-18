import React from 'react'
import Icon from '../icon.svg';

function Header({searchTerm, setSearchTerm, searchArticles}) {

    const onSubmit = (e) => {
        e.preventDefault();
        searchArticles(searchTerm);
    };

    return (
        <header className="app-header">
            <div className="logo">
                <img src={Icon} alt="" />
                <h1>Reddit Feeds App</h1>
            </div>
            <form onSubmit={onSubmit}>
                <input placeholder="search for a community" type="text" className="input" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} autoCorrect='none'/>
            </form>
        </header>
    )
}

export default Header