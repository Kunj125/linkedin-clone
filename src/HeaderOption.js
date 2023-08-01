import { Avatar } from '@mui/material';
import '../src/HeaderOption.css';
import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';
export default function HeaderOption({ avatar, title, Icon, onClick }) {
    const user = useSelector(selectUser);
    return (
        <div className="headerOption" onClick={onClick}>
            {Icon && <Icon className='headerOption__icon' />}
            {avatar && <Avatar className='headerOption__icon' src={user.photoURL}>{user.displayName[0]}</Avatar>}
            <h1 className='headerOption__title'>{title}</h1>
        </div>
    );
}