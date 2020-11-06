import http from './httpService';

const apiEndpoint = '/aacc';

function trafficUrl(id) {
  return `${apiEndpoint}/${id}`;
}

export function getTraffics() {
  return http.get(apiEndpoint);
}

export function getTraffic(id) {
  return http.get(trafficUrl(id));
}
