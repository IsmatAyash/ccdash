import http from "./httpService";

const apiEndpoint = "/aacc";
const qualityEndpoint = "/quality";

function trafficUrl(id) {
  return `${apiEndpoint}/${id}`;
}

export function getTraffics() {
  return http.get(apiEndpoint);
}

export function getTraffic(id) {
  return http.get(trafficUrl(id));
}

export function getQualityGrades() {
  return http.get(qualityEndpoint);
}
