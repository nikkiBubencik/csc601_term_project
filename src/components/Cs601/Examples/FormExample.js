import { useState } from "react";

function FormExample(){
    const [name, setName] = useState("");
    const [color, setColor] = useState('black');

    function handleChange(event){
        event.preventDefault();
        setColor(event.target.value);
    }

    function handleSubmit(event){
        event.preventDefault();
        console.log(name, color);
        const formOutput = document.getElementById('form-output');
        formOutput.textContent = `Hello ${name}!`;
        formOutput.style.color = color;
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name: </label>
                <input 
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                /><br />
                <label>Pick a color:
                <label>
                    <input 
                        type="radio" 
                        name="color" 
                        value="black"
                        checked={color === "black"}
                        onChange={handleChange}/> Black
                </label>
                <label>
                    <input 
                        type="radio" 
                        name="color" 
                        value="red"
                        checked={color === "red"}
                        onChange={handleChange}/> Red
                </label>
                <label>
                    <input 
                        type="radio" 
                        name="color" 
                        value="blue"
                        checked={color === "blue"}
                        onChange={handleChange}/> Blue
                </label>
                <label>
                    <input 
                        type="radio" 
                        name="color" 
                        value="green"
                        checked={color === "green"}
                        onChange={handleChange}/> Green
                </label>
                </label><br />
                <button type="submit" >Submit</button> 
            </form>
            <p id="form-output"></p>
        </div>
    )
}

export default FormExample;