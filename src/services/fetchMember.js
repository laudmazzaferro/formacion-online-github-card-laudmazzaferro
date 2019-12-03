const fetchMember= (API)=>{
    return fetch(API).then(response => response.json())
}
  
  export { fetchMember }