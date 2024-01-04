import { useEffect, useState } from "react"
import { useDataBase } from "../Context/FireBaseContext"
import loader from '../assets/loader.gif'
import { Link, useNavigate } from "react-router-dom"

const SignUp = () => {
    const navigate = useNavigate()
    const {userCredentials, setUserCredentials, getUserSignUP, message, loading, setMessage, user} = useDataBase()
    const [isRightEmail, setIsRightEmail] = useState(true)
    const [isRightPassword, setIsRightPassword] = useState(true)
    const [showtPassword, setShowtPassword] = useState(false)
    const [passwordType, setPasswordType] = useState('password')
    const getUserData = (event) => {
        const {name} = event.target
        if(name === 'email') {
        setUserCredentials({...userCredentials, [event.target.name]: event.target.value})
            if(userCredentials.email.includes('@') && userCredentials.email.includes('.co'))
                setIsRightEmail(true)
            else 
                setIsRightEmail(false)
        } else {
            setUserCredentials({...userCredentials, [event.target.name]: event.target.value})
            if(userCredentials.password.length > 5)
            setIsRightPassword(true)
            else 
            setIsRightPassword(false)
        }
    }
    const getSignIn = (event) => {
        event.preventDefault()
        getUserSignUP()
    }
    const changePasswordState = () => {
        if(showtPassword) {
            setShowtPassword(false)
            setPasswordType('password')
        } else {
            setShowtPassword(true)
            setPasswordType('text')
        }
    }
    useEffect(() => {
        if(user) {
          navigate('/')
        }
      }, [])
    return (
        <div className="sm:h-[40rem] sm:w-functional-screens sm:rounded-lg w-screen h-full sm:shadow-gray-900 shadow-xl flex flex-col justify-evenly">
            <div className="w-full text-center">
                <h1 className="text-3xl">Sign Up</h1>
                <p className="text-sm pt-14">To <span className="font-semibold">Chat Room</span></p>
                <p className=" text-sm pb-10 italic">where gossips remain safe</p>
            </div>
            <form className="w-full flex flex-col gap-10 px-8" onSubmit={getSignIn}>
                <div className="relative">
                    <input type="email" name="email" placeholder='Email' className="peer w-full bg-inherit placeholder-transparent outline-none p-1" required onChange={getUserData} />
                    <label className="absolute left-1 -top-5 transition-all duration-300 peer-focus:-top-5 peer-placeholder-shown:top-0 text-lg">Email</label> 
                    <div className={`h-0.5 w-full bg-[#fff] rounded-lg ${isRightEmail? 'bg-[#fff]': 'bg-pink-600'}`}></div>
                    <p className={`absolute -bottom-5 text-xs text-pink-700 ${isRightEmail? 'invisible': 'visible'}`}>please enter correct email address</p>
                </div>
                <div className="relative">
                    <div className="absolute top-1.5 right-2" onClick={changePasswordState}>
                        <i className={`${showtPassword? 'fa-regular fa-eye-slash':'fa-regular fa-eye'} cursor-pointer`}></i>
                    </div>
                    <input type={passwordType} name="password" placeholder='Password' className="peer w-full bg-inherit placeholder-transparent outline-none p-1" required onChange={getUserData} />
                    <label className="absolute left-1 -top-5 transition-all duration-300 peer-focus:-top-5 peer-placeholder-shown:top-0 text-lg">Password</label>
                    <div className={`h-0.5 w-full rounded-lg ${isRightPassword? 'bg-[#fff]': 'bg-pink-600'}`}></div>
                    <p className={`absolute -bottom-5 text-xs text-pink-700 ${isRightPassword? 'invisible': 'visible'}`}>password must be atleast 8 characters</p>
                </div>
                <div className="relative">
                    <button type="submit" disabled={loading} className={`bg-[#4bb4f8] w-full text-lg p-2 rounded transition-all tranform ${loading? null: 'active:scale-95'} ${loading? 'opacity-80': 'opacity-100'}`}>{loading ? <img src={loader} alt="loading..." className="w-9 mx-auto"/>: 'sign up'}</button>
                    <p className={`text-sm pt-2 ${message.flag === 'red'? 'text-pink-700': 'text-green-700'}`}>{message.message}</p>
                </div>
            </form>
            <p className="text-sm text-center">already have account? <Link to={'/login'} onClick={() => {setMessage({flag: '', message: ''})}} className="text-[#4bb4f8] font-semibold cursor-pointer">Login</Link></p>
        </div>
    )
}

export default SignUp