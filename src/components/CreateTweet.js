import React, { useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import "../styles/CreateTweet.scss";

function CreateTweet({tweets, setTweets, textInput, setTextInput}) {
    //function
    const userInputHandler = (e) => {
        setTextInput(e.target.value);
    };

    const submitTweetHandler = (e) => {
        e.preventDefault();
        setTweets([...tweets, { message: textInput, id: uuidv4() }]);
        setTextInput('');
    }
    return (
        <div className="createTweet">
            <form>
                <textarea value={textInput} onChange={userInputHandler} cols="50" rows="5"></textarea>
            </form>
            <button className="button" onClick={submitTweetHandler}>Submit</button>
        </div>

    )
}

export default CreateTweet;