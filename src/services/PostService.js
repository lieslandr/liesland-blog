import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://www.liesland.com/wp-json/wp/v2/',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getPosts(perPage,page) {
    return apiClient.get('/posts?per_page=' + perPage + '&page=' + page)
  },
  getPost(id) {
    return apiClient.get(`/posts/${id}`)
  }
}