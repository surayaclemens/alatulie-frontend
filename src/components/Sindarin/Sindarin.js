import './Sindarin.scss';
import Header from '../Header/Header';
import Button from '../Button/Button';
import { useState } from 'react';
import pinkArrow from '../../assets/images/arrow-pink.svg'
import axios from 'axios';



function Sindarin (){

    let [sindarin, setSindarin] = useState([]);
    let [output, setOutput] = useState('');
    let [input, setInput] = useState('');


    const translateSindarin = () => {
        axios.get('https://alatulie-backend.herokuapp.com/translations/sindarin')
        .then(res => {
            console.log(res.data);
            setSindarin(sindarin = res.data);
            console.log(sindarin)
            let outputObject = sindarin.find((obj)=> obj.english === input);
            console.log(outputObject.english);
            setOutput(output = outputObject.sindarin);
            
        })
        .catch(error => alert("We're sorry, that word isn't in our lexicon yet... make a note and we'll try to add it! In the meantime, more examples you could try are sea, ocean, find, moon, story, peace"))
    }

    const handleInput = event => {
        let lowercaseSindarin = event.target.value.toLowerCase();
        setInput(lowercaseSindarin);
        console.log(input);
        return input;
    }

    const resetInput = () => {
        setInput('');
    }


        return (
            <main className='sindarin'>
                <header className='sindarin__header'>
                    <Header 
                    text="you are in sindarin"
                    arrow={pinkArrow}
                    />
                </header>
                <div className='sindarin__content'>
                    <input 
                    onFocus={resetInput}
                    className='sindarin__input' 
                    type="text" 
                    placeholder="e.g., kiss" 
                    value={input}
                    onChange={handleInput}/>
                    <Button handler={translateSindarin}/>
                    <h3 className='sindarin__output'>{output}</h3>
                </div>
                <p className='sindarin__footer'>you are in sindarin</p>

                
            </main>
        );
    
}
 
export default Sindarin;