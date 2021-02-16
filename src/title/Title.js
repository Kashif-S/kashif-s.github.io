import Background from './Background';
import Scroll from './Scroll';
import './Title.css';

function Title() {
    return (
        <div class="FullPage">
            <div class="Title">
                <h1 class="BigHeading">Hi, I'm <span class="Highlight">Kashif Sayeed</span>.<br/>I develop all kinds of software.</h1>
            </div>
            <Scroll/>
            <Background />
        </div>
    );
}

export default Title;