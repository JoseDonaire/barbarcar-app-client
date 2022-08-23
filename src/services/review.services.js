import service from './config.services'

const getReviewService = (reviewId) => {
    return service.get(`/review/${reviewId}`)
}

const newReviewService = (reviewId) => {
    return service.post(`/review/${reviewId}`)
}

//delete
export{
    newReviewService,
    getReviewService
}