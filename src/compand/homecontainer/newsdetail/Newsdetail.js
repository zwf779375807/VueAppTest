import {
    Toast
} from 'mint-ui'
import submit from '../../subcompand/Submit.vue'
export default {
    data() {
        return {
            id: this.$route.params.id,
            newsdetail: ''
        }
    },
    methods: {
        getNewDetail() {
            this.$http.get('api/getnew/' + this.id).then(response => {
                if (response.data.status === 0) {
                    this.newsdetail = response.data.message[0]
                } else {
                    Toast('失败')
                }
            }, err => {
                Toast('失败')
            })
        }
    },

    created() {
        this.getNewDetail()
    },
    components: {
        'submit': submit
    }
}