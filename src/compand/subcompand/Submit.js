import {
    Toast
} from 'mint-ui'
export default {
    data() {
        return {
            pageindex: 1,
            comments: [],
            msg: '',
        }
    },

    created() {
        this.getcomments()
    },

    methods: {
        getcomments() {
            this.$http.get("api/getcomments/" + this.id + "?pageindex=" + this.pageindex).then(response => {
                if (response.data.status == 0) {
                    this.comments = this.comments.concat(response.data.message)
                } else {
                    Toast('失败')
                }
            }, err => {
                Toast('失败')
            })
        },
        loadmore() {
            this.pageindex++;
            this.getcomments()
        },
        submitcomment() {
            if (this.msg.trim().length == 0) {
                return Toast("评论内容不能为空!")
            }
            this.$http.post('api/postcomment/' + this.id, {
                content: this.msg
            }).then(response => {
                if (response.data.status === 0) {
                    this.comments.unshift({
                        user_name: '匿名用户',
                        add_time: new Date(),
                        content: this.msg
                    })
                } else {
                    Toast('失败')
                }
            }, err => {
                Toast('失败')
            })
        }
    },
    props: ['id']
}