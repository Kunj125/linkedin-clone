import React from 'react'
import './Widgets.css'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import InfoIcon from '@mui/icons-material/Info';
function Widgets() {
    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon/>
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    );

  return (
    <div className='widgets'>
        <div className="widgets__header">
            <h2>LinkedIn News</h2>
            <InfoIcon/>
        </div>

        {newsArticle("North sea oil licenses face backlash", "5h ago" )}
        {newsArticle("Coronavirus: UK updates", "10h ago" )}
        {newsArticle("Tesla hits new highs", "15h ago" )}
        {newsArticle("Redux and React", "20h ago" )}
        {newsArticle("Bitcoin breas $22k", "22h ago" )}
    </div>
  )
}

export default Widgets