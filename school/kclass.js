var teacher = require('./teacher')
var student = require('./student')

function add(teacherName,students) {
	teacher.add(techerName)
	
	students.forEach(function(item,index){
		student.add(item)
	})
}

exports.add = add