import React from 'react';
import glamorous from 'glamorous';
import Icons from '../../../assets/icons';

const MenuItemContainer = glamorous.div(
  {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    padding: '0.8rem 0.8rem 0.8rem 1.6rem',
    fontSize: '.8rem',
    borderRight: '3px solid #4c5679',
    ':hover': {
      cursor: 'pointer',
    },
  },
  ({ active }) => {
    if (active) {
      return {
        backgroundColor: '#3c4467',
        borderColor: '#4ec6e1',
      };
    }
  }
);

const MenuItemText = glamorous.span({
  marginLeft: '1.4rem',
});

const MenuItem = ({ title = '', icon, active, ...restProps }) => {
  const MenuIcon = Icons[icon];
  return (
    <MenuItemContainer active={active} {...restProps}>
      {MenuIcon
        ? <MenuIcon style={{ height: '1.3rem', fill: '#ffffff' }} />
        : null}
      <MenuItemText>
        {title}
      </MenuItemText>
    </MenuItemContainer>
  );
};

export default MenuItem;
