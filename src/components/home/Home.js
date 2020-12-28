import React, {useState} from 'react'
import Buy from './Buy'



function Home() {

    const [selected, setSelected] = useState(0)


    return (
        <div className="d-flex flex-column mx-auto col-12 bg-dark align-items-center" style={{marginTop : '150px',height: '400px'}}>

            <div className="p-5">
                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <a className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Buy</a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Take off</a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">By the day</a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Estimate</a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Mortgage</a>
                    </li>
                </ul>
            </div>
            <Buy/>
        </div>
    )
}

export default Home

