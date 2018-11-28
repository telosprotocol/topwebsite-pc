import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
// import main from 'components/main/main'
import pdf from 'components/pdf/pdf'
import faq from '@/pages/faq/Faq'
import policy from '@/pages/policy/Policy'
import event from '@/pages/events/Event'
import ambassador from '@/pages/ambassador/index'
// import faq from 'components/faq/faq'
import Redeem from 'components/redeem/Redeem'
import submitemail from 'components/submitemail/SubmitEmail'
import whitepdf from 'components/pdf/whitepdf'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'Index',
            component: Index
        },
        {
            path: '/pdf',
            name: 'pdf',
            component: pdf
        },
        {
            path: '/faq',
            name: 'faq',
            component: faq
        },
        {
            path: '/policy',
            name: 'policy',
            component: policy
        },
        {
            path: '/event',
            name: 'event',
            component: event
        },
        {
            path: '/redeem',
            name: 'Redeem',
            component: Redeem
        },
        {
            path: '/submitemail',
            name: 'SubmitEmail',
            component: submitemail
        },
        {
            path: '/whitepaper',
            name: 'whitepdf',
            component: whitepdf
        },
        {
            path: '/ambassador',
            name: 'ambassador',
            component: ambassador
        }
    ]
})