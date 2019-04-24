export default {
    data() {
        return {
            goods:[]
        }
    },

    created() {
        this.getShoppingCarList()
    },

    methods: {
        getShoppingCarList() {
            var ids = [];
            this.$store.state.car.forEach(element => {
                ids.push(element.id)
            });
            if (ids.length <= 0) {
                return
            }
            this.$http.get('api/goods/getshopcarlist/' + ids.join(","))
                .then(result => {
                    if (result.data.status===0) {
                       this.goods = result.data.message 
                    }
                }, err => {

                })
        }
    },
}