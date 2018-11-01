import React from 'react';
import { shallow } from 'enzyme';
import { book, themeStyle } from '../utils/testHelper';

import ModalContent from '../components/ModalContent';

describe('ModalContent', () => {
  it('renders ModalContent component', () => {
    const modalcontent = shallow(<ModalContent
      themeStyle={themeStyle}
      book={book} />);
  });
});