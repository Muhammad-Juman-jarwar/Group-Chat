import { useEffect, useRef, useState } from "react"
import Messages from "./Messages"
import { useDataBase } from "../Context/FireBaseContext"
import { useNavigate } from "react-router-dom"

const ChatRoom = () => {
    const imgRef = useRef()
    const [preview, setPreview] = useState(false)
    const [confirm, setConfirm] = useState(false)
    const [image, setImage] = useState(null)
    const [email, setemail] = useState(null)
    const [ID, setID] = useState(null)
    const [selectedFile, setSelectedFile] = useState(null);
    const [message, setMessage] = useState('')
    const navigate = useNavigate()
    const { user, getUserLoggedOut, sendMessage, messageFromDataBase, uploadImg, deleteMessage} = useDataBase()
    useEffect(() => {
        !user && navigate('/login')
    }, [])
    const setImagePreviewer = (imgPath, id, email) => {
        setID(id)
        setemail(email)
        setImage(imgPath)
        setPreview(true)
    }
    const resetImagePreviewer = () => {
        setID(null)
        setemail(null)
        setImage(null)
        setPreview(false)
    }
    const getSignOut = () => {
        getUserLoggedOut()
    }
    const sending = (event) => {
        event.preventDefault()
        if (selectedFile && message.length === 0) {
            uploadImg(selectedFile)
            setSelectedFile(null)
        } else {
            if (message.trim().length) {
                sendMessage(message)
                setMessage('')
            }
        }
    }
    const uploadImgRef = () => {
        imgRef.current.click()
    }
    const handleChange = (event) => {
        const image = event.target.files[0]
        if (image)
            setSelectedFile(image)
    }
    const deleteImg = () => {
        if(email === user.email) {
            deleteMessage(ID)
            setConfirm(false)
            setPreview(false)
        }
    }
    return (
        <>
            <div className={`absolute top-0 right-0 w-full h-full bg-black z-10 flex items-center transition-all transform ${preview ? 'scale-100' : 'scale-0'}`}>
                <div className="absolute top-3 right-3 text-gray-300 bg-black px-2.5 py-1 rounded-full">
                    {user && (user.email === email) && <i className="fa-solid fa-trash mr-5 cursor-pointer" onClick={() => {setConfirm(true)}}></i>}
                    <i className="fa-solid fa-xmark cursor-pointer" onClick={resetImagePreviewer}></i>
                </div>
                <img className="" src={image} loading="lazy"/>
            </div>
            <div className={`absolute top-0 right-0 w-full h-full bg-[#292b3678] z-10 flex items-center justify-center transition-all transform ${confirm ? 'scale-100' : 'scale-0'}`}>
                <div className="h-28 w-11/12 bg-white text-black rounded-xl p-4 flex flex-col justify-between">
                    <p>Are you sure. You want to delete this image?</p>
                    <div className="flex justify-end gap-10 font-semibold">
                        <p className="cursor-pointer" onClick={() => {setConfirm(false)}}>Cancle</p>
                        <p className="cursor-pointer" onClick={deleteImg}>Delete</p>
                    </div>
                </div>
            </div>
            <div className="h-full sm:w-chat-room w-screen sm:shadow-gray-900 sm:shadow-xl flex flex-col relative">
                <div className="w-full h-header-footer-height shadow-gray-900 shadow bg-[#292b36]">
                    <div className="relative w-full h-full flex items-center justify-between px-4">
                        <h1 className="text-xl">Chat Room</h1>
                        <button onClick={getSignOut} className="bg-[#4bb4f8] text-sm px-3 py-1.5 rounded transition-all transform active:scale-95">sign out</button>
                    </div>
                </div>
                <div className="w-full h-message-area-height px-4 pb-1 pt-3 flex flex-col overflow-y-auto">
                    {
                        messageFromDataBase.length > 0 ? messageFromDataBase.map((item, index) => <Messages key={index} message={item} setImagePreviewer={setImagePreviewer} />) :
                            <div>
                                <p className="text-sm opacity-60 text-center">start chatting</p>
                                <p className="text-xs opacity-60 text-center px-5">your message will be listed on the top of all messages</p>
                            </div>
                    }
                </div>
                <div className="w-full h-header-footer-height px-1.5 flex items-center">
                    <div className="w-full h-4/5 bg-gray-600 rounded-full flex items-center justify-between px-3">
                        <div className="grow flex items-center gap-2.5">
                            <div className="bg-[#4bb4f8] p-2.5 rounded-full flex items-center justify-center cursor-pointer" onClick={uploadImgRef}>
                                <i className="fa-solid fa-camera"></i>
                            </div>
                            <input className="hidden" ref={imgRef} type="file" accept="image/*" onChange={handleChange} />
                            {selectedFile ?
                                <div className="relative">
                                    <i className="fa-solid fa-circle-xmark text-gray-200 absolute -top-2.5 -right-2.5 cursor-pointer" onClick={() => { setSelectedFile(null) }}></i>
                                    <img className="h-9 rounded" src={URL.createObjectURL(selectedFile)} alt="selected-image" />
                                </div> : <textarea className="resize-none w-full bg-inherit py-1 outline-none text-white" placeholder="type your messages..." value={message} rows={1} onChange={(event) => { setMessage(event.target.value) }} />
                            }
                        </div>
                        <div className="flex items-center justify-evenly">
                            <button onClick={sending} className="bg-[#4bb4f8] rounded-full p-2.5 flex items-center justify-center transition-all transform active:scale-95"><i className="fa-solid fa-paper-plane"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChatRoom