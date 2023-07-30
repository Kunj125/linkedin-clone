import '../src/InputOption.css'
export default function InputOption({Icon, title, color}){
    return (
        <div className = "input__option">
        <Icon style={{color: color}}/>
        <h3>{title}</h3>
        </div>
    );
}