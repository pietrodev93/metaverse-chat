import React from 'react'
import Image from 'next/image'
import { useMoralis } from 'react-moralis'

function Login() {
    const { authenticate } = useMoralis()
    return (
        <div className="bg-black relative text-white">
            <div className="flex flex-col absolute z-50 h-4/6 items-center w-full justify-center space-y-4">
                <Image 
                    className="object-contain"
                    src="https://1000logos.net/wp-content/uploads/2021/10/logo-Meta.png"
                    height={200}
                    width={200}
                />
                <button onClick={() => authenticate()} className="bg-yellow-500 rounded-lg p-5 font-bold animate-pulse">Login to the METAVERSE</button>
            </div>
            <div className="w-full h-screen">
                <Image 
                    src="https://webfoundation.org/docs/2021/12/Metaverse.png"
                    layout="fill"
                    objectFit="cover"
                />
            </div>
        </div>
    )
}

export default Login
