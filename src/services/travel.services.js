import service from './config.services'



const addTravelService = (newTravel)=>{
    return service.post(`/travels/create`,newTravel)
}

const myTravelService = (idTravel)=>{
    return  service.get(`/travels/${idTravel}`)
}

const travelUpdateService = (idTravel,updateTravel)=>{
    return service.patch(`/travels/${idTravel}`,updateTravel)
}
const travelDeleteService = (idTravel)=>{
    return service.delete(`/travels/${idTravel}`)
}


export{
    addTravelService,
    myTravelService,
    travelUpdateService,
    travelDeleteService

}