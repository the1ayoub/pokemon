export const getIdFromURL = (url = "") => {
  return url.split("/").reverse()[1];
};
