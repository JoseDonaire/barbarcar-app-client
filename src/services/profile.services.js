import service from './config.services'

const profileService = () =>{
    return service.get('/profile')
}



export{
    profileService
}
