<template>
    <div class="row">
        <div class="col-md-6">{{ service.name }}</div>
        <div class="col-md-3">{{ service.price }}</div>
        <div class="col-md-3">Details</div>

        <div class="col-md-12">
            <hr>
        </div>
    </div>
</template>

<script type="text/babel">
    export default {
        props: {
            service: {
                type: Object,
                required: true
            }
        }
    }
</script>
