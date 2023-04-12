/**
 * Part 2
 *  Define a Tweet component which takes as props the username of the user who wrote the tweet, the name of the user who wrote the tweet, the date of the tweet, and the message being tweeted.

    Create an App component that renders at least three tweets.
 */


    const TweetComponent = (props) => {
        console.log('tweetcomponent')
        return (
            <ui>
                <li>Username: {props.username}</li>
                <li>Name: {props.name}</li>
                <li>Date: {props.date}</li>
                <li>Message: {props.message}</li>
                <br></br>
            </ui>
        )
    }