import { useState } from 'react';
import cmedia from './bindClient.module.css';
import React from 'react';
import { areaAPI } from '../../api/api';
const Client = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [selected, setSelectedFlat] = useState(false);
    let [clientFlat, setClientFlat] = useState('');
    let flatRef = React.createRef();
    const onEditMode = () => {
        setEditMode(true);
    }
    const setFlat = () => {
        setClientFlat(flatRef.current.value);
        areaAPI.addFlatClient(flatRef.current.value, props.id).then(data => {
            setEditMode(false);
            console.log(data);
        })

    }
    const setIdFlat = () => {
        setSelectedFlat(true);
        setEditMode(false);
    }
    const unsetFlat = () => {
        setClientFlat(null);
        areaAPI.deleteFlatClient(props.id).then(data => {
            setEditMode(false);
            console.log(data);
        })

    }
    const onInputChange=()=>{
        setClientFlat(flatRef.current.value);
    }
    return (
        <div className={cmedia.bindClient}>
            <h4>Имя: {props.name}</h4>
            <p>Телефон: {props.phoneNumber}</p>
            <p>Почта: {props.email}</p>
            {clientFlat && <p>{clientFlat}</p>}
            <button>Удалить</button>
            <button onClick={onEditMode}>Редактировать</button>
            {editMode &&
                <div className={cmedia.flatEdit}>
                    Квартира клиента(Собственный id): <input type="text" value={selected ? props.selectedFlat : clientFlat} ref={flatRef} onChange={onInputChange}/>
                    <button onClick={setFlat}>Применить</button>
                    <button onClick={setIdFlat}>Вставить значение и Id кв. из поля выбора адреса</button>
                    <button onClick={unsetFlat}>Отвязать от квартиры</button>
                </div>
            }
        </div>
    )
}

export default Client;