function fromDecimal()
{
  var input = document.getElementById('decimal').value;
  var stack = [];
  var quotient = input;
  var temp = 0;
  var binary = "";
  var octal = "";
  var hex = "";
  while (quotient !== 0)
  {
    temp = quotient;
    quotient = parseInt(quotient / 2);
    stack.push(temp % 2);
  }
  stack.reverse();
  stack.map((binChar) =>
  {
    binary += binChar;
  });
  document.getElementById('binary').value = binary;
  quotient = input;
  while (quotient !== 0)
  {
    temp = quotient;
    quotient = parseInt(quotient / 16);
    stack.push(temp % 16);
  }
  stack.reverse();
  stack.map((hexChar) =>
  {
    if (hexChar <= 9)
    {
      hex += hexChar;
    }
    else
    {
      
    }
  });
  document.getElementById('hex').value = hex;  
}
function fromOctalToBinary(octal)
{
  
}
function fromHexToBinary(hex)
{
  
}
function fromBinaryToOctal(binary)
{
  
}
function fromDecimalToOctal(decimal)
{
  
}
function fromHexToOctal(hex)
{
  
}
function fromBinaryToDecimal(binary)
{
  
}
function fromOctalToDecimal(octal)
{
  
}
function fromHexToDecimal(hex)
{
  
}
function fromBinaryToHex(binary)
{
  
}
function fromDecimalToHex(decimal)
{
  
}
function fromOctalToHex(octal)
{
  
}