import './App.css';
import React from 'react';
import ChooseAreaContainer from './components/chooseArea/chooseAreaContainer';
import AddClientModuleContainer from './components/bindClients/addClientModuleContainer';
import BindClientsContainer from './components/bindClients/bindClientsContainer';
//В приложении три блока: 1) Выбор адреса и поиск жильцов квартиры 2)Модуль добавления клиентов 3)Связка клиентов с квартирой
//Может быть в силу неопытности, но я не понимаю немного почему сервер выдает ошибку при связке клиента с адресом, на сайте с API тоже самое. Может быть это как-то связано с политикой CORS
const App = (props) => {
  return (
    <div className="App">
      <ChooseAreaContainer/>
      <AddClientModuleContainer/>
      <BindClientsContainer />
    </div>
  );
}

export default App;
