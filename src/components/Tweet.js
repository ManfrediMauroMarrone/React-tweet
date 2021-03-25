import React, { useState } from 'react';
import "../styles/Tweet.scss";

function Tweet({ name, tweet, tweets, setTweets }) {
    const [isActive, setActive] = useState(false);

    const activeHandler = () => {
        setActive(!isActive);
    }
    const deleteTweet = () => {
        setTweets(tweets.filter((t) => t.id !== tweet.id));
    }
    return (
        <div className="tweet">
            <h2>{name}</h2>
            <h3>{tweet.message}</h3>
            <button className="tweetbutton" onClick={deleteTweet}>Delete</button>
            <button onClick={activeHandler} className={isActive? "like" : "tweetbutton"}>Like</button>

        </div>

    )
};

export default Tweet;