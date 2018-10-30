import React from 'react';
import Rating from 'react-stars';
import '../App.css';

export default function ModalContent({ book, themeStyle }) {
  return (
    <div className="modal-container">
      <div className="modal-upper">
        <div className="modal-cover-rating">
          <div style={{ width: 128, height: 189, backgroundImage: `url(${book.imageLinks && book.imageLinks.smallThumbnail})`, marginRight: 16, marginBottom: 16 }}></div>
          <Rating
            className="modal-rating"
            count={5}
            value={book.averageRating}
            size={20}
            color2={'#BD00FF'} />
        </div>
        <div className="modal-upper-content">
          <div className="modal-upper-content-titles">
            <h2 style={{ color: themeStyle.textOpacity1 }}>{book.title}</h2>
            {book && book.subtitle ? <h2 style={{ color: themeStyle.textOpacity1 }}>{': ' + book.subtitle}</h2> : null}
          </div>
          <p style={{ color: themeStyle.textOpacity1 }}>{book.authors}</p>
          <p style={{ color: themeStyle.textOpacity1 }}>{book.categories}</p>
          <p style={{ color: themeStyle.textOpacity1 }}>{book.publisher}</p>
          <p style={{ color: themeStyle.textOpacity1 }}>{book.publishedDate}</p>
          <p style={{ color: themeStyle.textOpacity1 }}>{book.shelf}</p>
        </div>
      </div>
      <div style={{ color: themeStyle.textOpacity1, background: themeStyle.header }} className="modal-lower">
        {book.description}
      </div>
    </div>
  )
}
