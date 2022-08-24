import service from './config.services'

const travelListService = ()=>{
    return service.get(`/travels`)
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
    addTravelService,
    myTravelService,
    travelUpdateService,
    travelDeleteService

}