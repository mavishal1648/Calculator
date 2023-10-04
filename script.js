var output = document.getElementById('output-screen');
var buttons = document.getElementsByClassName('same-prop-button');
var operand_1 = null;
var operand_2 = null;
var operator = null;
var clear=" ";

for(let i = 0;i<buttons.length;i++)
{
    buttons[i].addEventListener('click',function()
    {
       var value = this.getAttribute('data-value');
       if(value=='+')
       {
            operator='+';
            operand_1 = parseFloat(output.textContent);
            // console.log(operand_1);
            output.innerText=clear;
       }
       else if(value=='-')
       {
        operator='-';
        operand_1 = parseFloat(output.textContent);
        console.log(operand_1);
        output.innerText=clear;
       }
       else if(value=='*')
       {
        operator='*';
        operand_1 = parseFloat(output.textContent);
        console.log(operand_1);
        output.innerText=clear;
       }
       else if(value=='/')
       {
        operator='/';
        operand_1 = parseFloat(output.textContent);
        console.log(operand_1);
        output.innerText=clear;
       }
       else if(value=='%')
       {
        operator='%';
        operand_1 = parseFloat(output.textContent);
        console.log(operand_1);
        output.innerText=clear;
       }
       else if(value==='AC'){
            output.innerText=clear;
       }
       else if(value=='=')
       {
            operand_2 =parseFloat(output.textContent);
            console.log(operand_2)
            if(operand_2==0 && operator=='%')
            {
                output.innerHTML="Error";
                setTimeout(function(){
                    output.innerText=clear;
                },1000)

            }
            else{
                var result = eval(operand_1+" "+operator+" "+operand_2);
                console.log(result);
                output.innerText = result;
            }
       }
       else if(value=='DEL'){
        output.innerText = output.innerText.slice(0,-1);
       }
       else{
        output.innerText+=value;
      
       }
    });
}

