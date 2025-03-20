// Import the Datura library
import Datura from "datura-js";

// Initialize the Datura client with your API key
// Replace 'your-api-key' with your actual API key
const datura = new Datura('your-api-key');

/**
 * Perform a Twitter post search using the Datura client.
 *
 * This function searches for tweets by their ID.
 *
 * Input:
 *   - id (string): The ID of the tweet to search.
 *
 * Output:
 *   - user (object): Contains information about the user who posted the tweet.
*    - id (string): The unique identifier for the user.
*    - url (string): The URL to the user's Twitter profile.
*    - name (string): The name of the user.
*    - username (string): The username of the user.
*    - created_at (string): The date and time when the user account was created.
*    - description (string): The description of the user.
*    - favourites_count (number): The number of tweets the user has liked.
*    - followers_count (number): The number of followers the user has.
*    - listed_count (number): The number of public lists the user is a member of.
*    - media_count (number): The number of media items the user has uploaded.
*    - profile_image_url (string): The URL to the user's profile image.
*    - statuses_count (number): The number of tweets (including retweets) posted by the user.
*    - verified (boolean): Indicates if the user is verified.
*      - id (string): The unique identifier for the tweet.
*      - text (string): The text content of the tweet.
*      - reply_count (number): The number of replies to the tweet.
*      - retweet_count (number): The number of times the tweet has been retweeted.
*      - like_count (number): The number of likes the tweet has received.
*      - view_count (number): The number of views the tweet has received.
*      - quote_count (number): The number of times the tweet has been quoted.
*      - impression_count (number): The number of times the tweet has been seen.
*      - bookmark_count (number): The number of times the tweet has been bookmarked.
*      - url (string): The URL to the tweet.
*      - created_at (string): The date and time when the tweet was created.
*      - media (array): A list of media items associated with the tweet.
*      - is_quote_tweet (boolean): Indicates if the tweet is a quote tweet.
*      - is_retweet (boolean): Indicates if the tweet is a retweet.
*      - entities (object): Contains metadata and entities associated with the tweet.
*      - summary_description (string): A summary description of the tweet.
 *         
 */
async function twitterById() {
    try {
        // Twitter post search
        const twitterByIdResult = await datura.twitterById('your-tweet-id');

        // Print the search results
        console.log(twitterByIdResult);
    } catch (error) {
        console.error('Error performing Twitter post search:', error);
    }
}

// Call the function to perform the Twitter post search
twitterById();