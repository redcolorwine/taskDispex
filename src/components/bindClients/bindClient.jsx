import Client from './client';


const BindClient = (props) => {

    let masClients = props.clients.map(client => {
        return <Client selectedFlat={props.selectedFlat} id={client.id} key={client.id} name={client.name} phoneNumber={client.phone} email={client.email} bindId={client.bindId} />
    })

    return (
        <div >
            {masClients}
        </div>
    )
}

export default BindClient;