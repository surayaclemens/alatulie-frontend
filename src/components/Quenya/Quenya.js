import './Quenya.scss';
import Header from '../Header/Header';
import { Component } from 'react';
import { NavLink } from 'react-router-dom';


class Quenya extends Component {
//   functions,state would go up here

    render() { 
        return (
            <main className='quenya'>
                <Header/>
                <p>quenya works!</p>
            
               
            </main>
        );
    }
}
 
export default Quenya;