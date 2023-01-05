import React from 'react';
import ReactDOM from 'react-dom/client';

const li1 = React.createElement(
  "li",
  {
    className: "list-item",
  },
  "About Us"
);
const li2 = React.createElement(
  "li",
  {
    className: "list-item",
  },
  "Resources"
);
const li3 = React.createElement(
  "li",
  {
    className: "list-item",
  },
  "Contact Us"
);

const contents = React.createElement('div',{
    className: 'contents'
}, [li1, li2, li3]);

const logo = React.createElement('div',{
    className: 'logo'
}, 'Hello World');

const container = React.createElement('div',{
    className: 'container',
},[logo, contents]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
