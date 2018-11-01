![myreads](https://raw.githubusercontent.com/mgillory/my-reads/dev/readme/myreads.png)
# my-reads

MyReads is the first project offered by Udacity's React Developer nanodegree program. It consists of an application that lists books on three different bookshelfs (currently reading, want to read and read). It also allows users to search for any books available and assign them to any given bookshelf.

Feel free to [check the deployment on Heroku](https://myreadsmatheus.herokuapp.com/)
or install and run it locally on your machine with the steps listed below.

## How to install and run it locally

```
# Clone this repository
git clone https://github.com/mgillory/my-reads.git

# Go into the repository
cd my-reads

# Install dependencies (or yarn)
npm install

# Run (or yarn)
npm start
```

## Project structure

Since this is a relatively simple project, I have tried to keep the architecture as lean as possible so it would not create unnecessary complexity. The structure of the project can be seen below.

```
.
├── public/
|   ├── ...
├── readme/
|   ├── ...
├── src/
|   ├── __tests__/
|   |   ├── <test files>
|   ├── api/
|   |   ├── BooksAPI.js
|   ├── components/
|   |   ├── BookList.js
|   |   ├── BookShelf.js
|   |   ├── Card.js
|   |   ├── Dropdown.js
|   |   ├── Footer.js
|   |   ├── ModalContent.js
|   |   ├── Search.js
|   |   ├── ThemeSwitcher.js
|   ├── icons/
|   |   ├── ...
|   ├── utils/
|   |   ├── theme.js
|   |   ├── testHelper.js
|   <other files>
```

## Components call stack

In order to visualize the order that components are being called, check the diagram below.

```
├── App.js
|   ├── BookShelf.js
|   |   ├── ThemeSwitcher.js
|   |   ├── BookList.js
|   |   |   ├── Card.js
|   |   |   |   ├── Dropdown.js
|   |   |   ├── ModalContent.js
|   |   ├── Footer.js
|   ├── Search.js
|   |   ├── BookList.js
|   |   |   ├── Card.js
|   |   |   |   ├── Dropdown.js
|   |   |   ├── ModalContent.js
```

## Tests

For tests, it was used [Jest](https://jestjs.io/) + [Enzyme](https://github.com/airbnb/enzyme). With that in mind, it was implemented the shallow rendering tests of all components. To run the tests, simply run `npm test` or `yarn test`