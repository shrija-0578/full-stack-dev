function changeText() {
    const inputVal = document.getElementById("inputField").value;
    const paragraph = document.getElementById("paragraph");
    if (inputVal.trim() !== "")
    {
        paragraph.textContent = inputVal;
        document.getElementById("inputField").value = ""; 
        // Clears input box after updating
    } else {
        alert("Please type something in the input box first!");
    }
}

function changeColor() 
{
    const container = document.querySelector("body");
    
    // Generates a random HEX color
    const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    container.style.backgroundColor = randomColor;
}

function addElement() 
{
    const container = document.getElementById("container");
    
    // Create a new <p> tag
    const newParagraph = document.createElement("p");
    
    // Set the specific text
    newParagraph.textContent = "new paragraph";
    
    // Append it to the container
    container.appendChild(newParagraph);
}