//该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
//引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

//创建并暴露暴露一个路由器
const router =  new VueRouter({
    mode:'hash',
    routes:[
        {
            name:'guanyu',
            path:'/about',
            component:About,
            meta:{isAuth:true,titile:'关于'}
        },
        {
            name:'zhuye',
            path:'/home',
            component:Home,
            meta:{titile:'主页'},
            children:[
                {
                    name:'xinwen',
                    path:'news',
                    component:News,
                    meta:{isAuth:true,titile:'新闻'},
                },
                {
                    name:'xiaoxi',
                    path:'message',
                    component:Message,
                    meta:{isAuth:true,titile:'消息'},
                    children:[
                        {
                            name:'xiangqing',
                            path:'detail',
                            component:Detail,
                            meta:{titile:'详情'},

                            //props的第一种写法，值为对象，该对象中的所有key-value都会以props的形式传给Detail组件
                            // props:{a:1,b:'hello'}

                            //props第二种写法，值为布尔值。若布尔值为真，就会把该路由组件收到的所有params参数，以props的形式传给Detail组件
                            // props:true,

                            //props第三种写法，值为函数
                            props($route){
                                return {id:$route.query.id,title:$route.query.title}
                            }
                        }
                    ]
                }
            ]
        }
    ],
})
export default router