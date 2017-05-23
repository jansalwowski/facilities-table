import Vue from 'vue';
import Vuex from 'vuex';
import specializations from './modules/specializations';
import services from './modules/services';
import filters from './modules/filters';
import addresses from './modules/addresses';
import doctors from './modules/doctors';

Vue.use(Vuex);

const store = new Vuex.Store({
    // strict: process.env.NODE_ENV !== 'production',
    modules: {
        specializations,
        services,
        filters,
        addresses,
        doctors
    }
});

export default store;
