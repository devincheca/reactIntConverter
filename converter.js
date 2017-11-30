function fromDecimalToBinary(decimal)
{
  var input = document.getElementById('decimal').value;
  var stack = [];
  var quotient = input;
  var temp = 0;
  var binary = "";
  while (quotient !== 0)
  {
    temp = quotient;
    quotient = parseInt(quotient / 2.0);
    stack.push(temp % 2);
  }
  stack.map((binChar) =>
  {
    binary += binChar;
  });
  document.getElementById('binary').value = binary;
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