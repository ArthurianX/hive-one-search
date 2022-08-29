# Frontend Take Home Task

## Preface

The task should take you around 3 hours, in case it takes you longer feel free to submit your work up to that point.

**No need to implement the reference images exactly as shown. The point of this task is about the components and the search user flow, not the visual style!**

## Setup

Feel free to use whatever tools you are most comfortable with.

For context: We are using Next.js, our React components are broken down in an Atomic Design like structure (Atoms building up Molecules building Organisms building up Views), for styling we use Styled Components.

## Task: Implement a search UI

### Create a search component for users to enter their search query

#### References for search query component

-   ![Search Bar](./images/search-bar.gif 'search bar')
-   ![Recent Searches](./images/recent-searches.png 'recent searches')

#### User Flow

1. Select the scope (either users or communities)
2. Enter the search term

-   When clicking into the search input field, show a history of recent searches (stored in localStorage). Use an appropriate message if no recent searches exist.
-   each entry in that list links to the "Search Results Page" for that query, i.e. clicking on it takes you to that route by encoding the params (scope, term) in the URL
-   while typing the search term the recent searches get filtered to match that query
-   to emphasize the recent searches box, add an overlay behind it

3. Press 'Enter' or click on the magnifying icon. => this leads you to the "Search Results Page"

### Create a search results page

#### References for search results page

-   ![Search Restuls Page for Users](./images/users-search-results-page.png 'users search results')
-   ![Search Results Page for Communities](./images/communities-search-results-age.png 'communities search result page')

**Note**: the images are not showing how the UI should work. Given the query "bit" only users with "bit" in the name or in the Twitter handle should be shown. The same goes for communities.

You only need to implement the list of matches on that page, ignore the rest (filter, sidebar) even the styling of the item in the list doesn't matter. Only the name and/or Twitter handle are important!

See `./data/communities.json` for an example of communties data. For the users make up your own test data.

In it's final form that data would come from a server, but for the scope of this task you can simple use it directly, e.g. create utitlity functions that operate on the test data.

## Bonus Points

-   Mobile version (i.e. works well on smaller screen sizes)

## Evaluation Criteria

-   Understanding of the scope of the task
-   Good UX
-   Well structured and clean code
-   UI of the search bar component (not including the recent searches)
