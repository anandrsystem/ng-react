import app from '../../main';
import React from "react";
import ReactDOM from "react-dom";
import ListComponent from "../react/ListComponent";

const reactDirective = app.directive('reactDirective', function () {
  return {
    template: '<div id="reactapp"></div>',
    link: function (scope, el, attrs) {
      const list = ['Apple', 'Orange'];
      ReactDOM.render(
        <ListComponent itemsList={list} />
        , reactapp);

    }
  }
})

export default reactDirective
