import {useState, useEffect} from 'react';
import Article from './components/Article';
import Header from './components/Header';

import './App.css';

function App() {

    const [articles, setArticles] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchArticles = async (subreddit) => {
        fetch(`https://www.reddit.com/r/${subreddit}/.json`).then((res) => {

            if(res.status !== 200) {
                console.log("ERROR: could not fetch data");
                return;
            }

            res.json().then(data => {
                if(data != null) {
                    setArticles(data.data.children);
                }
            });
        })
    };

    useEffect( () => {
        searchArticles('webdev');
    }, []);

    return (
        <div className="app">
            <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} searchArticles={searchArticles}/>

            <div className="articles">
                {articles != null ? articles.map((article, index) => (
                    <Article key={index} article={article.data}/>
                )) : "no articles found"}
            </div>
        </div>
    );
}

export default App;
