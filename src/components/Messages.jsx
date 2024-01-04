import { useEffect, useRef } from "react"
import { useDataBase } from "../Context/FireBaseContext"

const Messages = (props) => {
    const {deleteMessage, user} = useDataBase()
    const {id, email, message, type } = props.message
    const scroller = useRef()
    const scrollDown = () => {
        scroller.current.scrollIntoView({ behavior: "smooth" });
    }
    const deleteMyMessage = (email) => {
        if(email === user.email)
            deleteMessage(id)
    }
    useEffect(() => {
        scrollDown()
    }, [])
    return (
        <>  
            <div className={`flex ${user && (user.email === email)? 'justify-end':'justify-start'} mt-1.5`}>
                <div className={`flex flex-col ${user && (user.email === email)? 'items-end':'items-start'}`}>
                    {
                        type === 'message' ? <>
                            <p className="text-xs opacity-60">{email}</p>
                            <div onDoubleClick={() => {deleteMyMessage(email)}} className={`${user && (user.email === email)? 'bg-[#4bb4f8]':'bg-gray-600'} max-w-xs select-none py-1 cursor-pointer px-2.5 mt-2 rounded-2xl`}>{message}</div>
                        </> : <>
                            <p className="text-xs opacity-60">{email}</p>
                            <img className="w-36 rounded-2xl mt-1 cursor-pointer" src={message} loading="lazy" alt={`${email}-image`} onClick={()=>{props.setImagePreviewer(message, id, email)}}/>
                        </>
                    }
                </div>
                <div ref={scroller}></div>
            </div>
        </>
    )
}

export default Messages