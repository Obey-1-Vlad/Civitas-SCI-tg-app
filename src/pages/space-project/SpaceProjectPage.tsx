/**
 * Based on https://www.zooniverse.org/projects/cfllopes/splus-science-hunters
 */
import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom';
import { queryRowById } from '../../hooks/huggingFaceAPI';

import HelpIcon from '../../icons/HelpIcon';
import './space-project-page.css';


const CHECK_ITEMS = [
  {title: 'Galaxies', selected: false},
  {title: 'Asteroids', selected: false},
  {title: 'Unusual objects', selected: false},
  {title: 'Just stars', selected: false}
];

export const SpaceProjectPage = () => {
  const [checkItems, setCheckItems] = useState(CHECK_ITEMS);
  const [dataRow, setDataRow] = useState<any>({});
  const navigate = useNavigate();

  useEffect(() => {
    queryRowById("0")
    .then((response) => {
      setDataRow(response?.rows[0]);
    })
  }, []);

  const submitLabels = () => {
    console.log({
      objects: checkItems.filter((item) => item.selected),
      pictureId: dataRow?.row?.image?.src
    });
 
    // reset labels
    setCheckItems(checkItems.map(i=>({...i, selected: false})));
    // next row 
    queryRowById(dataRow?.row_idx + 1)
      .then((response) => {
        setDataRow(response?.rows[0]);
      })
  };

  return (
    <>
      <img src={dataRow?.row?.image?.src} alt="Logo" />

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
      <div className="flex flex-col items-center justify-center">
        <button
          onClick={() => navigate(-1)}
        >
          Get Back
        </button>
      </div>
    </>
  )
}
