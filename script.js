document.addEventListener("DOMContentLoaded", function () {
  // This line sets up an event listener that waits for the entire HTML document to be fully loaded and parsed before executing the code inside the function.
  const colorBox = document.getElementById("color-box");
  //This line selects the HTML element with the ID color-box and assigns it to the variable colorBox.
  const changeColorBtn = document.getElementById("change-color-btn");
  //This line selects the HTML element with the ID change-color-btn and assigns it to the variable

  function getRandomColor() {
    // This function generates a random color in hexadecimal format.
    const letters = "0123456789ABCDEF";
    // This line creates a string of hexadecimal characters that can be used to generate a color code.
    // Hexadecimal color codes consist of characters 0-9 and A-F (which represent values 10-15 in base 16).
    let color = "#";
    // This line starts the color code with a '#', which is the standard prefix for hexadecimal color
    for (let i = 0; i < 6; i++) {
      // This loop generates a random hexadecimal character and adds it to the color code.

      color += letters[Math.floor(Math.random() * 16)];
      // This line generates a random number between 0 and 15 (inclusive), converts it to
      // a hexadecimal character, and adds it to the color code.
      //Math.random() generates a random number between 0 (inclusive) and 1 (exclusive).
      //Math.floor() rounds down to the nearest whole number.
      //* 16 scales that number to a range of 0 to just under 16.
    }
    return color;
    //This line returns the generated random color from the getRandomColor function.
  }

  changeColorBtn.addEventListener("click", function () {
    colorBox.style.backgroundColor = getRandomColor();
  });
});
