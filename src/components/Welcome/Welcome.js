import './Welcome.scss';
import { Component } from 'react';
import { NavLink } from 'react-router-dom';


class Welcome extends Component {
//   functions,state would go up here


    render() { 
        return (
            <NavLink to={'/intro'}>
                <main className='welcome'>
                    <h1 className='welcome__title'>Alatúlie</h1>
                </main>
            </NavLink>
        );
    }
}
 
export default Welcome;