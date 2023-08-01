import {Avatar} from "@mui/material";
import '../src/Sidebar.css'
import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';

export default function Sidebar() {
    const user = useSelector(selectUser);

    const recentItem = (topic, symbol) => (
        <div className="recent__item">
            <span className="item__hash">{symbol}</span>
            <h2>{topic}</h2>
        </div>
    );

    return (
        <div>
            <div className="sidebar__top">
                <img src="https://media.licdn.com/dms/image/D4E16AQEwApvd6B82vQ/profile-displaybackgroundimage-shrink_200_800/0/1670820952750?e=1696464000&v=beta&t=O3kQ-z9RGi-ldV5FPJAmWMaQIMY7eWHFeJ7xy-YE5gg" alt=""></img>
                <Avatar className="sidebar__avatar" src={user.photoURL}>{user.displayName[0]}</Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
                <div className="sidebar__stats">
                    <div className="sidebar__stat">
                        <p>Who's viewed your profile</p>
                        <p className="sidebar__statNumber">850</p>
                    </div>
                    <div className="sidebar__stat">
                    <p>Impressions of your post</p>
                        <p className="sidebar__statNumber">1120</p>
                    </div>
                </div>
            </div>
            <div className="sidebar__bottom">
                <h2>Recent</h2>
                {recentItem("reactjs", "#")}
                {recentItem("programming", "#")}
                {recentItem("ai/ml", "#")}
                {recentItem("software", "#")}
                {recentItem("devops", "#")}
                <br></br>
                <h2>Groups</h2>
                {recentItem("Artificial Intelligence", "♙")}
                {recentItem("The University of Manchester", "♙")}
                {recentItem("Mathematical Olympiads", "♙")}
            </div>
        </div>
    );
}
