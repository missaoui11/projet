import React, { useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useDispatch, useSelector } from 'react-redux';
import { getuser } from '../redux/Action/Action';
function Avocat() {
  const dispatch =useDispatch()
  useEffect(()=>{
dispatch(getuser())
  },[dispatch])
  const {users} =useSelector((state)=>state.Reducer)
  console.log(users)
  return (
    <div className='cards'>
      {users.map((e)=><Card style={{ width: '18rem' , margin: "20px" ,border: "5px solid white", backgroundColor: "rgb(48, 4, 95)" , borderRadius: "20px",color:"white"}}>
      <Card.Img variant="top" style={{margin: "15px 40px" ,width: "200px" ,height: "200px" , border: '5px solid white' , borderRadius: "360px"}} src={e.image} />
      <Card.Body>
      <Card.Title>{e.name} {e.lastname}</Card.Title>
        <Card.Text>
          {e.phone}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{e.adress}</ListGroup.Item>
        <ListGroup.Item>{e.experience}</ListGroup.Item>
      </ListGroup>
     
    </Card>
)}
      
    

    </div>
  )
}

export default Avocat
  