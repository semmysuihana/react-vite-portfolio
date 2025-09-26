import './../App.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function Login({ServerHostName}) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [notif, setNotif] = useState("")
    const Navigate = useNavigate();
    function CekLogin(){
        username && password ? 
        console.log(username, password) 
        : setNotif("Username dan Password harus diisi");
        fetch(`${ServerHostName}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        }).then(res => res.json())

        .then(data => {
            localStorage.setItem("token", data.token)
            localStorage.setItem("user", JSON.stringify(data.user))
            if(data.message === "success") Navigate("/dashboard")
            setNotif(data.message)
        }
        ).catch(err => console.log("gagal",err))
        .finally(() => {
            setNotif("Loading....")
        })
    }
    return (
        <>
            <div className="container mt-4">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="text-center">Login</h4>
                            </div>
                            <div className="card-body">
                                    {notif ? <div className='alert alert-danger'>{notif}</div> : ""}
                                    <div className="form-group">
                                        <label htmlFor="username">Username</label>
                                        <input type="text" name="username" id="username" onChange={(e) => setUsername(e.target.value)} className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} className="form-control" />
                                    </div>
                                    <button onClick={() => CekLogin()} className="btn btn-primary">Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login