import './SelectLang.scss';
import Header from '../Header/Header';
import { Component } from 'react';


class SelectLang extends Component {
//   functions,state would go up here

    render(name) { 
        return (
            <main className='select-lang'>
                <Header/>
                <button className='select-lang__button'>Quenya</button>
                <button className='select-lang__button'>Sindarin</button>



               
            </main>
        );
    }
}
 
export default SelectLang;