## Getting Started

Clone the git repo and follow instruction below

- `yarn` to install dependencies
- `yarn dev` to start and preview projects at `localhost:3000`

## Requirements

- Query the API provided to retrieve the list of products
- Clicking one of the products should navigate to view (more product details)
- React SSR (Next.js)

## Notes/Findings

- GraphQL API has Relay-style cursor pagination
- Apollo Client with hooks to be used to query data
- Some items in data set with the same ID => hence [slug] for url query not [id], brittle in production?
- Originally MVP had pagination on button click (sending cursor to GraphQL API), refactored to infinite scrolling (use of IntersectionObserver)
