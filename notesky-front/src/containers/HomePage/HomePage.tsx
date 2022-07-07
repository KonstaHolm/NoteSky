import { Link } from "react-router-dom"
import { Button, Divider } from "semantic-ui-react"

export default function HomePage() {
   return (
      <>
         <div className="homeContent">
            <h1 id="title">NoteSky</h1>
            <h1 id="titleText">Save your thoughts.</h1>
            <Divider flo />
            <Button inverted id="homeBtn" as={Link} to='/login' content="Login" />
            <Button inverted id="homeBtn" as={Link} to='/register' content="Register" />
         </div>
      </>
   )
}