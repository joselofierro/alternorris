import { useHistory } from "react-router-dom"
import { useAuth } from "../contexts/Auth"

export function Dashboard() {
    // Get current user and signOut function from context
    const {user, signOut} = useAuth()
    const history = useHistory()

    async function handleSignOut() {
      // @TODO: add sign out logic
      await signOut()

      history.push('/')
    }
  
    return (
      <div>
        <p>Welcome, {user?.id}!</p>

        <button>Get Jockes</button>
        <button onClick={handleSignOut}>Sign out</button>
      </div>
    )
  }