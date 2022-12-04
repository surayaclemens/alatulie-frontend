import './Sindarin.scss';
import Header from '../Header/Header';
import { Component } from 'react';
import { NavLink } from 'react-router-dom';


class Sindarin extends Component {
//   functions,state would go up here

    render() { 
        return (
            <main className='sindarin'>
                <Header/>
                <p>Sindarin works!</p>
            
               
            </main>
        );
    }
}
 
export default Sindarin;