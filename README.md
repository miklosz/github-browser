## Boilerplate

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Aditional tools, libraries, patterns
* [React router](https://reactrouter.com/)

## Available Scripts
* `yarn start`
* `yarn test`
* `yarn build`

## Notes
This is a MVC far from being finished
- Some tests fail, some are missing
- Redux is rather an overkill for this project
- Layout is basic
- GitHub API supports pagination in an specific way using HTTP header, but not providing "prev" link or total number of records, so navigation is limited to "prev" and "next". Custom solution implemented