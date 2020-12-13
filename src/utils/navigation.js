
const getNavigation = (userId) => { //тази функция ще връща Link-овете


    const links = [
        {
            title: 'Publications',
            link: '/'
        },
        {
            title: 'Share your thoughts',
            link: '/share'
        },
        {
            title: 'Profile',
            link: `/profile/${userId}`
        },
        {
            title: 'Register',
            link: '/register'
        },
        {
            title: 'Login',
            link: '/login'
        }
    ]
    return links
}
export default getNavigation