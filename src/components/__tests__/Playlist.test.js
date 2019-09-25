import React from 'react';
import {shallow} from 'enzyme';
import {initialState, testStore} from "../../utils";
import Playlist from "../Playlist";
import { ReactComponent as ArrowSVG } from "../../images/arrow.svg";
import SongsList from "../SongsList";


const setUp = (initialState={}) => {
  const store = testStore(initialState);
  return shallow(<Playlist store={store}/>).childAt(0).dive();
};

describe('Playlist Component', () => {
  let wrapper;
  const newInitialState = {
    ...initialState,
    displayStatus: "displayOn"
  };
  beforeEach(() => {
    wrapper = setUp(newInitialState);
  });

  it('Should render without errors', () => {
    expect(wrapper.find(`[className='playlist displayOn']`).length).toEqual(1);
  });

  it('includes ArrowSVG', () => {
    expect(wrapper.containsMatchingElement(<ArrowSVG/>)).toEqual(true);
  });

  it('includes SongsList', () => {
    expect(wrapper.containsMatchingElement(<SongsList/>)).toEqual(true);
  });
});