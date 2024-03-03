import React from 'react'
import { useState } from 'react'

const UserHooks = () => {
 const [user, setUser] = useState({})

 return { user, setUser}

}

export default UserHooks
