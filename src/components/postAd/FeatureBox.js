import React from 'react'

function FeatureBox() {
    const feature1 = ['Furniture','Animals allowed', 'K-tioner',
    'Dishwasher','It is possible with children', 
    'Fireplace', 'Internet', 'Fridge', 'Washing Machine', 
    'Sauna', 'Wardrobe']

    const feature2 = ['Elevator', 'Tennis Court','Sports Ground',
    'Signal','Mortgage possible','Swimming Pool',
    'Security / Concierge', 'Playground',' Green array']

    const feature3 = ['School / University','Park', 
    'Far from the road','Shopping centers',
    'Restaurant / Cafe', 'Closed Area', 
    'Residential Complex', 'Business Area', 'Rural Area']

    return (
        <div className="d-flex flex-column card p-3 mt-3 col-lg-5 col-12">

            <div className="d-flex flex-column card p-3 my-2">
                <h3 className="text-muted">Feature No.1</h3>
                <div className="d-flex flex-row">
                    <div className="d-flex flex-column col-6 p-2">
                        <h6 className="text-muted">Floor</h6>
                        <input  
                        id="property-floor" 
                        type="number" 
                        placeholder="Floor" 
                        className="p-2" 
                        min="0"></input>
                    </div>
                    <div className="d-flex flex-column col-6 p-2">
                        <h6 className="text-muted">Floors</h6>
                        <input 
                        id="property-floor" 
                        type="number" 
                        placeholder="Floors" 
                        className="p-2" 
                        min="0"></input>
                    </div>
                </div>
                <div className="d-flex flex-row flex-wrap m-2 p-1">
                    {
                        feature1.map(feature => {
                            return(
                                <div className="col-12 col-sm-6 d-flex flex-row align-items-baseline p-1">
                                <input className="" type="checkbox" id={feature} name={feature} value={feature}/>
                                <h6 className="mx-2">{feature}</h6>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <div className="d-flex flex-column card p-3 my-2">
                <h3 className="text-muted">Feature No.2</h3>
                <div className="d-flex flex-row">
                    <div className="d-flex flex-column col-6 p-2">
                        <h6 className="text-muted">Living Space</h6>
                        <input  
                        id="property-floor" 
                        type="number" 
                        placeholder="in m²" 
                        className="p-2" 
                        min="0"></input>
                    </div>
                    <div className="d-flex flex-column col-6 p-2">
                    <h6 className="text-muted">Parking</h6>
                    <select name="parking" id="parking">
                        <option value="No">No</option>
                        <option value="Garage">Garage</option>
                        <option value="Underground">Underground</option>
                        <option value="Multi-level">Multi-level</option>
                        <option value="Outdoors">Outdoors</option>
                    </select>
                    </div>
                </div>
                <div className="d-flex flex-row flex-wrap m-2 p-1">
                    {
                        feature2.map(feature => {
                            return(
                                <div className="col-12 col-sm-6 d-flex flex-row align-items-baseline p-1">
                                <input className="" type="checkbox" id={feature} name={feature} value={feature}/>
                                <h6 className="mx-2">{feature}</h6>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <div className="d-flex flex-column card p-3 my-2">
                <h3 className="text-muted">Feature No.3</h3>
                <div className="d-flex flex-row flex-wrap m-2 p-1">
                    {
                        feature3.map(feature => {
                            return(
                                <div className="col-12 col-sm-6 d-flex flex-row align-items-baseline p-1">
                                <input className="" type="checkbox" id={feature} name={feature} value={feature}/>
                                <h6 className="mx-2">{feature}</h6>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            
        </div>
    )
}

export default FeatureBox
