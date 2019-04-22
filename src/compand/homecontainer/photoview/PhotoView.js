import {
    Toast
} from 'mint-ui'
import mui from '../../../lib/js/mui.js'
export default {
    data() {
        return {
            cateGroyList: [],
            photoList: [],
        }
    },
    mounted() {
        mui('.mui-scroll-wrapper').scroll({
            deceleration: 0.0005
        });
    },
    created() {
        this.getAllCategory()
        this.getPhotoInfos(0)
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
        },

        getPhotoInfos(cateid) {
            this.$http.get('api/getimages/' + cateid)
                .then(result => {
                        if (result.data.status == 0) {
                            this.photoList = result.data.message
                        } else {
                            Toast('请求失败')
                        }
                    },
                    err => {
                        Toast('请求失败')
                    })
        }
    }
}