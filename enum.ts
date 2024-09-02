enum Color {
    Red = "Red",
    Green = "Green",
    Blue = "Blue"
  }
  
  function getColorMessage(color: Color): string {
    return `El color es: ${color}.`;
  }
  
  console.log(getColorMessage(Color.Red));   
  console.log(getColorMessage(Color.Green)); 
  console.log(getColorMessage(Color.Blue));  
  