import React from 'react';


function Footer() {
    const year = new Date();

    return (
        <div className='main'>
            <footer>Copyright &copy; {year.getFullYear()} </footer>
        </div>
    )
}
export default Footer