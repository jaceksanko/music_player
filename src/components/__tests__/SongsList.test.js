import React from 'react';
import {shallow} from 'enzyme';
import {initialState, testStore} from "../../utils";
import SongsList from "../SongsList";
import {ReactComponent as ShareSVG} from "../../images/share.svg";
import {ReactComponent as FavoriteSVG} from "../../images/favorite.svg";


const setUp = (initialState={}) => {
  const store = testStore(initialState);
  return shallow(<SongsList store={store}/>).childAt(0).dive();
};

describe('SongsList Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setUp(initialState);
  });

  it('Should render without errors', () => {
    expect(wrapper.find(`[className='ulSongsList']`).length).toEqual(1);
  });

  it('includes 11 li', () => {
    expect(wrapper.find(`[className='liSongsList']`).length).toEqual(11);
  });
  it('includes 11 div shareSong', () => {
    expect(wrapper.find(`[className='shareSong']`).length).toEqual(11);
  });
  it('includes 11 favoriteSong', () => {
    expect(wrapper.find(`[className='favoriteSong']`).length).toEqual(11);
  });
  it('includes ShareSVG', () => {
    expect(wrapper.containsMatchingElement(<ShareSVG/>)).toEqual(true);
  });
  it('includes FavoriteSVG', () => {
    expect(wrapper.containsMatchingElement(<FavoriteSVG/>)).toEqual(true);
  });

});