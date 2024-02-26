import React from 'react'

import List from './List';
import Churches from './Church';
import BlackArchives from './BlackArchives';
import Calvarys from './Calvary';
import Phenomss from './Phenoms';
import Footer from '../../Footer/Footer';
function Commercial() {
  return (
    <div>
    <div className=" header display-5 mt-4 px-2">Commercial Flooring Projects</div>
        <List />
        <Churches/>
        <BlackArchives/>
        <Calvarys/>
        <Phenomss/>
        <Footer/>
    </div>
  )
}

export default Commercial