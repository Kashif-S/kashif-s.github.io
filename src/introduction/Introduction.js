import Background from './Background';
import Portrait from './Cool.png';
import './Introduction.css';

function Introduction() {
    return (
        <div class="FullPage" id="introduction">
            <div class="Hero">
                <img class="Portrait" src={Portrait}/>
                <div class="Text">
                    <h1>Rome wasn't built in a day.</h1>
                    <h2>This site won't be either.</h2>
                    <p>Thanks for stopping by. Unfortunately, this site is still under construction. Please be patient and come back at a later time.</p>
                    <hr/>
                    <p>In the meantime, feel free to reach out through any of the following links!</p>
                    <a href="https://github.com/kashif-s" class="fa fa-github"></a>
                    <a href="https://www.linkedin.com/in/kashif-s/" class="fa fa-linkedin"></a>
                </div>
            </div>
            <Background />
        </div>
    );
}

export default Introduction;