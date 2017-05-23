<template>
    <div>
        <service v-for="service in services" :service="service" :key="service.id"></service>
    </div>
</template>

<script type="text/babel">
    import Service from './Service.vue';

    export default {
        computed: {
            services() {
                return this.$store.getters['services/getServicesBySpecializationId'](this.specializationId);
            }
        },

        components: {
            Service
        },

        props: {
            specializationId: {
                type: Number,
                required: true
            }
        }
    }
</script>
