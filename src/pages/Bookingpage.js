import React from 'react'

function Bookingpage() {
    const [count, setCount] = React.useState(0);

    // Similar to componentDidMount and componentDidUpdate:  
    React.useEffect(() => {
        // Update the document title using the browser API  
        document.title = `You clicked ${count} times`;
    });

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}

export default Bookingpage
