import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
    const { list, title, shelf, themeStyle } = this.props;
    const { ddOpen } = this.state;
    return (
      <div className="dd-wrapper">
        <div className="dd dd-btn" onClick={() => this.toggleList()}>
          <div className="dd-header-title">{title}</div>
          {ddOpen
            ? <i className="arrow ion-ios-arrow-up" />
            : <i className="arrow ion-ios-arrow-down" />
          }
        </div>
        {ddOpen && <ul style={{ background: themeStyle.textOpacity1 }} className="dd-list">
          {list.map((item) => shelf !== item.name && (
            <li style={{ color: themeStyle.textDD }} className="dd-list-item" key={item.name} onClick={() => this.onChangeShelf(item.name)} >{item.title}</li>
          ))}
          {shelf !== 'none' ? <li style={{ color: themeStyle.textDD }} className="dd-list-item" key='none' onClick={() => this.onChangeShelf('none')} >None</li> : null}
        </ul>}
      </div>
    )
  }
}

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired,
  book: PropTypes.object.isRequired,
  shelf: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  themeStyle: PropTypes.object.isRequired,
}
