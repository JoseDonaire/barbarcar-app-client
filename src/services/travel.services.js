import service from './config.services'

const travelListService = ()=>{
    return service.get(`/travels`)
}

const travelDetailsService = (idTravel)=>{
    return service.get(`/travels/${idTravel}`)
}

const addTravelService = (newTravel)=>{
    return service.post(`/travels/create`,newTravel)
}

const myTravelService = ()=>{
    return  service.get(`/travels/mytravels`)
}

const travelUpdateService = (idTravel,updateTravel)=>{
    return service.patch(`/travels/${idTravel}`,updateTravel)
}
const travelDeleteService = (idTravel)=>{
    return service.delete(`/travels/${idTravel}`)
}


export{
    travelListService,
    travelDetailsService,
    addTravelService,
    myTravelService,
    travelUpdateService,
    travelDeleteService

}