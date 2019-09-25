import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import Player from "../Player";
import Playlist from "../Playlist";

it('renders without crashing', () => {
  shallow(<App />);
});

it('includes Player', () => {
  const app = shallow(<App />);
  expect(app.containsMatchingElement(<Player/>)).toEqual(true)
});

it('includes Playlist', () => {
  const app = shallow(<App />);
  expect(app.containsMatchingElement(<Playlist/>)).toEqual(true)
});
