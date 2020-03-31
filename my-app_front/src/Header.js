import React from 'react';

// function Header(props) {
function Header({ children }) { //desestruturação das props, para pegar apenas as que estarão sendo usadas
    return (
        <header>
            {/* <h1>{props.title}</h1> */}
            <h1>{children}</h1>            
        </header>
    );
}
export default Header;