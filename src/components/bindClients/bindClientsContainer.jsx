import { connect } from "react-redux"
import BindClient from "./bindClient"


let mapStateToProps=(state)=>{
    return{
        clients:state.clientsPage.clients,
        selectedFlat:state.area.selectedFlat
    }
}

let mapDispatchToProps=(dispatch)=>{
    return{

    }
}


let BindClientsContainer=connect(mapStateToProps,mapDispatchToProps)(BindClient);

export default BindClientsContainer;