import React from 'react';
import glamorous from 'glamorous';
import MenuItem from './MenuItem';

const NavigationContainer = glamorous.div({
  display: 'flex',
  flexDirection: 'column',
  width: '200px',
  backgroundColor: '#4c5679',
  color: '#ffffff',
  justifyContent: 'space-between',
  padding: '2.6rem 0 0.8rem',
});

// const NavFooter = glamorous.span({
//   display: 'inline-block',
//   marginLeft: '0.8rem',
// });

const Navigation = ({ steps, activeIndex = 0, setActiveIndex }) => {
  return (
    <NavigationContainer>
      <div>
        {steps.map((step, i) => {
          return (
            <MenuItem
              key={i}
              onClick={() => setActiveIndex(i)}
              active={i === activeIndex}
              {...step}
            />
          );
        })}
      </div>
      {/* <NavFooter>Navigation footer info</NavFooter> */}
    </NavigationContainer>
  );
};

export default Navigation;
