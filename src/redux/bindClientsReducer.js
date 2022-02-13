//РЕДЪЮСЕР создания клиента и связки с адресом
//по умолчанию создан клиент для демонстрации
let initialState = {
    clients: [{id:0,name:'serhioLobetchevsky',phone:'1777777',email:'serhio@mail.hi',bindId:0}],
    modalWindow:false,
}

const bindClientsReducer= (state = initialState, action) => {
    switch (action.type) {
        //создание клиента
        case 'CREATE_CLIENT':{
            return{...state,
            clients:[...state.clients, action.client]}
        }
        //показ модального окна
        case 'SHOW_MODAL':{
            return{...state,
            modalWindow:true
            }
        }
        //сокрытие окна
        case 'HIDE_MODAL':{
            return{...state,
            modalWindow:false
            }
        }
        default: return state;
    }
}

export default bindClientsReducer;