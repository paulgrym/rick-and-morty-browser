# Rick and Morty Browser

With the use of this app you can browse "Rick and Morty" characters. 

Data about characters is taken from an [external API](https://rickandmortyapi.com/).

## Table od content

- [Demo](#demo)
- [How to use](#how-to-use)
- [To do](#to-do)
- [Technologies](#technologies)
- [Available scripts](#available-scripts)

## Demo

You can find a demo [**here**](https://paulgrym.github.io/rick-and-morty-browser/).

## How to use

At the top of the page you can see page's logo and a navigation to a Characters List page and to a Favourite Characters List page.

- Clicking **Logo** will redirect you to main page - **Characters List page**.

- On the **Characters List page** you can look through "Rick and Morty" characters. Each character position includes image, title and two buttons - for adding and removing from "Favourite characters" list. To find out more about the selected character, click on its image or title, and then you will be redirected to a character's subpage. Character can only be added to "Favourite characters" list once - the "add button" will be disabled if the character is already on this list.

- On the **Character subpage**, in addition to the informations from the characters list, you will find character status, species, type, gender, origin and current location.

- On the **Favourite Characters List page** you can look through your favourite characters just like on characters list page - you can click on its image or title to find out more about the character. You can remove character from this list using the delete button on the selected character tile. Favourite characters are saved in Locale Storage.

At the bottom of the page, there is a pagination that allows you to view all character pages.

## To do

- [ ] improve "add and remove buttons" styles - change to more subtle icon buttons
- [ ] filter functionality
- [ ] search functionality

## Technologies

- JavaScript (ES6+)
- React
- Create-react-app
- Styled-components
- CSS (Flex, Grid, media queries)
- ThemeProvider
- Redux / Toolkit
- Redux-Saga
- React Router
- Custom Hooks
- Axios
- Promises, async/await
- Local storage

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
