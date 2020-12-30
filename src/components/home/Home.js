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
    const [price, setPrice] = useState({})
    const [pref1, setPref1] = useState([])
    const [pref2, setPref2] = useState([])



    const setOptionHelper = option => {
        setOption(option)
    }

    const setSearchHelper = search => {
        setSearch(search)
    }

    const addRoomToListHelper = (e) => {
        var isChecked = document.getElementById(e).checked
        console.log(isChecked)
        if (isChecked){
            let temp = roomsSelected
            temp.push(e)
            setRoomsSelected(temp)
        }else{
            const index = roomsSelected.indexOf(e)
            if(index > -1){
                let temp = roomsSelected
                temp.splice(index,1)
                setRoomsSelected(temp)
            }
        } 
    }

    const go = (address) =>{
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

    

    return (
        <div className="d-flex flex-column mx-auto col-12 bg-dark align-items-center" style={{marginTop : '150px',height: '400px'}}>

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
                setSearchHelper={setSearchHelper}
                setOptionHelper={setOptionHelper} 
                addRoomToListHelper={addRoomToListHelper}/>)
            }
            {
                selected === 4 && (
                <Estimate 
                setSearchHelper={setSearchHelper}
                addRoomToListHelper={addRoomToListHelper}/>)
            }
            
            <button className="btn btn-primary btn-lg m-2" onClick={()=>go(search)}>
                Search
            </button>
        </div>
    )
}

export default Home

