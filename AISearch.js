// Import the Desearch library
import Desearch from "desearch-js"

// Initialize the Desearch client with your API key
// Replace 'your-api-key' with your actual API key
const desearch = new Desearch('your-api-key');

/**
 * Perform an AI search using the Desearch client.
 *
 * This function performs an AI search with the specified parameters and logs the results.
 *
 * Input:
 *   - prompt (string): The search query to be used in the AI search.
 *   - tools (array of strings): A list of tools available for conducting the search. These include:
 *       - "web"
 *       - "hackernews"
 *       - "reddit"
 *       - "wikipedia"
 *       - "youtube"
 *       - "twitter"
 *       - "arxiv"
 *   - model (string): The model to use for the search. Options include:
 *       - "NOVA"
 *       - "ORBIT"
 *       - "HORIZON"
 *   - date_filter (string): The time range for filtering search results. Options include:
 *       - "PAST_24_HOURS"
 *       - "PAST_2_DAYS"
 *       - "PAST_WEEK"
 *       - "PAST_2_WEEKS"
 *       - "PAST_MONTH"
 *       - "PAST_2_MONTHS"
 *       - "PAST_YEAR"
 *       - "PAST_2_YEARS"
 *   - streaming (boolean): A flag indicating whether to stream the search results.
 *
 * Output:
 *   - Logs the search results to the console. The results are structured as follows:
 *     - youtube_search_results (object): Contains YouTube search results.
 *         - organic_results (array): A list of objects, each representing a YouTube video result.
 *             - title (string): The title of the video.
 *             - link (string): The URL to the video.
 *             - snippet (string): A brief snippet or description of the video.
 *             - summary_description (string): A summary description of the video.
 *     - hacker_news_search_results (object): Contains Hacker News search results.
 *         - organic_results (array): A list of objects, each representing a Hacker News article.
 *             - title (string): The title of the article.
 *             - link (string): The URL to the article.
 *             - snippet (string): A brief snippet or description of the article.
 *             - summary_description (string): A summary description of the article.
 *     - reddit_search_results (object): Contains Reddit search results.
 *         - organic_results (array): A list of objects, each representing a Reddit post.
 *             - title (string): The title of the post.
 *             - link (string): The URL to the post.
 *             - snippet (string): A brief snippet or description of the post.
 *             - summary_description (string): A summary description of the post.
 *     - arxiv_search_results (object): Contains arXiv search results.
 *         - organic_results (array): A list of objects, each representing an arXiv paper.
 *             - title (string): The title of the paper.
 *             - link (string): The URL to the paper.
 *             - snippet (string): A brief snippet or description of the paper.
 *             - with_metadata (boolean): Indicates if the result includes metadata.
 *             - summary_description (string): A summary description of the paper.
 *     - wikipedia_search_results (object): Contains Wikipedia search results.
 *         - organic_results (array): A list of objects, each representing a Wikipedia page.
 *             - title (string): The title of the page.
 *             - link (string): The URL to the page.
 *             - snippet (string): A brief snippet or description of the page.
 *             - with_metadata (boolean): Indicates if the result includes metadata.
 *             - summary_description (string): A summary description of the page.
 *     - text_chunks (object): Contains summaries from Twitter.
 *         - twitter_summary (array): A list of strings, each representing a summary from Twitter.
 *     - search_completion_links (array): A list of URLs representing the completion of the search.
 *     - completion_links (array): A list of URLs representing the completion of the search.
 *     - completion (object): Contains summarized information from the search.
 *         - key_posts (array): A list of objects, each representing a key post.
 *             - text (string): The text of the post.
 *             - url (string): The URL to the post.
 *         - key_tweets (array): A list of objects, each representing a key tweet.
 *             - text (string): The text of the tweet.
 *             - url (string): The URL to the tweet.
 *         - key_news (array): A list of objects, each representing a key news article.
 *             - text (string): The text of the news article.
 *             - url (string): The URL to the news article.
 *         - key_sources (array): A list of objects, each representing a key source.
 *             - text (string): The text of the source.
 *             - url (string): The URL to the source.
 *         - twitter_summary (string): A summary of Twitter results.
 *         - summary (string): A general summary of the search results.
 *         - reddit_summary (string): A summary of Reddit results.
 *         - hacker_news_summary (string): A summary of Hacker News results.
 */
async function performAISearch() {
    try {
        // Desearch AI Search
        const aiSearchResult = await desearch.AISearch({
            prompt: "Bittensor",  // The search query
            tools: [
                "web",
                "hackernews",
                "reddit",
                "wikipedia",
                "youtube",
                "twitter",
                "arxiv"
            ],  // List of tools to use for the search
            model: "NOVA",  // The model to use for the search
            date_filter: "PAST_24_HOURS",  // Filter results from the past 24 hours
            streaming: false,  // Whether to stream results
        });

        // Print the search results
        console.log(aiSearchResult);
    } catch (error) {
        console.error('Error performing AI search:', error);
    }
}

// Call the function to perform the AI search
performAISearch();
