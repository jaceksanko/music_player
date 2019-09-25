import React from 'react';
import {shallow} from 'enzyme';
import {initialState, testStore} from "../../utils";
import HeaderPlayer from "../HeaderPlayer";
import { ReactComponent as RandomSVG } from "../../images/random.svg";
import { ReactComponent as RedoSVG } from "../../images/redo.svg";
import { ReactComponent as RepeatSVG } from "../../images/repeat.svg";
import HmburgerMenuSVG from "../../images/HamburgerMenuSVG";

const setUp = (initialState={}) => {
  const store = testStore(initialState);
  return shallow(<HeaderPlayer store={store}/>).childAt(0).dive();
};

describe('FooterPlayer Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setUp(initialState);
  });

  it('Should render without errors', () => {
    expect(wrapper.find(`[className='headerPlayer']`).length).toEqual(1);
  });

  it('includes RandomSVG', () => {
    expect(wrapper.containsMatchingElement(<RandomSVG/>)).toEqual(true);
  });

  it('includes RedoSVG', () => {
    expect(wrapper.containsMatchingElement(<RedoSVG/>)).toEqual(true);
  });

  it('includes RepeatSVG', () => {
    expect(wrapper.containsMatchingElement(<RepeatSVG/>)).toEqual(true);
  });

  it('includes HmburgerMenuSVG', () => {
    expect(wrapper.containsMatchingElement(<HmburgerMenuSVG/>)).toEqual(true);
  });
});