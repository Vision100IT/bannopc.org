import fetch from 'isomorphic-fetch';
import ky from 'ky-universal';

const DRUPAL_URL = "https://api.bannopc.org/api/views/";
const DRUPAL_SEARCH_SERMONS = DRUPAL_URL+"all_sermons_api?display_id=services_1&filters";
const DRUPAL_PAGE_API = "https://api.bannopc.org/api/views/basic_react_page_api?display_id=services_1";

//Example suffix: all_sermons_api?filters[preacher]=keith&filters[title]=reality

//API uses Services and Services views on the drupal 7 instance

export function getFromDrupalAPI(url, callback){
  if(url.includes('?'))
  {
    url += '&display_id=services_1';
  }
  else{
    url += '?display_id=services_1'
  }
  fetch(DRUPAL_URL+url)
  .then(resp => resp.json())
  .then(function(data) {
      callback(data);
    })
  .catch(function(error){
    console.log(error);
  })
}

export function searchDrupalSermons(query, type, callback){
  fetch(DRUPAL_SEARCH_SERMONS+'['+type+']='+query)
  .then(resp => resp.json())
  .then(function(data) {
      callback(data);
    })
  .catch(function(error){
    console.log(error);
  })
}

export function getPageContent(slug, callback) {
  fetch(DRUPAL_PAGE_API+ "&slug=" + slug)
    .then(resp => resp.json())
    .then(function (data) {
      callback(data);
    })
    .catch(function (error) {
      console.log(error);
    })
}

export function getAllPages(callback) {
  fetch(DRUPAL_PAGE_API)
    .then(resp => resp.json())
    .then(function (data) {
      callback(data);
    })
    .catch(function (error) {
      console.log(error);
    })
}

export async function fetchDrupalPages() {
  const result = await ky(DRUPAL_PAGE_API, {
    mode: 'cors',
    credentials: 'omit'
  }).json();
  return result;
}