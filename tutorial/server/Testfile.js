var express 	= require('express'),
	mongoose	= require('mongoose'),
	path		= require('path'),
	app 		= express();

app.listen(8080, function() { 
	console.log("listening on 8080");
});
var Schema = mongoose.Schema;
var conn = mongoose.connect('mongodb://localhost/test');
conn.connection.on('open', function(){ 
	console.log("connected to test");
});

var Person = new Schema({
	name: String,
	occupation: String,
	age: Number
});
var Person = mongoose.model('Person', Person);

app.get('/', function(req,res) {
	Person.find({}, function(error,data){
		res.json(data);
	});
});
//app.get('/adduser',function(req,res){
var person = new Person({
	name: 'Doug',
	occupation: 'Jr Dev',
	age: 24
});
console.log("searching");
Person.findOne({name: 'Doug'},function(error, per){
	console.log(per);
	if(per == null){
		console.log("not found, saving");
		person.save(function(error,data){
			if (error){
				console.log(error);
			} else {
				console.log(data);
			}
		});
	} else{
		console.log("already exists");
	}
});

//console.log(Person.find());

// conn.disconnect(function(){}
// 	console.log('disconnected');
//});