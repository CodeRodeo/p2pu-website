import React from 'react';
import ReactDOM from 'react-dom';
import FacilitatorResources from './components/Facilitate/FacilitatorResources';
import DiscourseCommunity from './components/Facilitate/DiscourseCommunity';



ReactDOM.render(
  <FacilitatorResources />, document.getElementById('resources-steps')
);


ReactDOM.render(
  <DiscourseCommunity />, document.getElementById('discourse-community')
);

