import Cookie from 'js-cookie'

export default function ({store, route, redirect, req}) {
  // If the user is not authenticated
  const routePath = route.path
  const extraPath = ['/login','/']
  if ((!store.state.token) && extraPath.indexOf(routePath) === -1) {
    return redirect('/login')
  }

}
