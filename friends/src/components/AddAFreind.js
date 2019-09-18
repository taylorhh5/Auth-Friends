import React, {useEffect, useState} from 'react'


const AddFriend = props => {
let [newFriend, setNewFriend] = useState({name:'', age:'', email:''});



    let onSubmit =e=>{
        e.preventDefault()
props.addFriend();

    }

    let  onChange = e =>{

        let {name,value} =e.target
        setNewFriend({
            ...newFriend,
                [name]:value

            
        })
        console.log(newFriend)
    }

    return(
        <form onSubmit={onSubmit} name="AddFriend">
        <p>Name</p>
        <input onChange={onChange} name="name" type="text" placeholder="name"/>
<p>Age</p>
        <input onChange={onChange} name="age" type="text" placeholder="Age"/>
<p>Email</p>
        <input onChange={onChange} name="email" type="text" placeholder="Email"/>

        
        
        <input type ="submit"/>
            
        </form>
    )
}



export default AddFriend;