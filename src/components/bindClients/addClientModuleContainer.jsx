import cmedia from './bindClient.module.css';
import { areaAPI } from '../../api/api';
import AddClientModule from './addClientModule';
import { connect } from 'react-redux';


let mapStateToProps=(state)=>{
    return {
        clients: state.clientsPage.clients,
        modalWindow:state.clientsPage.modalWindow
    }
}

let mapDispatchToProps=(dispatch)=>{
    return{
        createClient:({id,name,phone,email,bindId})=>{
            dispatch({
                type:'CREATE_CLIENT',
                client:{id,name,phone,email,bindId}
            })
        },
        showModal:()=>{
            dispatch({
                type:'SHOW_MODAL',
            })
        },
        hideModal:()=>{
            dispatch({
                type:'HIDE_MODAL',
            })
        }
    }
}
let AddClientModuleContainer=connect(mapStateToProps,mapDispatchToProps)(AddClientModule);
export default AddClientModuleContainer;