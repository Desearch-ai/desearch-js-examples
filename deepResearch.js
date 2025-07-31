// Import the Desearch library
import Desearch from "desearch-js"

// Initialize the Desearch client with your API key
// Replace 'your-api-key' with your actual API key
const desearch = new Desearch('your-api-key');

/**
 * Perform an Deep research using the Desearch client.
 *
 * This function performs an Deep research with the specified parameters and logs the results.
 *
 * Input:
 *   - prompt (string): The search query to be used in the Deep research.
 *   - tools (array of strings): A list of tools available for conducting the search. These include:
 *       - "web"
 *       - "hackernews"
 *       - "reddit"
 *       - "wikipedia"
 *       - "youtube"
 *       - "twitter"
 *       - "arxiv"
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
 *    Markdown formated report
 */
async function performDeepResearch() {
    try {
        // Desearch Deep Research
        const deepResearchResult = await desearch.deepResearch({
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
            date_filter: "PAST_24_HOURS",  // Filter results from the past 24 hours
            streaming: false,  // Whether to stream results
        });

        // Print the search results
        console.log(deepResearchResult);
    } catch (error) {
        console.error('Error performing Deep research:', error);
    }
}

// Call the function to perform the Deep research
performDeepResearch();
