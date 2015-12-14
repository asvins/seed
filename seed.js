var http = require('http');

function make_request(host, path, port, method, request_body){
	request_body = JSON.stringify(request_body);
	var	headers = {
			'Content-Type': 'application/json',
			'Content-Length': request_body.length,
			'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE0NDMyNzQyODUsImlzcyI6Ind3dy5hc3ZpbnMuY29tLmJyIiwic2NvcGUiOiJhZG1pbiIsInN1YiI6InZpbmljaXVzQGFzdmlucy5jb20uYnIifQ.LeovKEWm806y-t0oWTYV9QVmynahlRM50Hw3Bcg-MHI'
		}
	
	var options = {
		host: host,
		path: path,
		port: port,
		method: method,
		headers: headers
	}

	callback = function(response) {
		var str = ''
		response.on('data', function (chunk) {
			str += chunk;
		});

		response.on('end', function () {
			console.log(str);
		});
	}

	var req = http.request(options, callback);
	req.write(request_body);
	req.end();
}

// register medics;
function create_user(email, first_name, last_name, scope, password) {
	var post_data = {
		email: email,
		first_name: first_name,
		last_name: last_name,
		scope: scope,
		password: password
	}

	make_request('localhost', '/api/registration', '8001', 'POST', post_data);
}

function update_medic(cpf, crm, specialty) {

}

function update_pharmacist() {

}

function create_medication(active_agent, label, dosage, bula, type, intake_mean, name, br_register, terapeutic_class, manufecturer, receipt_ok) {

}

/*
 *	Create all initial data on all services needed.
 */
(function(){
	create_user('asvins.poli@gmail.com', 'Dr', 'Medic 99', 'medic', '123456789');
}());
