import '../src/Feed.css'
import CreateIcon from '@mui/icons-material/Create';
import InputOption from '../src/InputOption.js'
import ImageIcon from '@mui/icons-material/Image';
import EventNoteIcon from '@mui/icons-material/EventNote';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from '../src/Post.js'
import {useEffect, useState} from 'react';
import {db} from './firebase'
import firebase from 'firebase';
import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';

export default function Feed() {
    const [input, setInput] = useState("");
    const [posts, setPosts] = useState([]);
    const user = useSelector(selectUser);

    useEffect(() => {
        db.collection("posts").onSnapshot((snapshot) => setPosts(snapshot.docs.map((doc) => ({
            id: doc.id, 
            data: doc.data(),
        }))));
    }, []);

    function sendPost(e) {
        e.preventDefault();
        console.log("sending");
        db.collection("posts").add({
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: user.photoURL,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
        setInput("");
    }
    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon/>
                    <form>
                        <input value={input} onChange={
                                e => setInput(e.target.value)
                            }
                            type="text"/>
                        <button onClick= {sendPost}
                            type="submit">Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption color="#378FE9"
                        Icon={ImageIcon}
                        title="Photo"/>
                    <InputOption color="#5F9B41"
                        Icon={OndemandVideoIcon}
                        title="Video"/>
                    <InputOption color="#C37D16"
                        Icon={EventNoteIcon}
                        title="Event"/>
                    <InputOption color="#E16745"
                        Icon={CalendarViewDayIcon}
                        title="Write article"/>
                </div>
                {
                posts.map(({
                    id,
                    data: {
                        name,
                        description,
                        message,
                        photoUrl
                    }
                }) => {
                    return <Post key={id}
                        name={name}
                        description = {description}
                        message={message}
                        photoUrl={photoUrl}/>
                })
            } </div>
        </div>
    );
}
