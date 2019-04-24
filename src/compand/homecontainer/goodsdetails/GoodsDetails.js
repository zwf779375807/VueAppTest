import {
    Toast
} from 'mint-ui'
import mui from '../../../lib/js/mui.min.js'

export default {
    data() {
        return {
            id: this.$route.params.id,
            lunbos: [],
            goodscontent: '',
            goodsCount: 1,
        }
    },

    mounted() {
        mui("mui-numbox").numbox()
    },

    created() {
        this.getLunbo();
        this.getGoodsInf();
    },

    methods: {
        getLunbo() {
            this.$http.get('api/getthumimages/' + this.id)
                .then(result => {
                        if (result.body.status === 0) {
                            this.lunbos = result.body.message
                        } else {
                            Toast('失败')
                        }
                    },
                    err => {
                        Toast('失败')
                    })
        },
        getGoodsInf() {
            this.$http.get("api/goods/getinfo/" + this.id)
                .then(result => {
                    if (result.body.status === 0) {
                        this.goodscontent = result.body.message[0]
                    } else {
                        Toast('失败')
                    }
                }, err => {
                    Toast('失败')
                })
        },
        gointroduce() {
            let currentId = this.id;
            this.$router.push({
                name: "goodsdesc",
                params: {
                    currentId
                }
            })
        },
        gocommit() {
            let currentId = this.id;
            this.$router.push({
                name: "goodscomment",
                params: {
                    currentId
                }
            })
        },

        addcar() {
            var goodsInfo = {
                id: this.id,
                count: this.goodsCount,
                price: this.goodscontent.sell_price,
                selectedStatus: true,
            }
            this.$store.commit('addtocar', goodsInfo)
        }
    },
}