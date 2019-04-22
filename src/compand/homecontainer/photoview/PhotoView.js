import {
    Toast
} from 'mint-ui'

import mui from '../../../lib/js/mui.js'

export default {

    data() {
        return {
            cateGroyList: []
        }
    },
    mounted() {
        mui('.mui-scroll-wrapper').scroll({
            deceleration: 0.0005
        });
    },
    created() {
        this.getAllCategory()
    },

    methods: {
        getAllCategory() {
            this.$http.get('api/getimgcategory')
                .then(result => {
                    if (result.data.status === 0) {
                        result.data.message.unshift({
                            title: "全部",
                            id: 0
                        })
                        this.cateGroyList = result.data.message
                    } else {
                        Toast('请求失败')
                    }
                }, err => {
                    Toast('请求失败')
                })
        }
    },
}