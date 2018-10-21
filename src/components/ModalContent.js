import React from 'react';
import Rating from 'react-stars';
import '../App.css';

export default function ModalContent({ book }) {
  return (
    <div className="modal-container">
      <div className="modal-upper">
        <div className="modal-cover-rating">
          <div style={{ width: 128, height: 189, backgroundImage: `url(${book.imageLinks && book.imageLinks.smallThumbnail})`, marginRight: 16, marginBottom: 16 }}></div>
          <Rating
            className="modal-rating"
            count={5}
            value={book.averageRating}
            onChange={() => console.log('mudei')}
            size={20}
            color2={'#BD00FF'} />
        </div>
        <div className="modal-upper-content">
          <div className="modal-upper-content-titles">
            <h2>{book.title}</h2>
            {book && book.subtitle ? <h2>{': ' + book.subtitle}</h2> : null}
          </div>
          <p>{book.authors}</p>
          <p>{book.categories}</p>
          <p>{book.publisher}</p>
          <p>{book.publishedDate}</p>
          <p>{book.shelf}</p>
        </div>
      </div>
      <div className="modal-lower">
        {book.description}
      </div>
    </div>
  )
}
