import {
    Toast
} from 'mint-ui'

export default {
    data() {
        return {
            lunbo: []
        }
    },
    methods: {
        getLunboInfo() {
            this.$http.get('http://www.liulongbin.top:3005/api/getlunbo').then(response => {
                if (response.body.status === 0) {
                    this.lunbo = response.body.message
                } else {
                    Toast('失败')
                }
            }, response => {
                Toast('失败')
            })
        }
    },
    created() {
        this.getLunboInfo()
    },
}