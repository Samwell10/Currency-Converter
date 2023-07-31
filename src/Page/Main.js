import Block from '../Components/block/Block';
import './Main.css'
const Main = () => {
    return ( 
        <div className="main">
             <div className="main-top">
                <h1 className="main-header">Currency Converter</h1>
                <p className="main-text">Check live rates, set rate alerts, receive notifications and more.</p>
             </div>
             <div className="main-body">
                <Block/>
             </div>
        </div>
    );
}
 
export default Main;