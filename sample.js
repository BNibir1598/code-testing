//////// Start of simple API call
import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  vus: 10,
  duration: '30s',
};

export default function () {
  const baseurl = "https://reqres.in/api";
  const endpoint = "/users";
  const res = http.get("${baseurl}${endpoint}");
  sleep(1);
console.log(res);
}
////////////////end of API Call
