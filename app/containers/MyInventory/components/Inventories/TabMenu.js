import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  TAB_MENU_ITEM_ALL,
  TAB_MENU_ITEM_HEROES,
  TAB_MENU_ITEM_GEAR,
  TAB_MENU_ITEM_EMOTES,
  TAB_MENU_ITEM_CHEST,
} from '../../constants';

export default function TabMenu({ currentTab, onChangeCurrentTab }) {
  const clickTab = tab => e => {
    e.preventDefault();
    onChangeCurrentTab(tab);
  };

  return (
    <div className="item-tabs-menu w-tab-menu">
      <a
        data-w-tab="Tab 1"
        onClick={clickTab('all')}
        className={classNames('item-tab-link', 'w-inline-block', 'w-tab-link', { 'w--current': currentTab === TAB_MENU_ITEM_ALL })}
      >
        <div>All Items (8)</div>
      </a>
      <a
        data-w-tab="Tab 2"
        onClick={clickTab('heroes')}
        className={classNames('item-tab-link', 'w-inline-block', 'w-tab-link', { 'w--current': currentTab === TAB_MENU_ITEM_HEROES })}
      >
        <div>Heroes (1)</div>
      </a>
      <a
        data-w-tab="Tab 3"
        onClick={clickTab('gear')}
        className={classNames('item-tab-link', 'w-inline-block', 'w-tab-link', { 'w--current': currentTab === TAB_MENU_ITEM_GEAR })}
      >
        <div>Gear (4)</div>
      </a>
      <a
        data-w-tab="Tab 4"
        onClick={clickTab('emotes')}
        className={classNames('item-tab-link', 'w-inline-block', 'w-tab-link', { 'w--current': currentTab === TAB_MENU_ITEM_EMOTES })}
      >
        <div>Emotes (1)</div>
      </a>
      <a
        data-w-tab="Tab 5"
        onClick={clickTab('chest')}
        className={classNames('item-tab-link', 'w-inline-block', 'w-tab-link', { 'w--current': currentTab === TAB_MENU_ITEM_CHEST })}
      >
        <div>Chests (2)</div>
      </a>
    </div>
  );
}

TabMenu.propTypes = {
  currentTab: PropTypes.string,
  onChangeCurrentTab: PropTypes.func,
};
