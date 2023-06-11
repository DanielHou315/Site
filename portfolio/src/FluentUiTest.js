import React from 'react';
import ReactDOM from 'react-dom';
import { FluentProvider, teamsLightTheme, Button } from '@fluentui/react-components';

ReactDOM.render(
  <FluentProvider theme={teamsLightTheme}>
    <Button appearance="primary">I am a button.</Button>
  </FluentProvider>,
  document.getElementById('root'),
);