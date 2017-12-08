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
  stack = [];
  quotient = input;
  while (quotient !== 0)
  {
    temp = quotient;
    quotient = parseInt(quotient / 8);
    stack.push(temp % 8);
  }
  stack.reverse();
  stack.map((octalChar) =>
  {
    octal += octalChar;
  });
  document.getElementById('octal').value = octal;
  stack = [];
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
      switch(hexChar)
      {
	case 10:
	  hex += 'A';
	  break;
	case 11:
	  hex += 'B';
	  break;
	case 12:
	  hex += 'C';
	  break;
	case 13:
	  hex += 'D';
	  break;
	case 14:
	  hex += 'E';
	  break;
	case 15:
	  hex += 'F';
	  break;
	case 16:
	  hex += 'G';
	  break;
      }
    }
  });
  document.getElementById('hex').value = hex;  
}
function fromOctal()
{
  var octalArray = document.getElementById('octal').value.split('');
  var decimal = 0;
  var i = 0;
  octalArray.map((octal) =>
  {
    decimal *= 8;
    decimal += parseInt(octal);
  });
  document.getElementById('decimal').value = decimal;
}
function fromHex()
{
    // use string.charCodeAt(1); for getting character codes
}
function fromBinary()
{
  var binaryArray = document.getElementById('binary').value.split('');
  var decimal = 0;
  var i = 0;
  binaryArray.map((binary) =>
  {
    decimal *= 2;
    decimal += parseInt(binary);
  });
  document.getElementById('decimal').value = decimal;
}