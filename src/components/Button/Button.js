import './Button.scss';

function Button({handler}) {


    return (
        <button 
            onClick={handler}
            className="button">translate
        </button>
    )
}

export default Button;
