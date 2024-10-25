import Form from "../components/Form"

function Login() {
    return<>
    <Form route="/api/token/" method="login" />
    <a className="aTag" href="/register">Don't have an account?<span>Sign up</span></a>
    </> 
}

export default Login