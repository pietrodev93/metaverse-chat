import Image from 'next/image'
import React from 'react'
import { useMoralis } from 'react-moralis'

function Avatar({ username, logoutOnPress }) {
    const { user, logout} = useMoralis()

    return <Image 
        className="rounded-full cursor-pointer bg-neutral-500 hover:opacity-75"
        src={`https://avatars.dicebear.com/api/croodles/${username ||  user.get("username")}.svg`}
        layout="fill"
        onClick={() => logout('ok')}
    />
}

export default Avatar
