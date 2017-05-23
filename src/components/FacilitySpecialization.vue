<template>
    <div class="row">
        <div class="col-md-3">
            {{ specialization.name }}
        </div>
        <div class="col-md-9">
            Cena
        </div>


        <div class="col-md-12">
            <hr>
        </div>

        <div class="col-md-offset-3 col-md-9">
            <facility-services :specializationId="specialization.id"></facility-services>
        </div>
    </div>
</template>

<script type="text/babel">
    import FacilityServices from './FacilityServices.vue';

    export default {
        props: {
            specialization: {
                type: Object,
                required: true
            }
        },

        components: {
            FacilityServices
        }
    }
</script>
