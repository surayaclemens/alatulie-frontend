import './SelectLang.scss';
import Header from '../Header/Header';
import { Component } from 'react';
import { NavLink } from 'react-router-dom';


class SelectLang extends Component {
//   functions,state would go up here

    render() { 
        return (
            <main className='select-lang'>
                <Header/>
                <div className='select-lang__buttons'>
                        <button className='select-lang__button'>
                            <NavLink to={'/quenya'}>
                                Quenya
                            </NavLink>
                        </button>
                   

                        <button className='select-lang__button'>
                            <NavLink to={'/sindarin'}>
                                Sindarin
                            </NavLink>
                        </button>


                </div>


               
            </main>
        );
    }
}
 
export default SelectLang;