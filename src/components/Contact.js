import {useSelector} from 'react-redux';
import Main from './Main';
import './Theme.css';

const Contact = () => {

    const isLight = useSelector((state)=>state.isLight);

    return(
        <div className={isLight?'light' : 'dark'}>
        <Main />
        <h2>You can mail us at help@geekster.in</h2>
        </div>
    )
}

export default Contact;