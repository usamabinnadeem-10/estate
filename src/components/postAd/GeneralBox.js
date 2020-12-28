import React, {useState} from 'react'



function GeneralBox() {
    
    const [remainingTitle, setRemainingTitle] = useState()
    const [remainingDescription, setRemainingDescription] = useState()

    return (
        <div className="d-flex flex-column card p-2 mt-3 col-12 col-lg-6 me-4">
          <h3 className="text-muted" style={{margin : '10px 50px'}}>General Information</h3>
            <div className="col" style={{margin : '10px 50px'}}>
              <div className="d-flex flex-column">
                <h6 className="text-muted"><span className="text-danger">*</span> Property Type</h6>
                <select name="property-type" id="property-type" className="">
                  <option value="select">Select a category</option>
                  <option value="Residential">Residential Property</option>
                  <option value="Country">Country Estate</option>
                  <option value="Commercial">Commercial Property</option>
                  <option value="New">All New Buildings</option>
                  <option value="Daily">Daily Real Estate</option>
                </select>
              </div>
              <div className="d-flex flex-row mt-3">
                <div className="col-6">
                  <h6 className="text-muted"><span className="text-danger">*</span> Type</h6>
                  <div className="d-flex flex-row">        
                    <div className="me-3">
                      <input type="radio" id="male" name="type" value="sale"/>
                      <label for="sale" >Sale</label>
                    </div>
                    <div  className="me-3">
                      <input type="radio" id="female" name="type" value="rent"/>
                      <label for="rent">Rent</label>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <h6 className="text-muted"><span className="text-danger">*</span> From</h6>
                  <div className="d-flex flex-row">        
                    <div className="me-3">
                      <input type="radio" id="male" name="from" value="owner"/>
                      <label for="sale" >Owner</label>
                    </div>
                    <div  className="me-3">
                      <input type="radio" id="female" name="from" value="agent"/>
                      <label for="rent">Agent</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-column mt-3">
                  <h6 className="text-muted"><span className="text-danger">*</span> Title (47 characters max)</h6>
                  <input onChange={(e)=>setRemainingTitle(47 - e.target.value.length)} id="property-title" type="text" placeholder="Title" className="p-2" maxLength="47"></input>
                  <p>{ remainingTitle ? remainingTitle + ' characters left' : '47 characters left'}</p>
              </div>
              <div className="d-flex flex-column mt-3">
                  <h6 className="text-muted"><span className="text-danger">*</span> Description (3000 characters max)</h6>
                  <textarea onChange={(e)=>setRemainingDescription(3000 - e.target.value.length)} type="text" placeholder="Description" rows="10" className="p-2" maxLength="3000"></textarea>
                  <p>{ remainingDescription ? remainingDescription + ' characters left' : '3000 characters left'}</p>
              </div>

            </div>
        </div>
    )
}

export default GeneralBox
