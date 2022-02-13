import { connect } from "react-redux"
import ChooseArea from "./chooseArea"
//Контейнерная компонента. Передаем данные из STATE презентационной компоненте
let mapStateToProps=(state)=>{
    return{
        streets: state.area.streets,
        streetNames: state.area.streetNames,
        houses: state.area.houses,
        house_flats: state.area.house_flats,
        selectedStreet:state.area.selectedStreet,
        selectedStreetId:state.area.selectedStreetId,
        selectedHouseId:state.area.selectedHouseId,
        selectedFlatId:state.area.selectedFlatId,
        selectedFlat:state.area.selectedFlat,
        flatNumbers:state.area.flatNumbers,
        flatClients:state.area.flatClients
    }
}

//Передаем нужные диспатчи презентационной компоненте
let mapDispatchToProps=(dispatch)=>{
    return{
        setStreets:(streets)=>{
            dispatch({
                type:'SET_STREETS',
                streets
            })
        },
        setStreetNames:(streetNames)=>{
            dispatch({
                type:'SET_STREET_NAMES',
                streetNames
            })
        },
        setHouseNumbers:(houseNumbers)=>{
            dispatch({
                type:'SET_HOUSE_NUMBERS',
                houseNumbers
            })
        },
        setFlatNumbers:(flatNumbers)=>{
            dispatch({
                type:'SET_FLAT_NUMBERS',
                flatNumbers
            })
        },
        setHouses:(houses)=>{
            dispatch({
                type:'SET_HOUSES',
                houses
            })
        },
        setFlats:(flats)=>{
            dispatch({
                type:'SET_FLATS',
                flats
            })
        },
        
        selectStreet:(street)=>{
            dispatch({
                type:'SELECT_STREET',
                street
            })
        },
        selectHouse:(house)=>{
            dispatch({
                type:'SELECT_HOUSE',
                house
            })
        },
        selectFlat:(flat)=>{
            dispatch({
                type:'SELECT_FLAT',
                flat
            })
        },
        setFlatClient:(flatClient)=>{
            dispatch({
                type:'ADD_FLAT_CLIENT',
                flatClient
            })
        }
    }
}

let ChooseAreaContainer=connect(mapStateToProps,mapDispatchToProps)(ChooseArea);

export default ChooseAreaContainer;