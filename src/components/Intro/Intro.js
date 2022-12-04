import './Intro.scss';
import { Component } from 'react';
import { NavLink } from 'react-router-dom';


class Intro extends Component {
//   functions,state would go up here

name = '';

    render(name) { 
        return (
            <main className='intro'>
                <h2 className='intro__heading'>Welcome</h2>
                <p className='intro__body'>May I ask, what is your name?</p>
                <input className='intro__input' placeholder='|'/>
                <p className='intro__body'>Hi, {name} :)</p>
                <p className='intro__body'><span className='intro__body intro__body--italic'>Mae govannen</span>, well met</p>

                {/* can make this conditional if name = waylon, so it can be sent to sam & others */}
                <p className='intro__body'>And, by any chance is today December 28th where you live?</p>
                <input className='intro__input' placeholder='|'/>
                <p className='intro__body'>I thought so</p>
                <p className='intro__body'> In that case, before we take you in we have to wish you a super, super happy birthday and get your word that you agree to being celebrated very hard today</p>
                <p className='intro__body'>Ok? Ok</p>

                <button><NavLink to={'/language'}>to select lang</NavLink></button>
            </main>
        );
    }
}
 
export default Intro;