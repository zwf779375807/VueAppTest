export default {
    data() {
        return {
            id: this.$route.params.id,
            desc:{}
        }
    },

    created() {
        this.getgoodsdesc();
    },

    methods: {
        getgoodsdesc() {
            this.$http.get("api/goods/getdesc/"+this.id)
                .then(result => {
                    if (result.data.status===0) {
                        this.desc = result.data.message[0]
                    }
                }, err => {

                })
        }
    },
}