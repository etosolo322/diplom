import React from 'react';
import ReactDOM from 'react-dom';
import { MdOutlineArrowDownward} from "react-icons/md";

function HomepageFirst() {
  return (
    <div className='homepage-first'>
      <div className='homepage-first-left'>
      <div className='homepage-first-left-header'>
          <div className='homepage-first-left-header-logo'>
          </div>
          
        </div>
        <div className='homepage-first-left-middle'>
          <h1>
          ОАО «Барановичский завод станкопринадлежностей»
          </h1>
          <h3>
          Благодаря надежности и долговечности, технологическая оснастка Барановичского завода станкопринадлежностей завоевала высокую репутацию среди ведущих станкостроительных и машиностроительных предприятий СНГ и Балтии
          </h3>
        </div>
        <div className='homepage-first-left-footer'>
          <MdOutlineArrowDownward color="#4282e3" fontSize="1em" /> 
          Связаться с нами
        </div>
      </div>
      <div className='homepage-first-right'>
      </div>
    </div>
    )
}
export default HomepageFirst;