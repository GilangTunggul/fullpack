import { getCookie } from '@/helpers/cookie.js';

const NavigationGuard = function (Router) {

	Router.beforeEach((to, from, next)=> {
		let hasUserToken = getCookie("token_user");
		let hasAdminToken = getCookie("token_admin")
		if (hasUserToken) {
			next({ path: '/home' })
			// handle user
			
		}
		else if (hasAdminToken) {
			next({ path: 'admin/adminhome' })
			// handle admin
			
		}
		else {
			if (to.meta.public){
				next()
			}
			else {
				next("/login")
				// kasih link di halaman login user
				// are you an admin?
				// if so, click here to log in as administrator
			}
		}
	});
}
export default NavigationGuard;