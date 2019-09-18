import React, {useEffect, useState} from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth.js'
import AddFriend from './AddAFreind.js'
import Mainform from './AddFriend.js'
const FriendsList = () => {
    const [friends, setFriends] = useState ([]);


    
              axiosWithAuth()
              .get("/friends")
              
                .then(res =>  { setFriends (res.data);
                             })
                .catch (error => console.log(error.response))
            

            
    return (


        <div>
            <h1>Friends</h1>
        <AddFriend/> 
             {friends.map(person=>(
               <div>
               <h1>Name: {person.name}</h1>
               <h1>Age: {person.age}</h1>
             <h1>Email: {person.email}</h1>
             
                
                       </div>
         ))}
        </div>
    )
}


export default FriendsList;
