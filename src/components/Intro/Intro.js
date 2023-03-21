import './Intro.scss';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';


function Intro() {
    
    const [name, setName] = useState('');
    const [answer, setAnswer] = useState('');

    const handleName = event => {
        let name = event.target.value;
        setName(name);
        console.log('name is:', name);
        
    };

    // const handleAnswer = event => {
    //     setAnswer(event.target.value);
    //     console.log('yes or no:', event.target.value);

    // };

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


                <p className={name ? 'intro__body intro__body--mae' : 'intro__body--hidden'}><span className='intro__body intro__body--italic intro__body--mae'>Mae govannen</span>, well met.</p>

                <div className='intro__body'>
                    <p className='intro__body intro__body--first'>I understand you're</p>
                    <p className='intro__body intro__body--second'>interested in learning </p>
                    <p className='intro__body intro__body--third'>some Elvish words!</p>
                    <p className='intro__body intro__body--fourth'>How wonderful.</p>
                    <p className='intro__body intro__body--fifth'>We're very glad you're here ✨</p>
                    <p className='intro__body intro__body--sixth'>Shall we get started?</p>
                    {/* <p className='intro__body intro__body--eighth'></p>
                    <p className='intro__body intro__body--ninth'></p>
                    <p className='intro__body intro__body--tenth'></p>
                    <p className='intro__body intro__body--eleventh'></p>
                    <p className='intro__body intro__body--twelfth'></p>
                    <p className='intro__body intro__body--thirteenth'></p>
                    <p className='intro__body intro__body--fourteenth'></p>
                    <p className='intro__body intro__body--fifteenth'></p>
                    <p className='intro__body intro__body--sixteenth'></p>
                    <p className='intro__body intro__body--seventeenth'></p>
                    <p className='intro__body intro__body--eighteenth'></p>
                    <p className='intro__body intro__body--nineteenth'></p>
                    <p className='intro__body intro__body--twentieth'></p> */}
                </div>
                <div className='intro__body intro__body--seventh'>
                    <button className='intro__button'><NavLink to={'/language'}>Enter</NavLink></button>
                </div>
            </main>
        );
    }

export default Intro;