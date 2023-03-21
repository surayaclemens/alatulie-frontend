import './SelectLang.scss';
import { Component } from 'react';
import { NavLink } from 'react-router-dom';



class SelectLang extends Component {
//   functions,state would go up here

    render() { 
        return (
            <main className='select-lang'>
                <div className='select-lang__buttons'>
                <h2 className='select-lang__heading'>Which language would you like to explore?</h2>
                    <button className='select-lang__button select-lang__button--quenya'>
                        <NavLink class='link'to={'/quenya'}>
                            Quenya
                        </NavLink>
                    </button>
                
                    <button className='select-lang__button select-lang__button--sindarin'>
                        <NavLink class='link' to={'/sindarin'}>
                            Sindarin
                        </NavLink>
                    </button>
                </div>
                <NavLink to={'/'}>
                    <header className="header header--italic">return to már
                    </header>
                </NavLink>
            </main>
        );
    }
}
 
export default SelectLang;