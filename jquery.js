function insert(num){
    var existingNumbers = $("#result").val();
    $("#result").val(existingNumbers + num)
}
function clearResult(){
    $("#result").val('')
}

function calculate(){
    var result = eval($("#result").val())
    $("#result").val(result)
}

function deleteNumber(){
    var presentvalue = $("#result").val();
    if(presentvalue!=''){
       $("#result").val(presentvalue.slice(0,-1)); 
    }
}