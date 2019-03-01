/*
convert html to jsx
HTML and jsx differents
inline style
    jsx use object for inline style, and refer to by {} as variable, change - to campmoCase
class and for keyword
    use className and htmlFor
refer to javascript variable
    use {} to refer to variable, function, and object

class
    css class
for
    when click on will select input field it point to
id
    css id
type
    input type
style
    inline css style

<div>
    <label class="label" for="name">Enter name:</label>
    <input id="name" type="text" />
    <button style="background-color: blue; color: white;">Submit</button>
</div>
*/

// import React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// create a react component
const App = () => {
    return (
        <div>
            <label className="label" htmlFor="name">Enter name:</label>
            <input id="name" type="text" />
            <button style={{backgroundColor: 'blue', color: 'white'}}>Submit</button>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));