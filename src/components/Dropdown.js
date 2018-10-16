import React, { Component } from 'react';
import {
  IoIosArrowDown,
  IoIosArrowUp
} from "react-icons/io";

export default class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ddOpen: false
    };
  }

  toggleList = () => {
    this.setState({ ddOpen: !this.state.ddOpen })
  }

  onChangeShelf = (shelf, book) => {
    const { onChange } = this.props;
    this.toggleList();
    onChange(shelf, book);
  }

  render() {
    const { list, title, book, isBookOnTheShelf } = this.props;
    const { ddOpen } = this.state;
    const shelf = isBookOnTheShelf(book.id);
    return (
      <div className="dd-wrapper">
        <div className="dd dd-btn" onClick={() => this.toggleList()}>
          <div className="dd-header-title">{title}</div>
          {ddOpen
            ? <IoIosArrowUp className="arrow" />
            : <IoIosArrowDown className="arrow" />
          }
        </div>
        {ddOpen && <ul className="dd-list">
          {list.map((item) => shelf !== item.name && (
            <li className="dd-list-item" key={item.name} onClick={() => this.onChangeShelf(item.name, book)} >{item.title}</li>
          ))}
          {shelf ? <li className="dd-list-item" key='none' onClick={() => this.onChangeShelf('none', book)} >None</li> : null}
        </ul>}
      </div>
    )
  }
}
