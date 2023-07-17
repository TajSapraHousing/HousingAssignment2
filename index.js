const numBottons=document.getElementsByClassName('numButton')
const actionButtons=document.getElementsByClassName('actionButtons')
const operatorButtons=document.getElementsByClassName('operatorButtons')
var decimalFlag=false;
let result;
var displayFlag=false;
let expression=''
for(let i=0;i<numBottons.length;i++){
    numBottons[i].addEventListener('click', (e)=>{        
        if(displayFlag){
            document.getElementsByClassName('show_area')[0].innerText=String(result)
            displayFlag=false            
        }
        expression=document.getElementsByClassName('show_area')[0].innerText
        if(expression==='0'&&e.target.innerText==='0'){
            return;
        }
        let tempresult=expression+e.target.innerText
        if(expression==='0'){
            document.getElementsByClassName('show_area')[0].innerText=e.target.innerText            
        }
        else{
            document.getElementsByClassName('show_area')[0].innerText=tempresult
        }
        document.getElementsByClassName('show_area')[0].scrollLeft=document.getElementsByClassName('show_area')[0].scrollWidth
    })
}
const operators=['+', '-', '*', '/', '%']
for(let i=0;i<operatorButtons.length;i++){
    operatorButtons[i].addEventListener('click', (e)=>{
        if(displayFlag){
            document.getElementsByClassName('show_area')[0].innerText=String(result)
            displayFlag=false            
        }
        expression=document.getElementsByClassName('show_area')[0].innerText
        if(expression==='0'){
            //show flash message
            return;
        }        
        if(operators.includes(expression[expression.length-1])){
            // show flash message
            return
        }
        decimalFlag=false
        let tempresult=expression+e.target.innerText
        document.getElementsByClassName('show_area')[0].innerText=tempresult
        document.getElementsByClassName('show_area')[0].scrollLeft=document.getElementsByClassName('show_area')[0].scrollWidth
    })
}
document.getElementById('decimalButton').addEventListener('click', ()=>{
    if(displayFlag){
        document.getElementsByClassName('show_area')[0].innerText=String(result)
        displayFlag=false            
        if(result%1==0){
            decimalFlag=false
        }
    }
    if(decimalFlag)return;
    decimalFlag=true
    expression=document.getElementsByClassName('show_area')[0].innerText
    if(operators.includes(expression[expression.length-1])){
        var temp=expression+'0.'
        document.getElementsByClassName('show_area')[0].innerText=temp
        return
    }
    document.getElementsByClassName('show_area')[0].innerText=document.getElementsByClassName('show_area')[0].innerText+'.'    
    document.getElementsByClassName('show_area')[0].scrollLeft=document.getElementsByClassName('show_area')[0].scrollWidth
})
document.getElementsByClassName('allClearButton')[0].addEventListener('click',()=>{    
    displayFlag=false;
    decimalFlag=false;
    document.getElementsByClassName('show_area')[0].innerText='0'    
    document.getElementsByClassName('show_area')[0].scrollLeft=document.getElementsByClassName('show_area')[0].scrollWidth
})
document.getElementsByClassName('backButton')[0].addEventListener('click',()=>{
    if(displayFlag){
        document.getElementsByClassName('show_area')[0].innerText=String(result)
        displayFlag=false 
        return           
    }
    expression=document.getElementsByClassName('show_area')[0].innerText    
    if(expression=='0')return;
    if(expression[expression.length-1]=='.'){
        decimalFlag=false
    }
    expression=expression.substring(0, expression.length-1)
    if(expression==''){
        document.getElementsByClassName('show_area')[0].innerText='0'
        return        
    }
    document.getElementsByClassName('show_area')[0].innerText=expression    
    document.getElementsByClassName('show_area')[0].scrollLeft=document.getElementsByClassName('show_area')[0].scrollWidth
})
document.getElementById('Evaluate').addEventListener('click', ()=>{
    if(displayFlag){
        document.getElementsByClassName('show_area')[0].innerText=String(result)
        displayFlag=false     
        return;       
    }
    expression=document.getElementsByClassName('show_area')[0].innerText    
    try{
        result=eval(expression)
        displayFlag=true;
        document.getElementsByClassName('show_area')[0].innerText+=" = "+String(result)
    }
    catch(err){
        //show flash message 
    }
    document.getElementsByClassName('show_area')[0].scrollLeft=document.getElementsByClassName('show_area')[0].scrollWidth
})