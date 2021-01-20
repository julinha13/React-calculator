import React from 'react';
import { render } from "react-dom";

import Calculator from './main/Calculator';
import * as serviceWorker from './serviceWorker';
import './index.css';

render(
  <div>
    <h1>Calculadora</h1>
    <Calculator/>
  </div>, 

  document.getElementById('root')
);