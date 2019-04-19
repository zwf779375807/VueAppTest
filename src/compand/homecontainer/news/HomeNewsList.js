import {Toast} from 'mint-ui'
export default {
    data() {
        return {
            newsInfo:[]
        }
    },
    methods: {
        getNews() {
            this.$http.get('api/getnewslist')
                .then(response => {
                    if (response.data.status===0) {
                        this.newsInfo=response.data.message
                    }else {
                        Toast('失败了')
                    }
                }, error => {
                    Toast('失败了')
                })
        }
    },
    created() {
        this.getNews()
    },
}