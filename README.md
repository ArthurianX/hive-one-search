# Hive.one Coding Challenge

Change THIS:
https://user-images.githubusercontent.com/2720451/183600331-4051debb-36ff-49a7-b05c-c42f40fb8288.mp4

## Packages and their purpose

I've added extra packages to the project for quality of life and better/faster development:

-   `Next.js`, tied to a vercel account, deployed on web for testing
-   `prettier` (code formatting)
-   `lint-staged` (runs code formatting every commit)
-   `styled-components` per the tasks's request
    Possibly unnecessary components, but to have things more complete:
-   `sass` (to use scss files)
-   ChakraUI (React UI Component library), for the general template

### Some notes:

-   TypeScript: Added basic interfaces and types to components, no need for something more in the scope of this project
-   Even though I'm using Next.js, I could've gotten the data directly, but I choose to simulate a random interval to fetch the data so the search component has to handle the lack of data as well.

# Hive.one part - Frontend Take Home Task

## Preface

The task should take you around 3 hours, in case it takes you longer feel free to submit your work up to that point.

**No need to implement the reference images exactly as shown. The point of this task is about the components and the search user flow, not the visual style!**

## Setup

Feel free to use whatever tools you are most comfortable with.

For context: We are using Next.js, our React components are broken down in an Atomic Design like structure (Atoms building up Molecules building Organisms building up Views), for styling we use Styled Components.

## Task: Implement a search UI

### Create a search component for users to enter their search query

#### References for search query component

-   ![Search Bar](./test-assets/images/search-bar.gif 'search bar')
-   ![Recent Searches](./test-assets/images/recent-searches.png 'recent searches')

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

-   ![Search Restuls Page for Users](./test-assets/images/users-search-results-page.png 'users search results')
-   ![Search Results Page for Communities](./test-assets/images/communities-search-results-age.png 'communities search result page')

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

# Next.js part

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
