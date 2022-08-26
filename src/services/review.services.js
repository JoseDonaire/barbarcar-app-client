import service from "./config.services";

const getReviewService = (idDriver) => {
  return service.get(`/review/${idDriver}/get`);
};

const newReviewService = (idDriver, newReview) => {
  return service.post(`/review/${idDriver}`, newReview);
};

export { newReviewService, getReviewService };
