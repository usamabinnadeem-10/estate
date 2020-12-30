import React, {useState, useEffect} from 'react'
import Places from './Places'

const rooms = ['1','2','3','4+']


function Estimate({addRoomToListHelper, setSearchHelper}) {

    const [roomsSelected, setRoomsSelected] = useState([])


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
                    Apartment
                </button>
                
                <ul id="dropdown-buy-1" className="dropdown-menu p-3" aria-labelledby="dropdownMenuButton">        
                    <li>
                        <div className="d-flex flex-row align-items-baseline px-3">
                            <input className="" type="checkbox" id="apartment" name="apartment" value="apartment"/>
                            <h6 className="mx-2">Apartment</h6>
                        </div>
                    </li>
                    <li>
                        <div className="d-flex flex-row align-items-baseline px-3">
                            <input className="" type="checkbox" id="lcd" name="lcd" value="lcd"/>
                            <h6 className="mx-2">Lcd</h6>
                        </div>
                    </li>
                </ul>
            </div>

            <div className="dropdown col-12 col-lg-1">
                <button className="btn  dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                    Rooms
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <li>
                        <div className="d-flex flex-row pt-2 px-3 pb-4">
                            {
                                rooms.map(room=>{
                                    return(
                                        <div className="d-flex flex-row align-items-baseline px-3">
                                            <input onClick={(e)=>addRoomToListHelper(e.target.id)} className="" type="checkbox" id={room} name={room} value={room}/>
                                            <h6 className="mx-2">{room}</h6>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </li>
                </ul>
            </div>


            <div className="d-flex flex-row align-items-center col-12 col-lg-8 p-2">
                <Places setSearchHelper={setSearchHelper}/>
                {/* <input onChange={(e)=>setSearchHelper(e.target.value)} type="text" placeholder="city,region..." className="input-group"></input> */}
            </div>
        </div>
    )
}

export default Estimate
