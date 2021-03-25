import React, {useState, useEffect} from "react";
import TweetList from "./components/TweetList"
import CreateTweet from './components/CreateTweet'

function App() {
  //State
  const [textInput, setTextInput] = useState('');
  const [tweets, setTweets] = useState([]);
  const [name, setName] = useState('Tweet');
  const message = 'Hello';

      useEffect(() => {
    }, [textInput])
  return (
    <div>
      <CreateTweet textInput={textInput}
        setTextInput={setTextInput}
        tweets={tweets}
        setTweets={setTweets}
      />
      <TweetList name={name} tweets={tweets} setTweets={setTweets}/>

    </div>
  );
}

export default App;
