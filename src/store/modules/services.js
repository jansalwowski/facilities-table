const state = {
    services: [
        {id: 1, name: 'Odcięcie kutasa', specializationId: 1, addressId: 1},
        {id: 2, name: 'Odcięcie jaj', specializationId: 1, addressId: 1},
        {id: 3, name: 'Odcięcie cycków', specializationId: 2, addressId: 2},
        {id: 4, name: 'Odcięcie nogi', specializationId: 2, addressId: 2},
        {id: 5, name: 'Odcięcie ręki', specializationId: 3, addressId: 2},
        {id: 6, name: 'Odcięcie głowy', specializationId: 3, addressId: 3},
        {id: 7, name: 'Odcięcie palca', specializationId: 3, addressId: 3},
    ]
};

const mutations = {};

const getters = {
    getServicesBySpecializationId: (state, getters) => (id) => {
        return state.services.filter(service => service.specializationId === id)
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    getters
};
