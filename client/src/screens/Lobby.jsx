import { useCallback, useState,useEffect } from "react"
import {useSocket} from '../context/SocketProvider'

export default function Lobby() {

  const [email,setEmail] = useState('');
  const [room,setRoom] = useState('');

  const socket = useSocket();

  

  const handleSubmitForm = useCallback((e)=> {
    e.preventDefault();
    
    socket.emit('room:join',{email,room})
  },
  [email,room,socket]
)

const handleJoinRoom = useCallback((data)=>{
   const {email,room} = data;
  console.log(email,room)
},[])

useEffect(()=>{
  socket.on('room:join',handleJoinRoom)
  return ()=>{
    socket.off('room:join',handleJoinRoom);
  }
},[socket])


  return (
    <div>
      <h1>Lobby</h1>

      <form onSubmit={handleSubmitForm}>
        <label htmlFor="email">Email Id</label>
        <input type='email' style={{display:"block"}}
        value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <br></br>
        <label htmlFor="room">Room Number</label>
        <input type='room' style={{display:"block"}}
        value={room} onChange={(e)=>setRoom(e.target.value)}/>
        <br />
        <button >Join</button>
      </form>
    </div>
    
  )
}
