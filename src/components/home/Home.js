import React, {useState} from 'react'
import Buy from './Buy'
import Estimate from './Estimate'

import Geocode from "react-geocode";

const residential_buy = ['Apartment in a new building','Resale apartment', 'Room',
    'Share','House', 
    'Part of the house', 'Townhouse', 'Plot']

const commercial_buy = ['Office','Trading area','Warehouse',
'Free appointment room','Public catering',
'Production','Car service','Ready business',
'Building','Domestic services','Garage','Commercial land']

const residential_take_off = ['Apartment', 'Room',
    'Bed','House', 
    'Part of the house', 'Townhouse']

const commercial_take_off = ['Office','Coworking','Trading area','Warehouse',
'Free appointment room','Public catering',
'Production','Car service','Ready business',
'Building','Domestic services','Garage','Commercial land']

const residential_by_the_day = ['Apartment', 'Room',
    'Bed','House', ]

function Home() {

    const [selected, setSelected] = useState(1)
    const [search, setSearch] = useState('')
    const [option, setOption] = useState('residential')
    const [roomsSelected, setRoomsSelected] = useState([])
    const [coordinates, setCoordinates] = useState({})
    const [price, setPrice] = useState({
        'min' : 0,
        'max' : 0,
    })
    const [pref1, setPref1] = useState([])
    const [pref2, setPref2] = useState([])
    const [ok, setOk] = useState(false)
    const [err, setErr] = useState(false)

    const setOptionHelper = option => {
        setOption(option)
    }

    const setSearchHelper = search => {
        setSearch(search)
    }

    const addRoomToListHelper = (rooms) => {
        setRoomsSelected(rooms)
    }

    const setPriceHelper = (amount, type) => {
        var temp = price
        if (type === 'min'){
            temp['min'] = amount
        }else{
            temp['max'] = amount
        }
        setPrice(temp)
    }

    const isPriceOk = () =>{

        if (price['max'] > price['min']){
            return true
        }
        return false
    }

    const go = (address) =>{
        if(isPriceOk()){
            setOk(true)
            setErr(false)
        }else{
            setErr(true)
        }
        
        Geocode.fromAddress(address, "AIzaSyAto6Hd2ZwWEnjL1muQdRUBulh7kDWtKuM").then(
            response => {
              const { lat, lng } = response.results[0].geometry.location;
              setCoordinates({
                  lat : lat,
                  lng : lng
              })
            },
            error => {
              console.error(error);
            }
        )
    }

    const setPref1Helper = pref => {
        setPref1(pref)
    }

    const setPref2Helper = pref => {
        setPref2(pref)
    }
    

    return (
        <div className="d-flex flex-column mx-auto col-12 bg-dark align-items-center" style={{marginTop : '350px',height: '400px'}}>
            <div className="card col-8">
                {
                    err && (<h3 className="text-danger">*Please enter minimum and maximum amount and ensure that minimum is lesser than maximum</h3>)
                }
            </div>
            <div className="d-flex p-5">
                <ul className="d-flex flex-row justify-content-between nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <a onClick={()=>setSelected(1)} className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Buy</a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a onClick={()=>setSelected(2)} className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Take off</a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a onClick={()=>setSelected(3)} className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">By the day</a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a onClick={()=>setSelected(4)} className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Estimate</a>
                    </li>
                </ul>
            </div>
            {
                selected === 1 && (
                <Buy 
                option={option}
                residential={residential_buy} 
                commercial={commercial_buy} 
                by_the_day={false} 
                setPref1Helper={setPref1Helper}
                setPref2Helper={setPref2Helper}
                setPriceHelper={setPriceHelper}
                setSearchHelper={setSearchHelper}
                setOptionHelper={setOptionHelper} 
                addRoomToListHelper={addRoomToListHelper}/>)
            }
            {
                selected === 2 && (
                <Buy 
                option={option}
                residential={residential_take_off} 
                commercial={commercial_take_off} 
                by_the_day={false} 
                setPref1Helper={setPref1Helper}
                setPref2Helper={setPref2Helper}
                setPriceHelper={setPriceHelper}
                setSearchHelper={setSearchHelper}
                setOptionHelper={setOptionHelper} 
                addRoomToListHelper={addRoomToListHelper}/>)
            }
            {
                selected === 3 && (
                <Buy 
                option={'residential'}
                residential={residential_by_the_day} 
                commercial={[]} 
                by_the_day={true}
                setPref1Helper={setPref1Helper}
                setPref2Helper={setPref2Helper}
                setPriceHelper={setPriceHelper} 
                setSearchHelper={setSearchHelper}
                setOptionHelper={setOptionHelper} 
                addRoomToListHelper={addRoomToListHelper}/>)
            }
            {
                selected === 4 && (
                <Estimate 
                setPriceHelper={setPriceHelper}
                setPref1Helper={setPref1Helper}
                setSearchHelper={setSearchHelper}
                addRoomToListHelper={addRoomToListHelper}/>)
            }
            
            <button className="btn btn-primary btn-lg m-2" onClick={()=>go(search)}>
                Search
            </button>
            <div className="card p-3 m-4">
                {
                    ok && (
                        <>
                        <h3 className="p-3 m-3">Search Parameters</h3>
                        <h5>{option.toUpperCase()}</h5>
                        <hr/>
                        <ul>
                        {
                            
                            pref1.map(pref=>{
                                return(
                                    <li>
                                        {pref}
                                    </li>
                                )
                            })
                        }
                        </ul>
                        <hr/>

                        <ul>
                        {
                            selected !== 4 && (
                                    pref2.map(pref=>{
                                        return(
                                            <li>
                                                {pref}
                                            </li>
                                        )
                                    })
                            )
                        }
                        </ul>
                        <hr/>

                        <h5>Rooms Selected : {roomsSelected.length}</h5>
                        <ul>
                        {
                            
                            roomsSelected.map(room=>{
                                return(
                                    <li>
                                        {room}
                                    </li>
                                )
                            })
                        }
                        </ul>

                        <hr/>

                        <h5>Latitude : {coordinates['lat']}</h5>
                        <h5>Longitude : {coordinates['lng']}</h5>
                        <hr/>
                        {
                            selected !== 4 &&  (<h5>Minimum : {price['min']}</h5>)
                        }
                        {
                            selected !== 4 && (<h5>Maximum : {price['max']}</h5>)
                        }
                        

                        </>
                    )
                }
            </div>
        </div>
    )
}

export default Home

