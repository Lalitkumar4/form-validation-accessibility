import { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"

const Login = () => {
  const userRef = useRef() // state for initial focus
  const errRef = useRef() // state for screen readers

  const [user, setUser] = useState("")
  const [pwd, setPwd] = useState("")
  const [errMsg, setErrMsg] = useState("")

  // initial focus
  useEffect(() => {
    userRef.current.focus()
  }, [])

  useEffect(() => {
    setErrMsg("")
  }, [user, pwd])

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log({ user, pwd })
    setUser("")
    setPwd("")
  }

  return (
    <section>
      <p
        ref={errRef}
        className={errMsg ? "errmsg" : "offscreen"}
        aria-live="assertive"
      >
        {errMsg}
      </p>
      <h1>Sign In</h1>
      <h4>Welcome back</h4>
      <form onSubmit={handleSubmit}>
        {/* Username */}
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          ref={userRef}
          autoComplete="off"
          onChange={(e) => setUser(e.target.value)}
          value={user}
          required
        />

        {/* Password */}
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          onChange={(e) => setPwd(e.target.value)}
          value={pwd}
          required
        />
        {/* Sign In Button */}
        <button>Sign In</button>
      </form>
      <p>
        Don't have an Account?{" "}
        <span className="line">
          <Link to="/">Sign Up</Link>
        </span>
      </p>
    </section>
  )
}

export default Login
