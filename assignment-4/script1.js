var names = new Array();
names[0] = "sri";
names[1] = "jhon";
names[2] = "loki"
names[3] = "ali";
names[4] = "rohan";
names[5] = "jessy";
names[6] = "frank";
names[7] = "Jhosena";
names[8] = "alia";
names[9] = "Jasmin";

for (var i = 0;i<names.length; i++){
	if(names[i].charAt(0) === "J" || names[i].charAt(0) ==="j"){
		console.log("Goodbye "+names[i])
	}
	else{
		console.log("Hello "+names[i])
	}
}