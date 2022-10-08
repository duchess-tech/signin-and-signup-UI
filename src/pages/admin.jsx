import { AxiosError } from "axios"
import { useState } from "react"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import http from "../api/http"
import Navbar from "../../react-main/src/components/Navbar"
import UserLayout from "../../react-main/src/layouts/UserLayout"

const Admin = () => {

    let isMounted = true
    const [userlist, setUserlist] = useState([])
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        const getUsers = async () => {
            try {
                setLoading(true)
                const response = await http.get("/admin")
                setUserlist(response.data.users)
            } catch (error) {
                if (error instanceof AxiosError) {
                    if (error.response.status == 401) {
                        navigate("/")
                        return
                    }

                    console.log("Erorr de")
                } else {
                    console.log("Erorr de")
                }

            } finally {
                setLoading(false)
            }
        }

        if (isMounted) getUsers()

        return () => {
            isMounted = false
        }

    }, [])

    return (

        <div>
            <h1>I am Admin page</h1>

            {loading && <span className="spinner-border"></span>}

            {
                !loading && userlist.length > 0 && userlist.map((item, index) =>
                    <div>
                        <h1>{item?.name}</h1>
                        <p className="small">{item?.email}</p>
                        <span className="alert alert-primary p-2 ">{item?.role}</span>
                    </div>
                )
            }
            {
                !loading && userlist.length <= 0 &&

                <div>
                    <h1 className="alert alert-warning p-5">No user yet</h1>
                </div>

            }
        </div>

    )
}

export default Admin