<template>
    <div id="app">
        <img src="./assets/logo.png">
        <div class="container">
            <div class="panel panel-default">
                <div class="panel-body">
                    <filters></filters>
                </div>
                <div class="panel-body">
                    <facility-specialization v-for="specialization in specializations"
                                             :specialization="specialization"
                                             :key="specialization"
                    ></facility-specialization>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import FacilitySpecialization from './components/FacilitySpecialization.vue'
    import Filters from './components/Filters.vue'
    import {mapGetters} from "vuex";

    export default {
        name: 'app',

        components: {
            FacilitySpecialization,
            Filters
        },

        computed: {
            ...mapGetters('specializations', {
                specializations: 'filteredSpecializations'
            })
        }
    }
</script>

