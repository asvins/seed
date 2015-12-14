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
	
	var medication2 = {
		active_agent: 'Dipirona Sodica', 
		label: 'none', 
		dosage: '300mg', 
		bula: 'http://www.onofre.com.br/BACKOFFICE/Uploads/Bula/020494.pdf', 
		type: 'pill', 
		intake_mean: 'oral', 
		name: 'Neosaldina', 
		br_register: '1063902310082', 
		terapeutic_class: 'Analgésico', 
		manufecturer: 'Takeda', 
		receipt_ok: '0'
	}
	
	var medication3 = {
		active_agent: 'Amoxicilina', 
		label: 'red', 
		dosage: '250mg', 
		bula: 'http://www.onofre.com.br/backoffice/uploads/bula/051047.pdf', 
		type: 'pill', 
		intake_mean: 'oral', 
		name: 'Amoxil', 
		br_register: '1010700030399', 
		terapeutic_class: 'Antibiótico', 
		manufecturer: 'GSK', 
		receipt_ok: '1'
	}
	
	
	var medication4 = {
		active_agent: 'Nimesulida', 
		label: 'red', 
		dosage: '100mg', 
		bula: 'http://www.medicinanet.com.br/bula/6900/nisulid_nimesulida.htm', 
		type: 'pill', 
		intake_mean: 'oral', 
		name: 'Nisulid', 
		br_register: '1057303010052', 
		terapeutic_class: 'Antiinflamatório', 
		manufecturer: 'Ache', 
		receipt_ok: '0'
	}
	
	var medication5 = {
		active_agent: 'Omeprazol', 
		label: 'yellow', 
		dosage: '20mg', 
		bula: 'http://www.medley.com.br/portal/bula/Omeprazol%20capsulas.pdf', 
		type: 'pill', 
		intake_mean: 'oral', 
		name: 'Omeprazol', 
		br_register: '1018103370038', 
		terapeutic_class: 'Anti-úlceroso', 
		manufecturer: 'Medley', 
		receipt_ok: '0'
	}
	
	var medication6 = {
		active_agent: 'Cetoconazol', 
		label: 'none', 
		dosage: '20mg', 
		bula: 'http://www.medicinanet.com.br/bula/5193/trok.htm', 
		type: 'ointment', 
		intake_mean: 'Uso tópico', 
		name: 'Trok', 
		br_register: '1004308190031', 
		terapeutic_class: 'Antifúngico', 
		manufecturer: 'Eurofarma', 
		receipt_ok: '0'
	}
	
	var medication7 = {
		active_agent: 'Ibuprofeno', 
		label: 'none', 
		dosage: '400mg', 
		bula: 'http://www.pfizer.com.br/sites/g/files/g10010996/f/product_attachments/AdvilCapsulas.pdf', 
		type: 'pill', 
		intake_mean: 'Via oral', 
		name: 'Advil', 
		br_register: '1211000560182', 
		terapeutic_class: 'Analgésico', 
		manufecturer: 'Pfizer', 
		receipt_ok: '0'
	}
	
	var medication8 = {
		active_agent: 'Carbonato de Calcio + Bicarbonato de Sodio + Alginato de sódio', 
		label: 'none', 
		dosage: '50mg', 
		bula: 'http://www.gaviscon.com.br/media/286427/188_gaviscon_bula_verso_2-01.jpg', 
		type: 'liquid', 
		intake_mean: 'Via oral', 
		name: 'Gaviscon', 
		br_register: '1739000020015', 
		terapeutic_class: 'Antiácido', 
		manufecturer: 'Reckitt Benckisser', 
		receipt_ok: '0'
	}
	
	var medication9 = {
		active_agent: 'Loratadina', 
		label: 'none', 
		dosage: '20mg', 
		bula: 'http://www.medicinanet.com.br/bula/1498/claritin.htm', 
		type: 'pill', 
		intake_mean: 'Via oral', 
		name: 'Claritin', 
		br_register: '1009301690021', 
		terapeutic_class: 'Alergia', 
		manufecturer: 'MSD', 
		receipt_ok: '0'
	}
	
	var medication10 = {
		active_agent: 'Loratadina', 
		label: 'none', 
		dosage: '20mg', 
		bula: 'http://www.medicinanet.com.br/bula/1498/claritin.htm', 
		type: 'pill', 
		intake_mean: 'Via oral', 
		name: 'Claritin', 
		br_register: '1009301690021', 
		terapeutic_class: 'Alergia', 
		manufecturer: 'MSD', 
		receipt_ok: '0'
	}
	
	var medication11 = {
		active_agent: 'Minoxidil', 
		label: 'red', 
		dosage: '10mg', 
		bula: 'http://www.farmadelivery.com.br/media/upload/pdf/BULAS/PFIZER/Loniten.pdf', 
		type: 'pill', 
		intake_mean: 'Via oral', 
		name: 'Loniten', 
		br_register: '1238900070043', 
		terapeutic_class: 'Anti-hipertensivo', 
		manufecturer: 'Pfizer', 
		receipt_ok: '0'
	}
	
	var medication12 = {
		active_agent: 'Minoxidil', 
		label: 'red', 
		dosage: '10mg', 
		bula: 'http://www.farmadelivery.com.br/media/upload/pdf/BULAS/PFIZER/Loniten.pdf', 
		type: 'pill', 
		intake_mean: 'Via oral', 
		name: 'Loniten', 
		br_register: '1238900070043', 
		terapeutic_class: 'Anti-hipertensivo', 
		manufecturer: 'Pfizer', 
		receipt_ok: '0'
	}	
	// function calls
	create_user(medic1);

}());
