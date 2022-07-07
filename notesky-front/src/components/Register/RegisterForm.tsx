import { Link } from "react-router-dom";
import { Button, Divider, Form, Icon } from "semantic-ui-react";

export default function LoginForm() {
   return (
      <>
         <div className="ui middle aligned center aligned grid" id="loginform">
            <div className="column">
               <h2 className="ui image header">
                  <Icon className="massive grey globe" />
                  <div className="content">
                     <p>It's quick and easy</p>
                  </div>
               </h2>
               <Divider />
               <Form className="ui massive form">
                  <div className="ui stacked secondary segment">
                     <div className="field">
                        <div className="ui huge left icon input">
                           <i className="user icon"></i>
                           <input type="text" name="email" placeholder="Username" />
                        </div>
                     </div>
                     <div className="field">
                        <div className="ui huge left icon input">
                           <i className="envelope icon"></i>
                           <input type="email" name="email" placeholder="Email" />
                        </div>
                     </div>
                     <div className="field">
                        <div className="ui huge left icon input">
                           <i className="lock icon"></i>
                           <input type="password" name="password" placeholder="Password" />
                        </div>
                     </div>
                     <div className="field">
                        <div className="ui huge left icon input">
                           <i className="lock icon"></i>
                           <input type="password" name="password" placeholder="Re-enter password" />
                        </div>
                     </div>
                     <Button className="ui fluid huge blue submit button" as={Link} to={'/notes'} content="Register" style={{ backgroundColor: "deepskyblue" }} />
                  </div>
                  <div className="ui error message"></div>
               </Form>
               <div className="ui message">
                  Already have an account ? <a href="/login">Login</a>
               </div>
            </div>
         </div>
      </>
   )
}