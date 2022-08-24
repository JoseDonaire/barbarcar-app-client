import service from './config.services'

const getReviewService = () => {
    return service.get(`/review/driver`)
}

const newReviewService = (idTravel,newReview) => {
    return service.post(`/review/${idTravel}`,newReview)
}

//delete
export{
    newReviewService,
    getReviewService
}