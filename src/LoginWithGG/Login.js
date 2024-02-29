import { useNavigate } from "react-router-dom";
function Login (){
    const navigate = useNavigate();
    const isLogin = () => {
        navigate("/FirstPage")
    }
    return(
        <div>
            <button type="button" onClick={isLogin}> Login </button>
        </div>
    )
}
export default Login