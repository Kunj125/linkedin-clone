import { Avatar } from '@mui/material';
import '../src/HeaderOption.css';
export default function HeaderOption({ avatar, title, Icon }) {
    return (
        <div className="headerOption">
            {Icon && <Icon className='headerOption__icon' />}
            {avatar && <Avatar className='headerOption__icon' />}
            <h1 className='headerOption__title'>{title}</h1>
        </div>
    );
}