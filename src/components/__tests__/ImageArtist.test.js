import React from 'react';
import {shallow} from 'enzyme';
import {initialState, testStore} from "../../utils";
import ImageArtist from "../ImageArtist";



const setUp = (initialState={}) => {
  const store = testStore(initialState);
  return shallow(<ImageArtist store={store}/>).childAt(0).dive();
};

describe('ImageArtist Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setUp(initialState);
  });

  it('Should render without errors', () => {
    expect(wrapper.find(`[className='imageArtist']`).length).toEqual(1);
  });

  it('includes img alt="imageArtist"', () => {
    expect(wrapper.containsMatchingElement(<img alt="imageArtist"/>)).toEqual(true);
  });

  it('includes div className="imageFilter"', () => {
    expect(wrapper.containsMatchingElement(<div className="imageFilter"/>)).toEqual(true);
  });
  it('includes div className="title", h1 name artist, h2 name song', () => {
    expect(wrapper.containsMatchingElement(<div className="title">
      <h1>{initialState.nameArtist}</h1>
      <h2>{initialState.nameSong}</h2>
    </div>)).toEqual(true);
  });

});