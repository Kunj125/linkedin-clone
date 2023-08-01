import '../src/Login.css'
import {useState} from 'react';
import {auth} from './firebase';
import {useDispatch} from 'react-redux';
import {login} from './features/userSlice'
export default function Login() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [profilePic, setProfilePic] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    const register = () => {
        if (!name) {
            return alert("Please enter your full name to continue registering")
        }
        auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
            userAuth.user.updateProfile({displayName: name, photoURL: profilePic}).then(() => {
                dispatch(login({email: userAuth.user.email, uid: userAuth.user.uid, displayName: name, photoUrl: profilePic}))
            })
        }).catch((error) => alert(error));
    };
    const loginToApp = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
        .then((userAuth) => {
            dispatch(login({
                email: userAuth.email,
                uid: userAuth.uid,
                displayName: userAuth.displayName,
                photoURL: userAuth.photoURL
      
            }));
        })
        .catch(error => alert(error))
    };
    return (
        <div className="login">
            <img src="https://logos-download.com/wp-content/uploads/2016/03/LinkedIn_Logo_2019.png" alt="Linkedin logo"></img>
            <form>
                <input value={name}
                    onChange=
                    {(e) => setName(e.target.value)}
                    placeholder="Full name (required if registering)"
                    type="text"/>
                <input value={profilePic}
                    onChange=
                    {(e) => setProfilePic(e.target.value)}
                    placeholder="Profile pic URL (optional)"
                    type="text"/>
                <input value={email}
                    onChange=
                    {(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    type="email"/>
                <input value={password}
                    onChange=
                    {(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    type="password"/>
                <button type="submit"
                    onClick={loginToApp}>Sign in</button>
            </form>
            <p>Not a member? {" "}
                <span className="login__register"
                    onClick={register}>Register Now</span>
            </p>
        </div>
    );
}
