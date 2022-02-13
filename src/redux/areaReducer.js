let initialState = {
    streets: [],
    streetNames: [],
    houseNumbers: [],
    flatNumbers: [],
    selectedStreet: ' ',
    selectedHouse: ' ',
    selectedFlat: ' ',
    selectedStreetId: [{ id: 12, name: 'yellow' }],
    selectedHouseId: [{ id: 12, house: '152' }],
    selectedFlatId: [{ id: 12, flat: '777' }],
    houses: ['any'],
    house_flats: [],
    flatClients: [{id:0,name:'Тут появляются пустые жильцы',phone:'1777777',email:'потому что байнд жильцов выдает ошибку сервера:(',bindId:0}],
}

const areaReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_FLAT_CLIENT':{
            return{...state,
                flatClients:[...state.flatClients, action.flatClient]}
        }
        case 'SET_STREETS': {
            return {
                ...state,
                streets: action.streets
            }
        }
        case 'SET_FLATS': {
            return {
                ...state,
                house_flats: action.flats
            }
        }
        case 'SET_STREET_NAMES': {
            return {
                ...state,
                streetNames: action.streetNames
            }
        }
        case 'SET_HOUSE_NUMBERS': {
            return {
                ...state,
                houseNumbers: action.houseNumbers
            }
        }
        case 'SET_FLAT_NUMBERS': {
            return {
                ...state,
                flatNumbers: action.flatNumbers
            }
        }

        case 'SET_HOUSES': {
            return {
                ...state,
                houses: action.houses
            }
        }
        case 'SELECT_STREET': {

            if (state.streetNames.includes(action.street)) {
                return {
                    ...state,
                    selectedStreet: action.street,
                    selectedStreetId: state.streets.filter(street => street.name === action.street)

                }
            } else {

                return { ...state }
            }
        }
        case 'SELECT_HOUSE': {

            if (state.houseNumbers.includes(action.house)) {
                return {
                    ...state,
                    selectedHouse: action.house,
                    selectedHouseId: state.houses.filter(house => house.name === action.house)

                }
            } else {

                return { ...state }
            }

        }
        case 'SELECT_FLAT': {

            if (state.flatNumbers.includes(action.flat)) {
                return {
                    ...state,
                    selectedFlat: action.flat,
                    selectedFlatId: state.house_flats.filter(flat => flat.name === action.flat)

                }
            } else {

                return { ...state }
            }

        }
        default: return state;
    }
}

export default areaReducer;