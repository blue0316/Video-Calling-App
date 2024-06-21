import { useState } from "react"


export default function Lobby() {

  const [email,setEmail] = useState('');
  const [room,setRoom] = useState('');


  return (
    <div>
      <h1>Lobby</h1>

      <form>
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
