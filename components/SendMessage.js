import React, { useState } from 'react'
import { useMoralis } from 'react-moralis'

function SendMessage({ endOfMessagesRef }) {
    const { user, Moralis } = useMoralis()
    const [message, setMessage ] = useState("")

    const sendMessage = (e) => {
        e.preventDefault();
        if(!message) return;
        const Messages = Moralis.Object.extend('Messages');
        const messages = new Messages();
        messages.save({
            message: message,
            username: user.getUsername(),
            ethAddress: user.get('ethAddress')
        }).then(
            (message) => {
            
            }, 
            (error) => {
                console.log(error.message)
            }
        );
        endOfMessagesRef.current.scrollIntoView({ behavior: 'smooth'});
        setMessage('')
    }
    return (
        <form className='flex fixed w-11/12 bottom-10 opacity-80 bg-black px-6 py-4 max-w-2xl shadow-2xl rounded-full border-4 border-blue-400'>
            <input 
                type="text" 
                className='flex-grow pr-5 outline-none bg-transparent text-white placeholder-gray-500'
                placeholder={`Enter a message ${user.getUsername()}...`}
                value={message}
                onChange={e => setMessage(e.target.value)}
            />
            <button type='subtim' onClick={sendMessage} className='font-bold text-pink-500'>Send</button>
        </form>
    )
}

export default SendMessage
