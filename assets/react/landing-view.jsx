import React from 'react'
import ReactDOM from 'react-dom'
import LearningCirclesStats from './components/Home/LearningCirclesStats'
import MeetingsPreview from './components/Home/MeetingsPreview'
import HeaderTextCarousel from './components/Home/HeaderTextCarousel'
import DiscourseCommunity from './components/Home/DiscourseCommunity'



ReactDOM.render(
  <HeaderTextCarousel />, document.getElementById('header-text-carousel')
);

ReactDOM.render(
  <LearningCirclesStats />, document.getElementById('stats')
);

ReactDOM.render(
  <MeetingsPreview />, document.getElementById('meetings-feed')
);

ReactDOM.render(
  <DiscourseCommunity discourse_path={'/top/quarterly.json?order=posts'} />, document.getElementById('discourse-community')
);

