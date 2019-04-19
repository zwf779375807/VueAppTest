
import {Toast} from 'mint-ui'

import mui from '../../../lib/js/mui.js'



export default {
    mounted() {
        mui('.mui-scroll-wrapper').scroll({
            deceleration: 0.0005 
        });  
    },
}