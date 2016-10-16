/**
 * Created by meng on 2016/10/9.
 */
import axios from 'axios';

export function login(data) {
  return dispatch => {
    return axios.post('/api/auth',data);
  }
}