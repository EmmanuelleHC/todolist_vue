import Home from '../views/Home'
import About from '../views/About'
import Todolist from '../views/todolist'

import Create from '../views/posts/Create'


export default{


	mode:'history',
	routes:[
		{

			path:'/',
			name:'home',
			component:Home
		},
		{

			path:'/about',
			name:'pages.about',
			component:About
		},
		{

			path:'/todolist',
			name:'pages.todolist',
			component:Todolist
		},
		{

			path:'/posts/create',
			name:'pages.create',
			component:Create
		}



	]
}