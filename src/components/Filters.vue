<template>
    <div class="row">
        <div class="col-md-4">
            <div class="form-group">
                <label for="specialization-filter" class="control-label">Specialization filter</label>
                <select class="form-control" id="specialization-filter" v-model="specializationId">
                    <option value="">None</option>
                    <option v-for="specialization in specializations" :value="specialization.id">{{ specialization.name }}</option>
                </select>
            </div>

        </div>
        <div class="col-md-4">
            <div class="form-group">
                <label for="address-filter" class="control-label">Address filter</label>
                <select class="form-control" id="address-filter" v-model="addressId">
                    <option value="">None</option>
                    <option v-for="address in addresses" :value="address.id">{{ address.name }}</option>
                </select>
            </div>
        </div>
        <div class="col-md-4"></div>
    </div>
</template>

<script type="text/babel">
    import {mapState} from "vuex";
    import {FILTER_ADDRESS_SET, FILTER_SPECIALIZATION_SET} from "../store/types";
    export default {
        computed: {
            ...mapState('specializations', {
                specializations: state => state.specializations
            }),

            ...mapState('addresses', {
                addresses: state => state.addresses
            }),

            specializationId: {
                get() {
                    return this.$store.state.filters.specializationId;
                },

                set(value) {
                    this.$store.commit('filters/' + FILTER_SPECIALIZATION_SET, value);
                }
            },

            addressId: {
                get() {
                    return this.$store.state.filters.addressId;
                },

                set(value) {
                    this.$store.commit('filters/' + FILTER_ADDRESS_SET, value);
                }
            }
        }
    }
</script>
