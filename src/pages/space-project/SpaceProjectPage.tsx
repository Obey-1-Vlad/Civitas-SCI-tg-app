/**
 * Based on https://www.zooniverse.org/projects/cfllopes/splus-science-hunters
 */
import { useState } from "react"

import HelpIcon from '../../icons/HelpIcon';
import './space-project-page.css';

const baseUrl = import.meta.env.BASE_URL;

const CHECK_ITEMS = [
  {title: 'Galaxies', selected: false},
  {title: 'Asteroids', selected: false},
  {title: 'Unusual objects', selected: false},
  {title: 'Just stars', selected: false}
];

export const SpaceProjectPage = () => {
  const [checkItems, setCheckItems] = useState(CHECK_ITEMS);
  const [count, setCount] = useState(1);

  const submitLabels = () => {
    console.log({
      objects: checkItems.filter((item) => item.selected),
      pictureId: count
    });
 
    // reset labels
    setCheckItems(checkItems.map(i=>({...i, selected: false})));
    // next image 
    setCount((count) => count + 1);
  };

  return (
    <>
      <img src={`${baseUrl}/${count}.jpeg`} alt="Logo" />

      <div className="check-items">
        {checkItems.map((item, id) => {
          return (
            <button
              key={id}
              className={`check-item ${item.selected && 'selected'}`}
              onClick={() => {
                const items = checkItems.map((i) => ({...i}));
                items[id] = {...items[id], selected: !items[id].selected}
                setCheckItems(items)
              }}>
              {item.title}
            </button>
        )})}
      </div>

      <div className="card">
        <button
         onClick={submitLabels}
         disabled={checkItems.every(i => !i.selected)}>
          Submit
        </button>

        <HelpIcon />
      </div>
    </>
  )
}
