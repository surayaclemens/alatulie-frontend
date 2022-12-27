import './Intro.scss';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';


function Intro() {
    
    const [name, setName] = useState('');
    const [answer, setAnswer] = useState('');
    const [way, setWay] = useState(false);
    // let nameIsWay = false;



    const handleName = event => {
        setName(event.target.value);
        console.log('name is:', event.target.value);
        
    };

    const handleAnswer = event => {
        setAnswer(event.target.value);
        console.log('yes or no:', event.target.value);

    };
    
    
    useEffect(() => {
        name === "Waylon" ? setWay(true) : setWay(false);
            console.log(way);
      }, [name, way]);
   
        return (
            <main className='intro'>
                <h2 className='intro__heading'>Welcome</h2>
                <p className='intro__body'>May I ask, what is your name?</p>
                <input 
                    onChange={handleName}
                    className='intro__input' 
                    placeholder='. . .'
                    name='name'
                    id="name"
                    value={name}
                />
                <p className={name ? 'intro__body intro__body--name' : 'intro__body--hidden'}>Hi, {name}</p>


                <p className={name ? 'intro__body intro__body--mae' : 'intro__body--hidden'}><span className='intro__body intro__body--italic intro__body--mae'>Mae govannen</span>, well met</p>

                {/* CONDITIONAL BIRTHDAY SECTION */}

                <div className={way ? 'intro__body intro__body--first' : 'intro__body--hidden'} >

                    <p className='intro__body intro__body--first'>And, by any chance is today</p>
                    <p className='intro__body intro__body--third'>December 28th where you are?</p>

                    <input 
                        onChange={handleAnswer}
                        className='intro__input' 
                        placeholder='. . .'
                        name='answer'
                        id="answer"
                        value={answer}
                    />

                    <p className='intro__body intro__body--fourth'>I thought it might be :~)</p>
                    <p className='intro__body intro__body--fifth'> In that case, before you start</p>
                    <p className='intro__body intro__body--sixth'>I have to wish you</p>
                    <p className='intro__body intro__body--seventh'>a very, very happy birthday</p>

                    <p className='intro__body intro__body--eighth'>And get your word that you</p>
                    <p className='intro__body intro__body--ninth'>agree to being celebrated</p>
                    <p className='intro__body intro__body--tenth'>extra extra hard today</p>


                    <p className='intro__body intro__body--eleventh'>because you are</p>
                    <p className='intro__body intro__body--twelfth'>dazzlingly brilliant</p>
                    <p className='intro__body intro__body--thirteenth'>exceptionally fun</p>
                    <p className='intro__body intro__body--fourteenth'>beautifully thoughtful</p>
                    <p className='intro__body intro__body--fifteenth'>deeply kind</p>
                    <p className='intro__body intro__body--sixteenth'>endlessly fascinating</p>
                    <p className='intro__body intro__body--seventeenth'>and an absolute ultra babe</p>
                    <p className='intro__body intro__body--eighteenth'>All that in one person?</p>
                    <p className='intro__body intro__body--nineteenth'>Well, that's a pretty big deal</p>

                    <p className='intro__body intro__body--twentieth'>Right?</p>
                </div>
                <button className={way ? 'intro__button' : 'intro__button--hidden'}><NavLink to={'/language'}>Right</NavLink></button>
                {/* <button className='intro__button'><NavLink to={'/language'}>Enter</NavLink></button> */}
            </main>
        );
    }

export default Intro;