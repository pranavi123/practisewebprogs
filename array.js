var list=[];
var input=prompt("enter a option");
while(input!=="quit")
{
	if(input==="new"){
		ele=prompt("enter new element");
		list.push(ele);
		console.log(list);
	}
	else if(input==="list"){
		list.forEach(function(i,x){
			console.log(x+" "+i);
		});
		console.log(list);
	}
    else if(input==="delete"){
    	index=prompt("enter index of element to be deleted");
    	list.splice(index,1);
    
    	
    }
	input=prompt("enter a option")
}
console.log("u have quit the app")