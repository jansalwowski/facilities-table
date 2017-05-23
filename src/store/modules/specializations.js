const state = {
    specializations: [
        {id: 1, name: 'Gastrolog'},
        {id: 2, name: 'Androlog'},
        {id: 3, name: 'Ginekolog'},
        {id: 4, name: 'Pediatra'},
        {id: 5, name: 'Geriatra'},
    ]
};

const getters = {
    filteredSpecializations(state, getters, rootState) {
        let specializations = state.specializations;

        let filterSpecializationId = rootState.filters.specializationId;
        if (filterSpecializationId) {
            specializations = specializations.filter(specialization => specialization.id === filterSpecializationId);
        }

        let filterAddressId = rootState.filters.addressId;
        if (filterAddressId) {
            let specializationsInAddressIds = rootState.services.services
                .filter(service => service.addressId === filterAddressId)
                .map(service => service.specializationId);

            let uniqueSpecializationIds = [...new Set(specializationsInAddressIds)];

            return specializations.filter(specialization => uniqueSpecializationIds.includes(specialization.id));
        }

        return specializations;
    }
};

export default {
    namespaced: true,
    state,
    getters,
};
