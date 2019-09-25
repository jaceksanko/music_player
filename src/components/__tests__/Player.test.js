import React from 'react';
import { shallow } from 'enzyme';
import Player from "../Player";
import HeaderPlayer from "../HeaderPlayer";
import ImageArtist from "../ImageArtist";
import FooterPlayer from "../FooterPlayer";

it('renders without crashing', () => {
  shallow(<Player />);
});

it('includes HeaderPlayer', () => {
  const app = shallow(<Player />);
  expect(app.containsMatchingElement(<HeaderPlayer/>)).toEqual(true)
});

it('includes ImageArtist', () => {
  const app = shallow(<Player />);
  expect(app.containsMatchingElement(<ImageArtist/>)).toEqual(true)
});

it('includes FooterPlayer', () => {
  const app = shallow(<Player />);
  expect(app.containsMatchingElement(<FooterPlayer/>)).toEqual(true)
});