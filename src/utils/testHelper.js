export const sections = [{ name: 'currentlyReading', title: 'Currently Reading' }, { name: 'wantToRead', title: 'Want To Read' }, { name: 'read', title: 'Read' }];

export const themeStyle = {
  header: "#262626",
  background: "#313131",
  cards: "#292929",
  text: "rgba(255, 255, 255, 1)",
  textOpacity1: "rgba(255, 255, 255, 0.9)",
  action: "#BD00FF",
  background: "#313131",
  cards: "#292929",
  header: "#262626",
  text: "rgba(255, 255, 255, 1)",
  textDD: "rgba(0, 0, 0, 0.7)",
  textOpacity1: "rgba(255, 255, 255, 0.9)",
  textOpacity2: "rgba(255, 255, 255, 0.85)"
};

export const books = [
  {
    authors: ["William E. Shotts, Jr."],
    averageRating: 4,
    categories: ["COMPUTERS"],
    description: "Descrição teste 1",
    id: "nggnmAEACAAJ",
    imageLinks: { smallThumbnail: "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api" },
    publishedDate: "2012",
    publisher: "No Starch Press",
    shelf: "currentlyReading",
    subtitle: "A Complete Introduction",
    title: "The Linux Command Line"
  },
  {
    authors: ["Robert Galbraith"],
    averageRating: 3.5,
    categories: ["Fiction"],
    description: "Descrição teste 2",
    id: "evuwdDLfAyYC",
    imageLinks: { smallThumbnail: "http://books.google.com/books/content?id=evuwdDLfAyYC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api" },
    publishedDate: "2013-04-30",
    publisher: "Mulholland Books",
    shelf: "wantToRead",
    title: "The Cuckoo's Calling"
  },
  {
    authors: ["Stephen King"],
    averageRating: 3.5,
    categories: ["Fiction"],
    description: "Descrição teste 3",
    id: "jAUODAAAQBAJ",
    imageLinks: { smallThumbnail: "http://books.google.com/books/content?id=jAUODAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api" },
    publishedDate: "2016-05-03",
    publisher: "Simon and Schuster",
    shelf: "read",
    title: "Needful Things"
  },
]

export const onThemeChange = () => { }

export const handleChange = () => { }

export const onClick = () => { }

export const onChange = () => { }

export const darkTheme = true

export const loading = false

export const divClass = "header-theme-selector"

export const pClass = "header-theme-selector-p"

export const title = "Add to"

export const shelf = "none"

export const book = {
  authors: ["Stephen King"],
  averageRating: 3.5,
  categories: ["Fiction"],
  description: "Descrição teste 3",
  id: "jAUODAAAQBAJ",
  imageLinks: { smallThumbnail: "http://books.google.com/books/content?id=jAUODAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api" },
  publishedDate: "2016-05-03",
  publisher: "Simon and Schuster",
  shelf: "read",
  title: "Needful Things"
}