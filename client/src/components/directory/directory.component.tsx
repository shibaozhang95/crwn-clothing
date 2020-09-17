import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selector';

import './directory.styles.scss';

import MenuItem from '../menu-item/menu-item.component';
import { Section } from '../../redux/directory/directory.types';
import { RootState } from '../../redux/root-reducer';

type StateProps = {
  sections: Section[]
}

type OwnProps = {}

type Props = OwnProps & StateProps;

const Directory = ({ sections }: Props) => (
  <div className='directory-menu'>
    {
      sections.map(selection => (
        <MenuItem key={selection.id} {...selection} />
      ))
    }
  </div>
)

const mapStateToProps = createStructuredSelector<RootState, StateProps>({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);