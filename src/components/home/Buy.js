import React, {useState, useEffect} from 'react'
import './radio.css'

const residential = ['Apartment in a new building','Resale apartment', 'Room',
    'Share','House', 
    'Part of the house', 'Townhouse', 'Plot']

const commercial = ['Office','Trading area','Warehouse',
'Free appointment room','Public catering',
'Production','Car service','Ready business',
'Building','Domestic services','Garage','Commercial land']



function Buy() {

    const [option, setOption] = useState('residential')



    useEffect(()=>{
        function handleResize(){
            if(window.innerWidth < 520 && window.innerWidth > 320){
                document.getElementById('dropdownMenuButton').style.fontSize = '10px'
            }else if(window.innerWidth <= 320){
                document.getElementById('dropdownMenuButton').style.fontSize = '9px'
            }
            else{
                document.getElementById('dropdownMenuButton').style.fontSize = 'inherit'
            }
        }
        window.addEventListener('resize', handleResize)
    })

    

    return (
        <div className="card bg-light d-flex flex-row col-10 flex-wrap align-items-center">

            <div className="dropdown bg-light ">
                <button className="btn dropdown-toggle " type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                    Apartment in a new building and secondary building
                </button>
                <ul id="dropdown-buy-1" className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <li>
                        <div className="d-flex flex-row pt-2 px-3 pb-4">
                            <div className="d-flex flex-row align-items-baseline p-2">
                                <input style={{width : '20px'}} onClick={()=>setOption('residential')} type="radio" id="residential" name="option" value="residential"/>
                                <label for="residential">Residential</label>
                            </div>
                            <div className="d-flex flex-row align-items-baseline p-2">
                                <input onClick={()=>setOption('commercial')} type="radio" id="commercial" name="option" value="commercial"/>
                                <label for="commercial">Commercial</label>
                            </div>
                        </div>
                    </li>
                    {
                        option === 'residential' ? (
                            residential.map((row,index)=>{
                                return(
                                    <>
                                    <div className="d-flex flex-row align-items-baseline px-3">
                                        <input className="" type="checkbox" id={row} name={row} value={row}/>
                                        <h6 className="mx-2">{row}</h6>
                                    </div>
                                    { (index == 1 || index == 3) ? <hr></hr> : null }
                                    </>
                                )
                            })
                        ) : (
                            commercial.map((row,index)=>{
                                return(
                                    <>
                                    <div className="d-flex flex-row align-items-baseline px-3">
                                        <input className="" type="checkbox" id={row} name={row} value={row}/>
                                        <h6 className="mx-2">{row}</h6>
                                    </div>
                                    { (index == 10) ? <hr></hr> : null }
                                    </>
                                )
                            })
                        )
                    }
                    
                </ul>
            </div>

            <div className="dropdown col-12 col-lg-1">
                <button className="btn  dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                    Rooms
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </div>

            <div className="dropdown col-12 col-lg-1">
                <button className="btn  dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                    Price
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                </ul>
            </div>

            <div className="d-flex flex-row align-items-center col-12 col-lg-4 p-2">
                <input type="text" placeholder="city,region..." className="input-group"></input>
            </div>


        </div>
    )
}

export default Buy
