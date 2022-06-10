import './Main.scss';
import { Component } from 'react';
import axios from 'axios';

class Main extends Component {
    state = {
        elvish: ''
    }

    submitHandler(e) {
        e.preventDefault();
        axios.get('http://localhost:8080')
        .then(res => {
            this.setState({
                elvish:res.data
            })
        })
        .catch(error => console.error(error))
    }

    render() { 
        return (
            <main className='main'>
                <h2 className='main__title'>Enter english word</h2>
                <form className='main__form' onSubmit={this.submitHandler}>
                    <label className='main__form-label' for='english'>Enter English Word</label>
                    <input className='main__form-input'type='text' name='english'></input>
                    <button className='main__form-button'>TRANSLATE</button>
                    <div className='main__form-output'></div>
                </form>
            </main>
        );
    }
}
 
export default Main;