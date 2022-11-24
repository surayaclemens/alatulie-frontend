import './Intro.scss';
import { Component } from 'react';


class Intro extends Component {
//   functions,state would go up here

    render(name) { 
        return (
            <main className='intro'>
                <h2 className='intro__heading'>Welcome</h2>
                <p className='intro__body'>May I ask, what is your name?</p>
                <input className='intro__input'/>
                <p className='intro__body'>Hi, {name} :)</p>
                <p className='intro__body'>Mae govannen, well met</p>
                <p className='intro__body'>And, is today December 28th where you live?</p>
                <input className='intro__input'/>
                <p className='intro__body'>I thought so</p>
                <p className='intro__body'> In that case, before we take you in we have to wish you a very, very happy birthday and get your word that you agree to celebrate your life to the fullest extent today</p>
                <p className='intro__body'>Ok? Ok</p>
            </main>
        );
    }
}
 
export default Intro;