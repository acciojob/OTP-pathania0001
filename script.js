//your JS code here. If required.
const inputs = document.querySelectorAll("input");
//inputs[0].focus();
inputs.forEach((input,index)=>{
	input.addEventListener("input",(e)=>{ 
		if(input.value.length===1){
			index<inputs.length-1 ? inputs[index+1].focus()
				: input.blur();
		}
	})

	input.addEventListener("keydown",(e)=>{
    if(e.key === "Backspace"  && index > 0)
	{
		input.value="";
		inputs[index-1].focus();
	}	
	})
})


