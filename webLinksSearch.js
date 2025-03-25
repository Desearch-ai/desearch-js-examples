// Import the Datura library
import Datura from "datura-js";

// Initialize the Datura client with your API key
// Replace 'your-api-key' with your actual API key
const datura = new Datura('your-api-key');

/**
 * Perform a Web links search using the Datura client.
 *
 * This function performs a Web links search with the specified parameters and logs the results.
 *
 * Input:
 *   - prompt (string): The search query to be used in the Web links search.
 *   - tools (array of strings): A list of tools available for conducting the search. These include:
 *       - "Web Search"
 *       - "Hacker News Search"
 *       - "Reddit Search"
 *       - "Wikipedia Search"
 *       - "Youtube Search"
 *       - "Twitter Search"
 *       - "ArXiv Search"
 *   - model (string): The model to use for the search. Options include:
 *       - "NOVA"
 *       - "ORBIT"
 *       - "HORIZON"
 *   - streaming (boolean): A flag indicating whether to stream the search results.
 *
 * Output:
 *   - Logs the search results to the console. The results are structured as follows:
 *     - youtube_search_results (array): Contains YouTube search results.
 *         - title (string): The title of the video.
 *         - link (string): The URL to the video.
 *         - snippet (string): A brief snippet or description of the video.
 *         - summary_description (string): A summary description of the video.
 *     - hacker_news_search_results (object): Contains Hacker News search results.
 *         - organic_results (array): A list of objects, each representing a Hacker News article.
 *             - position (number): The position of the article in the search results.
 *             - title (string): The title of the article.
 *             - link (string): The URL to the article.
 *             - redirect_link (string): A redirect URL to the article.
 *             - displayed_link (string): The displayed URL of the article.
 *             - favicon (string): The URL to the favicon of the source.
 *             - snippet (string): A brief snippet or description of the article.
 *             - snippet_highlighted_words (array): Words in the snippet that are highlighted.
 *             - source (string): The source of the article.
 *     - reddit_search_results (object): Contains Reddit search results.
 *         - organic_results (array): A list of objects, each representing a Reddit post.
 *             - position (number): The position of the post in the search results.
 *             - title (string): The title of the post.
 *             - link (string): The URL to the post.
 *             - redirect_link (string): A redirect URL to the post.
 *             - displayed_link (string): The displayed URL of the post.
 *             - favicon (string): The URL to the favicon of the source.
 *             - snippet (string): A brief snippet or description of the post.
 *             - snippet_highlighted_words (array): Words in the snippet that are highlighted.
 *             - source (string): The source of the post.
 *     - arxiv_search_results (list): Contains arXiv search results.
 *         - title (string): The title of the paper.
 *         - link (string): The URL to the paper.
 *         - snippet (string): A brief snippet or description of the paper.
 *         - with_metadata (boolean): Indicates if the result includes metadata.
 *         - summary_description (string): A summary description of the paper.
 *     - wikipedia_search_results (list): Contains Wikipedia search results.
 *         - title (string): The title of the page.
 *         - link (string): The URL to the page.
 *         - snippet (string): A brief snippet or description of the page.
 *         - with_metadata (boolean): Indicates if the result includes metadata.
 *         - summary_description (string): A summary description of the page.
 *     - search_results (object): Contains general search results.
 *         - organic_results (array): A list of objects, each representing a search result.
 *             - position (number): The position of the result in the search results.
 *             - title (string): The title of the result.
 *             - link (string): The URL to the result.
 *             - redirect_link (string): A redirect URL to the result.
 *             - displayed_link (string): The displayed URL of the result.
 *             - favicon (string): The URL to the favicon of the source.
 *             - snippet (string): A brief snippet or description of the result.
 *             - snippet_highlighted_words (array): Words in the snippet that are highlighted.
 *             - source (string): The source of the result.
 */
async function performWebLinksSearch() {
    try {
        // Web links search
        const webLinksResult = await datura.webLinksSearch({
            prompt: "Bittensor",
            tools: [
                "Web Search",
                "Hacker News Search",
                "Reddit Search",
                "Wikipedia Search",
                "Youtube Search",
                "Twitter Search",
                "ArXiv Search"
            ],
            model: "NOVA",
        });

        // Print the search results
        console.log(webLinksResult);
    } catch (error) {
        console.error('Error performing Web links search:', error);
    }
}

// Call the function to perform the Web links search
performWebLinksSearch();