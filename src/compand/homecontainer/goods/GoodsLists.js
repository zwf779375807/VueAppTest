import {
    Toast
} from 'mint-ui'
export default {
    data() {
        return {
            number: 1,
            goods: [],
        }
    },

    created() {
        this.getGoodsList();
    },

    methods: {
        getGoodsList() {
            this.$http.get("api/getgoods?pageindex=" + this.number)
                .then(result => {
                    if (result.data.status === 0) {
                        this.goods = this.goods.concat(result.data.message)

                    } else {
                        Toast('失败了')
                    }
                }, err => {
                    Toast('失败了')
                })
        },
        loadmore() {
            this.number++;
            this.getGoodsList();
        }
    },
}