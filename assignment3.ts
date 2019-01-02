var arr_names:string[] = new Array();
 
function addTask(task:string){
arr_names.push(task);
console.log("=========== NEW TASK ===========\n"+
"Task  '"+task+" 'inserted in the list\n" +
"number of otems:"+arr_names.length);
}

function listAllTasks(){
   
        console.log(arr_names);
    
}

function deleteTask(task:string){
    var j=0,i;
    for( i in arr_names){
       if(i.localeCompare(task)==1){
         j++;  
       }    
       else{
           break;
       }
    }
    arr_names.splice(j,1);
    console.log("=========== REMOVED TASK ===========\n"+
    "Task  '"+task+" 'removed from the list\n" +
    "number of otems:"+arr_names.length);

}
addTask("start working with typescript");
addTask("Buy  eggs");
addTask("Buy  eggs1");
addTask("Buy  eggs2");

addTask("Buy  eggs3");
listAllTasks();
deleteTask("start working with typescript");

listAllTasks();
