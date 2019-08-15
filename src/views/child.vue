<template lang="html">
    <div>
        <div class="child-content">
            <p>this area from childPage:我是嵌套路由来的</p>
        </div>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                header: '',
                content: '',
                favoritelist: []
            }
        },
        created() {

        },
        computed: {
            count() {
                return this.$store.getters.getterCount
            }
        },
        mounted() {
        },
        methods: {
        },
        components: {
            
        }
    }
</script>

<style>
.child-content{
    border: 1px solid rebeccapurple;
}
</style>