/**
 * Part 2
 *  Define a Tweet component which takes as props the username of the user who wrote the tweet, the name of the user who wrote the tweet, the date of the tweet, and the message being tweeted.

    Create an App component that renders at least three tweets.
 */


const App = () => (
   <div>
      <TweetComponent username="B Real" name="Brent" date= "April 11, 2023" message= "Can't make sense of it"/>
      <TweetComponent username="B Real" name="Brent" date= "April 11, 2023" message= "another tweet"/>
      <TweetComponent username="B Real" name="Brent" date= "April 11, 2023" message= "a third tweet"/>
   </div>
)

ReactDOM.render(<App/>, document.getElementById("root"))