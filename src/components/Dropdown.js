import React, { Component } from 'react';
import {
  IoIosArrowDown,
  IoIosArrowUp
} from "react-icons/io";
import '../App.css';

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

  onChangeShelf = (shelf) => {
    const { onChange } = this.props;
    this.toggleList();
    onChange(shelf);
  }

  render() {
    const { list, title, shelf } = this.props;
    const { ddOpen } = this.state;
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
            <li className="dd-list-item" key={item.name} onClick={() => this.onChangeShelf(item.name)} >{item.title}</li>
          ))}
          {shelf !== 'none' ? <li className="dd-list-item" key='none' onClick={() => this.onChangeShelf('none')} >None</li> : null}
        </ul>}
      </div>
    )
  }
}
