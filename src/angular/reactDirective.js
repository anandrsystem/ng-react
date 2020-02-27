import app from '../../main';
import React from 'react';
import ReactDOM from 'react-dom';

import App from '../react/App';

const reactDirective = app.directive('reactDirective', function () {
  return {
    template: '<div id="reactapp"></div>',
    scope: {
      fruits: '='
    },
    link: function (scope, el, attrs) {
      ReactDOM.render(
        <App itemsList={scope.fruits} />
        , reactapp);
    }
  }
})

export default reactDirective
