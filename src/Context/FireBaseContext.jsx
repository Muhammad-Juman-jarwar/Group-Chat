import { createContext, useContext, useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app'
import { getAuth, createUserWithEmailAndPassword, fetchSignInMethodsForEmail, signInWithEmailAndPassword, signOut,  } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth';
import {getDatabase, onValue, push, ref, remove} from 'firebase/database'
import toast from 'react-hot-toast';
import { getStorage, ref as storeRef, uploadBytes, getDownloadURL } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCRQqjxl1EZTpMN-bx2_1rINcePZeCNGCo",
    authDomain: "chat-room-ac113.firebaseapp.com",
    datatbaseURL: 'https://chat-room-ac113-default-rtdb.firebaseio.com/',
    projectId: "chat-room-ac113",
    storageBucket: "chat-room-ac113.appspot.com",
    messagingSenderId: "71734616025",
    appId: "1:71734616025:web:ba05da9bedc52039fd03c8",
  };
  

const dataBaseContext = createContext()
const fireBaseApp = initializeApp(firebaseConfig)
const imageStorage = getStorage(fireBaseApp)
const dataBase = getDatabase(fireBaseApp)
const dbRef = ref(dataBase, 'messages')
const fireBaseAuth = getAuth(fireBaseApp)
export const useDataBase = () => { return useContext(dataBaseContext) } 


const FireBaseContextProvider = ({children}) => {
    const [user] = useAuthState(fireBaseAuth);
    const [messageFromDataBase, setmessageFromDataBase] = useState([])
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState({flag: '', message: ''})
    const [userCredentials, setUserCredentials] = useState({email: '', password: ''})
    const getUserSignUP = () => {
        setLoading(true)
        fetchSignInMethodsForEmail(fireBaseAuth, userCredentials.email) 
        .then(isEmailExit => {
            if(isEmailExit.length > 0) {
                setMessage({flag: 'red', message: 'Email is already registered go to Login'})
                setLoading(false)
            } else {
                setLoading(true)
                createUserWithEmailAndPassword(fireBaseAuth,userCredentials.email, userCredentials.password)
                .then(() => {
                    setMessage({flag: 'green', message: 'Email is registered go to Login'})
                    setLoading(false)
                })
                .catch((error) => {
                    console.log(error.message)
                    setLoading(false)
                })
            }
        })
        setUserCredentials({email: '', password: ''})
        setTimeout(() => {
            setMessage({flag: '', message: ''})
        }, 1000);
    }
    const getUserLogin = () => {
        setLoading(true)
        fetchSignInMethodsForEmail(fireBaseAuth, userCredentials.email) 
        .then(isEmailExit => {
            if(isEmailExit.length > 0) {
                signInWithEmailAndPassword(fireBaseAuth, userCredentials.email, userCredentials.password)
                .then((userCredential) => {
                localStorage.setItem('token', userCredential.user.accessToken)
                setLoading(false)
                setMessage({flag: 'green', message: 'user has logged in successfully'})
          })
          .catch((error) => {
            console.log(error)
            setMessage({flag: 'red', message: error.message})
            setLoading(false)
          })
            } else {
                setMessage({flag: 'red', message: 'Email is not registered go to Sign Up.'})
                setLoading(false)
            }
        })
        setUserCredentials({email: '', password: ''})
        setTimeout(() => {
            setMessage({flag: '', message: ''})
        }, 5000);
    }
    const getUserLoggedOut = () => {
        signOut(fireBaseAuth)
    }
    const sendMessage = async (message) => {
        try {
            const sendingMsg = {
                message: message.trim(),
                email: user.email,
                type: 'message'
            }
            push(dbRef, sendingMsg)
        } catch (e) {
            console.error(e.message)
        }
        showNotification(`message is sent.`)
    }
    const deleteMessage = async (id) => {
        const entryRef = ref(dataBase, `messages/${id}`);
        await remove(entryRef)
        showNotification(`message is deleted.`)
    }
    const showNotification = (msg) => {
        toast(msg, {
            ariaProps: {
              role: 'status',
              'aria-live': 'polite',
            }})
      };
    const uploadImg = (image) => {
        try {
            const uniqueName = `${Date.now()}_${image.name}`
            const ImageStore = storeRef(imageStorage, uniqueName)
            uploadBytes(ImageStore, image)
            .then((snapshot) => {
                return getDownloadURL(snapshot.ref);
            })
            .then((downloadURL) => {
                const metadata = {
                    message: downloadURL,
                    email: user.email,
                    type: 'image'
                };
                push(dbRef, metadata)
            });
        } catch (error) {
            console.log(error.message)
        }
        showNotification(`image is sent.`)
    }
    useEffect(() => {
        onValue(dbRef, (snapshot) => {
            if(snapshot.exists()) {
                const data = Object.values(snapshot.val())
                const keys = Object.keys(snapshot.val())
                for (let i = 0; i < data.length; i++) {
                    data[i].id = keys[i]
                }
                setmessageFromDataBase(data)
            }
        })
    }, [])
    return(
        <dataBaseContext.Provider value={{user, messageFromDataBase, uploadImg, deleteMessage, sendMessage, getUserLoggedOut, setUserCredentials, userCredentials, getUserSignUP, setMessage, message, loading, getUserLogin}}>
            {children}
        </dataBaseContext.Provider>
    )
}

export default FireBaseContextProvider