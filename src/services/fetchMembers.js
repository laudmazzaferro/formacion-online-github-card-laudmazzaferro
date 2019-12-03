const API = 'https://api.github.com/orgs/Adalab/members?per_page=140'

const fetchMembers= ()=>{
  return fetch(API).then(response => response.json())
}

export { fetchMembers }