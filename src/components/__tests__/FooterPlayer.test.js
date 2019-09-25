import React from 'react';
import {shallow} from 'enzyme';
import FooterPlayer from "../FooterPlayer";
import { ReactComponent as ShareSVG } from "../../images/share.svg";
import { ReactComponent as PreviousSVG } from "../../images/previous.svg";
import { ReactComponent as NextSVG } from "../../images/next.svg";
import { ReactComponent as FavoriteSVG } from "../../images/favorite.svg";
import { ReactComponent as PlaySVG } from "../../images/play2.svg";
import { ReactComponent as PauseSVG } from "../../images/pause.svg";
import {initialState, testStore} from "../../utils";

const setUp = (initialState={}) => {
  const store = testStore(initialState);
  return shallow(<FooterPlayer store={store}/>).childAt(0).dive();
};


describe('FooterPlayer Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setUp(initialState);
  });

  it('Should render without errors', () => {
    expect(wrapper.find(`[className='footerPlayer']`).length).toEqual(1);
  });

  it('includes ShareSVG', () => {
    expect(wrapper.containsMatchingElement(<ShareSVG/>)).toEqual(true);
  });

  it('includes PreviousSVG', () => {
    expect(wrapper.containsMatchingElement(<PreviousSVG/>)).toEqual(true);
  });
  it('includes NextSVG', () => {
    expect(wrapper.containsMatchingElement(<NextSVG/>)).toEqual(true);
  });
  it('includes FavoriteSVG', () => {
    expect(wrapper.containsMatchingElement(<FavoriteSVG/>)).toEqual(true);
  });
  it('includes PlaySVG', () => {
    expect(wrapper.containsMatchingElement(<PlaySVG/>)).toEqual(true);
  });
  it('includes PauseSVG', () => {
    const newInitialState = {
      ...initialState,
      playStatus: "pause"
    };
    const newStore = testStore(newInitialState);
    const newWrapper = shallow(<FooterPlayer store={newStore}/>).childAt(0).dive();
    expect(newWrapper.containsMatchingElement(<PauseSVG/>)).toEqual(true);
  });

  it('includes input class = seekBar ', () => {
    expect(wrapper.containsMatchingElement(<input className="seekBar"/>)).toEqual(true);
  });

});