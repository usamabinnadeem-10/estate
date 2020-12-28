import React from 'react'
import './mapLogic/map.css'
import GeneralBox from './GeneralBox'
import LocationBox from './LocationBox'
import FeatureBox from './FeatureBox'
import Images from './Images'
import SellerInfo from './SellerInfo'
function Ad() {

    return (
      <div className="d-flex flex-column mx-auto col-10" style={{marginTop : '150px'}}>
        <div className="d-flex flex-column" style={{margin : '10px 50px'}}>
          <h2>Post Ad</h2>
        </div>
        <LocationBox/>
        <div className="d-flex flex-row col-12 flex-wrap my-4">
          <GeneralBox/>
          <FeatureBox/>
        </div>
        <Images/>
        <SellerInfo/>
        
      </div>
    )
}

export default Ad
