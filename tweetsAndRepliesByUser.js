// Import the Desearch library
import Desearch from "desearch-js";

// Initialize the Desearch client with your API key
// Replace 'your-api-key' with your actual API key
const desearch = new Desearch('your-api-key');

/**
 * Perform a Tweets and replies by user search using the Desearch client.
 *
 * This function performs a Twitter search with the specified parameters and logs the results.
 *
 * Input:
 *   - query (string): The search query to be used in the Twitter search.
 *   - sort (string): The sorting order of the search results. Options might include "Top", "Latest", etc.
 *   - user (string): The Twitter username to filter the search results by.
 *   - start_date (string): The start date for the search results in the format "YYYY-MM-DD".
 *   - end_date (string): The end date for the search results in the format "YYYY-MM-DD".
 *   - lang (string): The language code to filter the search results by.
 *   - verified (boolean): A flag indicating whether to filter for verified users.
 *   - blue_verified (boolean): A flag indicating whether to filter for users with a blue verification badge.
 *   - is_quote (boolean): A flag indicating whether to include quoted tweets in the search results.
 *   - is_video (boolean): A flag indicating whether to include tweets with videos in the search results.
 *   - is_image (boolean): A flag indicating whether to include tweets with images in the search results.
 *   - min_retweets (number): The minimum number of retweets a tweet must have to be included in the search results.
 *   - min_replies (number): The minimum number of replies a tweet must have to be included in the search results.
 *   - min_likes (number): The minimum number of likes a tweet must have to be included in the search results.
 *   - count (number): The number of search results to return.
 *
 * Output:
 *   - Logs the search results to the console. The results are structured as follows:
 *     - Each result is an object representing a tweet with the following attributes:
 *         - user (object): Contains information about the user who posted the tweet.
 *             - id (string): The unique identifier for the user.
 *             - url (string): The URL to the user's Twitter profile.
 *             - name (string): The name of the user.
 *             - username (string): The username of the user.
 *             - created_at (string): The date and time when the user account was created.
 *             - description (string): The description of the user.
 *             - favourites_count (number): The number of tweets the user has liked.
 *             - followers_count (number): The number of followers the user has.
 *             - listed_count (number): The number of public lists the user is a member of.
 *             - media_count (number): The number of media items the user has uploaded.
 *             - profile_image_url (string): The URL to the user's profile image.
 *             - statuses_count (number): The number of tweets (including retweets) posted by the user.
 *             - verified (boolean): Indicates if the user is verified.
 *         - id (string): The unique identifier for the tweet.
 *         - text (string): The text content of the tweet.
 *         - reply_count (number): The number of replies to the tweet.
 *         - retweet_count (number): The number of times the tweet has been retweeted.
 *         - like_count (number): The number of likes the tweet has received.
 *         - view_count (number): The number of views the tweet has received.
 *         - quote_count (number): The number of times the tweet has been quoted.
 *         - impression_count (number): The number of times the tweet has been seen.
 *         - bookmark_count (number): The number of times the tweet has been bookmarked.
 *         - url (string): The URL to the tweet.
 *         - created_at (string): The date and time when the tweet was created.
 *         - media (array): A list of media items associated with the tweet.
 *         - is_quote_tweet (boolean): Indicates if the tweet is a quote tweet.
 *         - is_retweet (boolean): Indicates if the tweet is a retweet.
 */
async function performTweetsAndRepliesByUserSearch() {
    try {
        // Perform a Tweets and replies by user search
        const twitterByUserResult = await desearch.tweetsAndRepliesByUser({
            user: "elonmusk",
            query: "Bittensor",
            count: 10
        });

        // Print the search results
        console.log(twitterByUserResult);
    } catch (error) {
        console.error('Error performing Tweets and replies by user search:', error);
    }
}

// Call the function to perform the Tweets and replies by user search
performTweetsAndRepliesByUserSearch();