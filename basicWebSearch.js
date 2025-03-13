// Import the Datura library
import Datura from "datura-js";

// Initialize the Datura client with your API key
// Replace 'your-api-key' with your actual API key
const datura = new Datura('your-api-key');

/**
 * Perform a basic Web search using the Datura client.
 *
 * This function performs a Web search with the specified parameters and logs the results.
 *
 * Input:
 *   - query (string): The search query to be used in the Web search.
 *   - num (number): The number of search results to return.
 *   - start (number): The starting index for the search results.
 *
 * Output:
 *   - Logs the search results to the console. The results are structured as follows:
 *     - Each result is an object representing a web search result with the following attributes:
 *         - title (string): The title of the search result.
 *         - link (string): The URL to the search result.
 *         - snippet (string): A brief snippet or description of the search result.
 *         - displayed_link (string): The displayed URL of the search result.
 *         - source (string): The source of the search result.
 *         - date (string): The date of the search result, if available.
 *         - snippet_highlighted_words (array): Words in the snippet that are highlighted.
 *         - sitelinks (object): Contains inline sitelinks.
 *             - inline (array): A list of objects, each representing a sitelink.
 *                 - title (string): The title of the sitelink.
 *                 - link (string): The URL to the sitelink.
 */
async function performBasicWebSearch() {
    try {
        // Basic Web search
        const basicWebResult = await datura.basicWebSearch({
            query: "latest news on AI",
            num: 10,
            start: 0
        });

        // Print the search results
        console.log(basicWebResult);
    } catch (error) {
        console.error('Error performing basic Web search:', error);
    }
}

// Call the function to perform the basic Web search
performBasicWebSearch();