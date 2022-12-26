import './Quenya.scss';
import Header from '../Header/Header';
import Button from '../Button/Button';
import { useState } from 'react';
import greenArrow from '../../assets/images/arrow-green.svg'
import axios from 'axios';



function Quenya (){
   

    let [quenya, setQuenya] = useState([]);
    let [output, setOutput] = useState('');
    let [input, setInput] = useState('');


    const translateQuenya = () => {
        axios.get('http://localhost:8080/translations/quenya')
        .then(res => {
            console.log(res.data);
            setQuenya(quenya = res.data);
            console.log(quenya)
            let outputObject = quenya.find((obj)=> obj.english === input);
            console.log(outputObject.english);
            setOutput(output = outputObject.quenya);
            
        })
        .catch(error => alert("We're sorry, that word isn't in our lexicon yet... make a note and we'll try to add it! In the meantime, more examples you could try are honey, journey, cat, holiday, lover"))
    }

    const handleInput = event => {
        setInput(event.target.value);
        console.log(input);
        return input;
    }

    const resetInput = () => {
        setInput('');
    }


        return (
            <main className='quenya'>
                <Header 
                text="you are in quenya"
                arrow={greenArrow}
                />
                <div className='quenya__content'>
                    <input 
                    onFocus={resetInput}
                    className='quenya__input' 
                    type="text" 
                    placeholder="e.g., dear" 
                    value={input}
                    onChange={handleInput}
                    />
                    <Button handler={translateQuenya}/>
                    <h3 className='quenya__output'>{output}</h3>
                </div>
                
            </main>
        );
    
}
 
export default Quenya;