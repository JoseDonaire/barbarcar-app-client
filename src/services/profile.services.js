import service from "./config.services";

const profileService = () => {
  return service.get("/profile");
};

const profileServiceDriver = (idDriver) => {
  return service.get(`/profile/${idDriver}`);
};

export { profileService, profileServiceDriver };
