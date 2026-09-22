import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = { vus: 20, duration: '1m' };

export default function () {
  const res = http.post('http://localhost:3000/cart/add');
  check(res, { '200 status': (r) => r.status === 200 });
  sleep(1);
}