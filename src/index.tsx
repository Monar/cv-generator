import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Global, CSSObject } from '@emotion/core';
import styled from '@emotion/styled';

import { data } from './data';
import { Template } from './templates/default';
import { Data } from './types';

const globalStyles: CSSObject = {
  '@media print': {
    body: {
      margin: 0,
      padding: 0,
    },
  },
};

const Paper = styled('div')({
  background: 'white',
  display: 'block',
  boxSizing: 'border-box',
  width: '21cm',
  height: '29.7cm',
  padding: '0.5cm',
  boxShadow: '0',
  '@media only screen': {
    width: '21cm',
    height: '29.7cm',
    background: 'white',
    display: 'block',
    margin: '0 auto',
    marginBottom: '0.5cm',
    boxSizing: 'border-box',
    boxShadow: '0 0 0.5cm rgba(0,0,0,0.5)',
    padding: '.5cm',
  },
});

let rootElement = document.getElementById('root');
if (!rootElement) {
  rootElement = document.createElement('div');
  rootElement.id = 'root';
  document.body.appendChild(rootElement);
}

ReactDOM.render(
  <>
    <Global styles={globalStyles} />
    <Paper>
      <Template data={(data as unknown) as Data} />
    </Paper>
  </>,
  rootElement,
);
