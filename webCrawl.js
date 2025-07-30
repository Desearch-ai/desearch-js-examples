// Import the Desearch library
import Desearch from "desearch-js";

// Initialize the Desearch client with your API key
// Replace 'your-api-key' with your actual API key
const desearch = new Desearch('your-api-key');

/**
 * Perform a Web crawl using the Desearch client.
 *
 * This function performs a Web crawl with given url and logs the results.
 *
 * Input:
 *   - url (string): The url of the website to crawl.
 *
 * Output:
 *   - Logs web content to the console. 
 */
async function performWebCrawl() {
    try {
        // Web crawl
        const webContent = await desearch.webCrawl("https://docs.desearch.ai/docs/desearch-api");

        // Print the web content
        console.log(webContent);
    } catch (error) {
        console.error('Error performing web crawl:', error);
    }
}

// Call the function to perform the web crawl
performWebCrawl();