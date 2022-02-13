import * as axios from 'axios'
//Интерфейс API. Собрано все вместе и сокращено для простоты использования
const instance = axios.create({

    baseURL: 'https://dispex.org/api/vtest/',
    
});
export const areaAPI = {
    getStreets() {
        return instance.get(`Request/streets`)
            .then(response => {
                return response.data
            });
    },
    getHouses(selectedStreet=1) {
        return instance.get(`Request/houses/${selectedStreet}`)
            .then(response => {
                return response.data
            });
    },
    getFlats(selectedHouse=1) {
        return instance.get(`Request/house_flats/${selectedHouse}`).then(response => {
            return response.data
        });
    },
    createClient(id,name,phone,email,bindId){
        return instance.post(`HousingStock/client`,{id,name,phone,email,bindId}).then(response => {
            return response.data
        });
    },
    
    addFlatClient(addressId,clientId){
        return instance.put(`HousingStock/bind_client`,{addressId,clientId}).then(response => {
            return response.data
        });
    },
    deleteFlatClient(clientId){
        return instance.delete(`HousingStock/bind_client/`,{clientId}).then(response => {
            return response.data
        });
    },
    getFlatClients(addressId){
        return instance.get(`HousingStock/clients?addressId=${addressId}`).then(response => {
            return response.data
        });
    }

}