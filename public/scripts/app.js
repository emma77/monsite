function check_name(name){
	if( name == "gabriel"){
		return"Win !";
	}else if( name == "clement"){
    	return"We find clement";
    }else{
		var res = "truth" + name + "is different from gabriel and clement";
		return res;
	}
}

$(document).ready(function(){
	alert(check_name(" emma "));
});

