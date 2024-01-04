import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import { useDataBase } from "./Context/FireBaseContext"
import { Toaster } from 'react-hot-toast';

const Root = () => {
    const {user} =  useDataBase()
    const navigate = useNavigate()
    useEffect(() => {
        user ? navigate('/') : navigate('/login')
    }, [user])
    return (
        <>
            <Toaster
            position="top-center"
            reverseOrder={false}
            gutter={8}
            containerClassName=""
            containerStyle={{}}
            toastOptions={{
              duration: 5000,
              style: {
                background: '#4bb4f8',
                color: '#fff',
              },
              success: {
                duration: 3000,
                theme: {
                },
              },
            }}
            />
            <Outlet/>
        </>
    )
}

export default Root