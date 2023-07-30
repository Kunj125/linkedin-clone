
import { Avatar } from '@mui/material';
import '../src/Post.css'
import InputOption from './InputOption';
import { ThumbUpAltOutlined } from '@mui/icons-material';
import { ChatOutlined } from '@mui/icons-material';
import { ShareOutlined } from '@mui/icons-material';
import { SendOutlined } from '@mui/icons-material';

export default function Post({name, desc, msg, photoUrl, }){
  return (
    <div className="post">
        <div className="post__header">
            <Avatar src={photoUrl}/>
            <div className="post__info">
                <h2>{name}</h2>
                <p>{desc}</p>
            </div>
        </div>
        <div className="post__body">
            <p>{msg}</p>
        </div>
        <div className="post__buttons">
            <InputOption Icon={ThumbUpAltOutlined} title="Like" color="gray"/>
            <InputOption Icon={ChatOutlined} title="Comment" color="gray"/>
            <InputOption Icon={ShareOutlined} title="Share" color="gray"/>
            <InputOption Icon={SendOutlined} title="Send" color="gray"/>
        </div>
    </div>
    
  );  
}