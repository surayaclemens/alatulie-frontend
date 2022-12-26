import './SelectLang.scss';
import { Component } from 'react';
import { NavLink } from 'react-router-dom';



class SelectLang extends Component {
//   functions,state would go up here

    render() { 
        return (
            <main className='select-lang'>
                <NavLink to={'/'}>
                <header className="header">  
                    már
                </header>
                </NavLink>
                <div className='select-lang__buttons'>
                        <button className='select-lang__button select-lang__button--quenya'>
                            <NavLink to={'/quenya'}>
                                Quenya
                            </NavLink>
                        </button>
                   

                        <button className='select-lang__button select-lang__button--sindarin'>
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