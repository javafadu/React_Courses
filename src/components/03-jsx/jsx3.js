import React from 'react'

const Jsx3 = () => {
    const isAdmin = false;

  return (
    <>
    {isAdmin ? (
        <>
        <h2>Admin Menu</h2>
        <ul>
            <li>Create User</li>
            <li>Update User</li>
            <li>Delete User</li>
        </ul>
        </>
    ): (
        <>
        <h2>User Menu</h2>
        <ul>
            <li>Login
            </li>
            <li>Register</li>
        </ul>
        </>
    )}
    </>

  )
}

export default Jsx3