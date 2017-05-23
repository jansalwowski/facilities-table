import {FILTER_ADDRESS_SET, FILTER_SPECIALIZATION_SET} from "../types";

const state = {
    specializationId: null,
    addressId: null
};

const mutations = {
    [FILTER_SPECIALIZATION_SET] (state, value) {
        state.specializationId = value;
    },

    [FILTER_ADDRESS_SET] (state, value) {
        state.addressId = value;
    }
};

export default {
    namespaced: true,
    state,
    mutations
}
