import Submit from '../../subcompand/Submit.vue'
import {
    Toast
} from 'mint-ui'
export default {
    data() {
        return {
            id: this.$route.params.id,
            photoViewInfo: '',
            photoThumbs: [],
        }
    },

    created() {
        this.getPhotoViewDetails();
        this.getThumbs();
    },

    methods: {
        getPhotoViewDetails() {
            this.$http.get('api/getimageInfo/' + this.id)
                .then(result => {
                        if (result.data.status === 0) {
                            this.photoViewInfo = result.data.message[0]
                        } else {
                            Toast('失败')
                        }
                    },
                    err => {
                        Toast('失败')
                    })
        },

        getThumbs() {
            this.$http.get('api/getthumimages/' + this.id)
                .then(result => {
                    if (result.data.status === 0) {
                        result.data.message.forEach(element => {
                            element.w = 600;
                            element.h = 400;
                            element.msrc=element.src;
                        });
                        this.photoThumbs = result.data.message;
                    } else {
                        Toast('失败')
                    }
                }, err => {
                    Toast('失败')
                })
        }
    },

    components: {
        'submit': Submit
    }
}