import cmedia from './chooseArea.module.css';
import React, { useState } from 'react';
import { areaAPI } from '../../api/api';
import Client from '../bindClients/client';
// Презентационная компонента. Выполнена неправильно, т.к. нарушает концепцию чистой функции и имеет сайд-эффекты, такие как запросы к API(не успел сделать thunk)
//
const ChooseArea = (props) => {
    //Переменные
    let [searchFlat, setSearchFlat] = useState('');
    const mStreets = [];
    const streetNames = [];
    const houseNumbers = [];
    const flatNumbers = [];
    const mHouses = [];
    const mFlats = [];
    let strRef = React.createRef();
    let housesRef = React.createRef();
    let flatRef = React.createRef();
    let flatClients = props.flatClients.map(client => {
        return <Client id={client.id} name={client.name} phoneNumber={client.phone} key={client.id} email={client.email} />
    })


    //Запросы API, совершенно неправильно. Не успел сделать thunk. И запросы могут быть немного непредсказуемыми, 
    //т.к. они ассинхронны, а отрисовка компоненты происходит гораздо быстрее. И второй и третий запросы корректно происходят только после первого,
    //т.к. они последовательно зависимы
    areaAPI.getStreets().then(data => {
        for (let i = 0; i < data.length; i++) {

            mStreets.push(data[i]);
            streetNames.push(data[i].name);

        }

    });

    areaAPI.getHouses(props.selectedStreetId[0].id).then(data => {
        for (let i = 0; i < data.length; i++) {

            mHouses.push(data[i]);
            houseNumbers.push(data[i].name);

        }
    });

    areaAPI.getFlats(props.selectedHouseId[0].id).then(data => {
        for (let i = 0; i < data.length; i++) {

            mFlats.push(data[i]);
            flatNumbers.push(data[i].flat);

        }
    });


    //Отправляем в state значение выбранной квартиры
    const onChangeFlat = () => {
        props.selectFlat(flatRef.current.value);
    }
     //Отправляем в state значение выбранной улицы
    const onChangeStreet = () => {
        props.selectStreet(strRef.current.value);
    }
     //Отправляем в state значение выбранного дома
    const onChangeHouse = () => {
        props.selectHouse(housesRef.current.value);
    }
     //Отправляем в state полученные улицы
    const setStreets = () => {

        props.setStreets(mStreets);
        props.setStreetNames(streetNames);

    }
    //Отправляем в state полученные дома
    const setHouses = () => {

        props.setHouses(mHouses);
        props.setHouseNumbers(houseNumbers);

    }
    //Отправляем в state полученные квартиры
    const setFlats = () => {

        props.setFlats(mFlats);
        props.setFlatNumbers(flatNumbers);

    }
    //Загружаем жильцов квартир
    const showFlatClients = () => {
        setSearchFlat(flatRef.current.value);
        areaAPI.getFlatClients(props.selectedFlatId[0].id).then(data => {
            flatClients.push(data);
            console.log(data);
            props.setFlatClient(flatClients);
        });
    }
   
   //Создание options для datalist
    let optStreets = props.streets.map((street) => {
        return (<option value={street.name} id={street.id} key={street.id} />)
    })
    let optHouses = props.houses.map((house) => {
        return (<option value={house.name} id={house.id} key={house.id} />)
    })
    let optFlats = props.house_flats.map((flat) => {
        return (<option value={flat.name} id={flat.id} key={flat.id} />)
    })
   
   
    return (
        <div className={cmedia.chooseArea}>
            <h1>1)a </h1>
            <h4>Адрес</h4>
            <div className="street">
                <input ref={strRef} onChange={onChangeStreet} list="streetdata" id="street" autoFocus={false} name="street" onFocus={setStreets} placeholder="Улица" />
                <datalist id="streetdata">
                    {optStreets}
                </datalist>
                <input list="housedata" id="house" ref={housesRef} onChange={onChangeHouse} autoFocus={false} name="house" onFocus={setHouses} placeholder="Дом" />
                <datalist id="housedata">
                    {optHouses}
                </datalist>
                <input list="flatdata" id="flat" ref={flatRef} name="flat" onFocus={setFlats} onChange={onChangeFlat} placeholder="Квартира" />
                <datalist id="flatdata">
                    {optFlats}
                </datalist>
            </div>
            <h1>c) </h1>
            <h4>Отображение жильцов выбранной квартиры:</h4>
            <button onClick={showFlatClients}>Показать</button>
            <input type="text" value={searchFlat} />
            {flatClients}

        </div>
    )
}

export default ChooseArea;