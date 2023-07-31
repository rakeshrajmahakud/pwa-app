import React, { useEffect,useState } from 'react'
import { Table } from 'react-bootstrap'

function Users() {
  const [data,setData] = useState([]);
  const [mode,setMode] = useState("🟢")
  useEffect(()=>{
    let url = "https://jsonplaceholder.typicode.com/users"
    fetch(url).then((res)=> res.json()).then((result)=> {
      setData(result)
      localStorage.setItem("users",JSON.stringify(result))
    })
    .catch((err)=>{
      setMode("🔴")
      let collection = localStorage.getItem("users")
      setData(JSON.parse(collection))
    })
  },[])
  return (
    <>
      <p className='alert alert-warning'>Users page  status {mode}</p>
      <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>UserName</th>
              <th>email</th>
            </tr>
          </thead>
          <tbody>
            {data.map((el,I)=>{
                return <tr key={el.id}>
                <td>{el.id}</td>
                <td>{el.name}</td>
                <td>{el.username}</td>
                <td>{el.email}</td>
              </tr>
            })}
          </tbody>
      </Table>
    </>

  )
}

export default Users