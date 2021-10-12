import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAuthentication = () =>{
    initializeApp(firebaseConfig);
}
export default initializeAuthentication;

/*steps for Authentication 
Initialize 
setp one
1. firebae :create Project 
2. create web app
3. get configuration
4. initialize firebase
5. Enable auth method 

 step 2. setup Component
 1. create login component
 2. create register component
 3. create route for  login and register

 step 3: auth system
 1. set up sign in method
 2. setup sign out method 
 3. user state
 4. spwecial observer
 5. return necessry methods and states  from usefirebase
 step 4: create auth context hook(useAuth) 
  1 . create a auth context 
  2.  create context provider
  3.  set context value
  4. use auth provider
  5. create useAuth hook
  
  step 5: create orivate Route
  1 create private Route
  2. set private 
 */

