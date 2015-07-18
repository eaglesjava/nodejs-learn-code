var globalVariable = 'This is a global variable'

function globalFunction(){
	var localVariable = 'This is a local variable'
	
	console.log('visit global/local variable')
	console.log(globalVariable)
	console.log(localVariable)
	
	globalVariable = 'this is a changed variable'
	
	console.log(globalVariable)
	
	function localFunction(){
		var innerLocalVariable = 'this is inner local variable'
		
		console.log('visit global/local/innerlocal variable')
		console.log(globalVariable)
		console.log(localVariable)
		console.log(innerLocalVariable)
	}
	
	localFunction()
}


globalFunction()

