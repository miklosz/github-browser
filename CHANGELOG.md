# (Quasi) Changelog 
This is not a 100% changelog. Treat it as a description and log of the coding process

## Steps taken:
1. App bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.  
`npx create-react-app my-app --template redux-typescript`
2. Inital cleanup - adding missing packages, cleaning readme etc
3. Fetch handler for calls to GitHub API added. No axios, no libs, pure JS fetch
4. Components created, routing added