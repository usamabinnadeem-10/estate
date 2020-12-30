import React, {useState, useEffect} from 'react'
import Places from './Places'

const rooms = ['1','2','3','4','5','6+']


function Buy({residential, commercial, by_the_day, setSearchHelper, setOptionHelper, addRoomToListHelper,option}) {

    // const [option, setOption] = useState('residential')
    // const [roomsSelected, setRoomsSelected] = useState([])


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

    // const addRoomToList = (e) => {
    //     var isChecked = document.getElementById(e).checked
    //     console.log(isChecked)
    //     if (isChecked){
    //         let temp = roomsSelected
    //         temp.push(e)
    //         setRoomsSelected(temp)
    //     }else{
    //         const index = roomsSelected.indexOf(e)
    //         if(index > -1){
    //             let temp = roomsSelected
    //             temp.splice(index,1)
    //             setRoomsSelected(temp)
    //         }
    //     } 
    // }

    

    return (
        <div className="card bg-light d-flex flex-row col-10 flex-wrap align-items-center">

            <div className="dropdown bg-light ">
                <button className="btn dropdown-toggle " type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                    Apartment in a new building and secondary building
                </button>
                
                <ul id="dropdown-buy-1" className="dropdown-menu p-3" aria-labelledby="dropdownMenuButton">
                    {
                        !by_the_day && (
                            <li>
                                <div className="d-flex flex-row pt-2 px-3 pb-4">
                                    <div className="d-flex flex-row align-items-baseline p-2">
                                        <input checked={option==='residential' ? 'checked' : ''} style={{width : '20px'}} onClick={()=>setOptionHelper('residential')} type="radio" id="residential" name="option" value="residential"/>
                                        <label for="residential">Residential</label>
                                    </div>
                                    <div className="d-flex flex-row align-items-baseline p-2">
                                        <input checked={option==='commercial' ? 'checked' : ''} onClick={()=>setOptionHelper('commercial')} type="radio" id="commercial" name="option" value="commercial"/>
                                        <label for="commercial">Commercial</label>
                                    </div>
                                </div>
                            </li>
                        ) 
                    }
                    
                    {
                        option === 'residential' ? (
                            residential.map((row,index)=>{
                                return(
                                    <>
                                    <li>
                                        <div className="d-flex flex-row align-items-baseline px-3">
                                            <input className="" type="checkbox" id={row} name={row} value={row}/>
                                            <h6 className="mx-2">{row}</h6>
                                        </div>
                                    </li>
                                    { (index == 1 || index == 3) ? <hr></hr> : null }
                                    </>
                                )
                            })
                        ) : (
                            commercial.map((row,index)=>{
                                return(
                                    <>
                                    <li>
                                    <div className="d-flex flex-row align-items-baseline px-3">
                                        <input className="" type="checkbox" id={row} name={row} value={row}/>
                                        <h6 className="mx-2">{row}</h6>
                                    </div>
                                    </li>
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
                    <li>
                        <div className="d-flex flex-row align-items-baseline px-3">
                            <input className="" type="checkbox" />
                            <h6 className="mx-2">Studio</h6>
                        </div>
                    </li>
                    <li>
                        <div className="d-flex flex-row align-items-baseline px-3">
                            <input className="" type="checkbox" />
                            <h6 className="mx-2">Free layout</h6>
                        </div>
                    </li>
                </ul>
            </div>

            <div className="dropdown col-12 col-lg-1">
                <button className="btn  dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                    Price
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <li>
                        <div className="d-flex flex-column pt-2 px-3 pb-4">
                            <input className="input-group p-1 mx-2 my-2" style={{width : '100px'}} type="number" placeholder="minimum" min="0"></input>
                            <input className="input-group p-1 mx-2 my-2" style={{width : '100px'}} type="number" placeholder="maximum" min="0"></input>
                        </div>
                    </li>
                </ul>
            </div>

            <div className="d-flex flex-row align-items-center col-12 col-lg-4 p-2">
                <Places setSearchHelper={setSearchHelper}/>
                {/* <input onChange={(e)=>setSearchHelper(e.target.value)} type="text" placeholder="city,region..." className="input-group"></input> */}
            </div>
        </div>
    )
}

export default Buy
