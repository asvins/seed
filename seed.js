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
function create_user(post_data) {
	make_request('localhost', '/api/registration', '8001', 'POST', post_data);
}

function update_medic(put_data) {
	make_request('localhost', '/api/medic', '8006', 'PUT', put_data);
}

function update_pharmacist(put_data) {
	make_request('localhost', '/api/pharmacist', '8006', 'PUT', put_data);
}

function create_medication(post_data) {
	make_request('localhost', '/api/medications', '8006', 'POST', put_data);
}

/*
 *	Create all initial data on all services needed.
 */
(function(){

	// Medics
	var medic1 = {
		email: 'asvins.poli@gmail.com',
		first_name: 'Dr',
		last_name: 'Medic 100',
		scope: 'medic',
		password: '123456789',
		cpf: '388.675.980-45',
		crm: '2345967',
		specialty: 1,
	}


	// Medications
	var medication1 = {
		active_agent: '', 
		label: '', 
		dosage: '', 
		bula: '', 
		type: '', 
		intake_mean: '', 
		name: '', 
		br_register: '', 
		terapeutic_class: '', 
		manufecturer: '', 
		receipt_ok: ''
	}

	// function calls
	create_user(medic1);

}());
