function run(){
    const sint = parseInt( document.getElementById('sinput').value);
    const num1 = parseInt( document.getElementById('input1').value);
    const num2 = parseInt( document.getElementById('input2').value);
    const num3 = parseInt( document.getElementById('input3').value);
    const num4 = parseInt( document.getElementById('input4').value);
    const num5 = parseInt( document.getElementById('input5').value);
    const num6 = parseInt( document.getElementById('input6').value);
    const num7 = parseInt( document.getElementById('input7').value);
    const num8 = parseInt( document.getElementById('input8').value);
    const num9 = parseInt( document.getElementById('input9').value);
    sum1 = num1 + num2 + num3 +num4 +num5 + num6 +num7 +num8 +num9;
    sum2 = sum1 / sint;
    sum3 = sum2 /10;
    sum = Number((sum3).toFixed(3));
    
    out.innerHTML = sum;
    console.log(sum);
   
}

function run2(){
    const sint = parseInt( document.getElementById('sinput2').value);
    const num1 = parseFloat( document.getElementById('input21').value);
    const num2 = parseFloat( document.getElementById('input22').value);
    const num3 = parseFloat( document.getElementById('input23').value);
    const num4 = parseFloat( document.getElementById('input24').value);
    const num5 = parseFloat( document.getElementById('input25').value);
    const num6 = parseFloat( document.getElementById('input26').value);
    const num7 = parseFloat( document.getElementById('input27').value);
    const num8 = parseFloat( document.getElementById('input28').value);
    sum1 = num1 + num2 + num3 +num4 +num5 + num6 +num7 +num8 ;
    sum = sum1 / sint;
    
    
    out2.innerHTML = sum;
    console.log(sum);
   
}


