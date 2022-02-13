import cmedia from './bindClient.module.css';
import React from 'react';
import { areaAPI } from '../../api/api';
const AddClientModule = (props) => {
    let idRef = React.createRef();
    let nameRef = React.createRef();
    let phoneRef = React.createRef();
    let postRef = React.createRef();

    const createClient = () => {
        props.showModal();
        console.log(props.clients);
    }
    const completeCreate = () => {
        props.hideModal();
        let newClient = {
            id: idRef.current.value,
            name: nameRef.current.value,
            phone: phoneRef.current.value,
            email: postRef.current.value,
            bindId: 0
        }
        props.createClient(newClient);
        areaAPI.createClient(newClient.id, newClient.name, newClient.phone, newClient.email, newClient.bindId).then(data => {
            console.log(data);
        })
    }
    return (
        <div className={cmedia.AddClientModule}>
         <h1>b)</h1>
            <button className={cmedia.addNew} onClick={createClient}>Добавить нового клиента</button>
            {props.modalWindow &&
                <div className={cmedia.modal}>
                    <p>Введите данные нового клиента</p>
                    ИД: <input type="text" ref={idRef} />
                    Имя: <input type="text" ref={nameRef} />
                    Телефон: <input type="text" ref={phoneRef} />
                    Почта: <input type="text" ref={postRef} />
                    <button onClick={completeCreate}>Создать</button>
                </div>}
        </div>
    )
}

export default AddClientModule;