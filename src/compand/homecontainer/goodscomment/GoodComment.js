import submit from '../../subcompand/Submit.vue'
export default{
    data() {
        return {
            id:this.$route.params.id,
        }
    },
    methods: {
        
    },
    created() {
        
    },
    components: {
        'submit': submit
    }
}