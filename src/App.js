import React, { Component } from 'react';
import glamorous from 'glamorous';
import WizardEngine from './components/WizardEngine';
import RenderActive from './components/WizardEngine/RenderActive';
import Navigation from './components/Navigation';
import views from './data/views.json';
import screens from './components/screens';
import SearchBar from './components/SearchBar';

const NavigationContainer = glamorous.div({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  alignItems: 'stretch',
  flexGrow: 1,
});

const AppContainer = glamorous.div({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'nowrap',
});

class App extends Component {
  render() {
    return (
      <AppContainer>
        <SearchBar />
        <WizardEngine
          steps={views}
          stepComponents={screens}
          Wrapper={NavigationContainer}
        >
          <Navigation />
          <RenderActive />
        </WizardEngine>
      </AppContainer>
    );
  }
}

export default App;
