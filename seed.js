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
	
	/*
	 *	Medics
	 */
	var medics [
		{
			email: 'roberto.carvalho@asvins.com.br',
			first_name: 'Roberto',
			last_name: 'Carvalho',
			scope: 'medic',
			password: '123456789',
			cpf: '388.675.980-45',
			crm: '2345967',
			specialty: 1,
		},
		{
			email: 'silvia.gastro@asvins.com.br',
			first_name: 'Silvia',
			last_name: 'Teles',
			scope: 'medic',
			password: '123456789',
			cpf: '230.543.765-50',
			crm: '34512',
			specialty: 2,
		},	 
		{
			email: 'aberlto@asvins.com.br',
			first_name: 'Carlos Alberto',
			last_name: 'Garcia',
			scope: 'medic',
			password: '123456789',
			cpf: '125.678.390-10',
			crm: '23478',
			specialty: 3,
		},
		{
			email: 'silva@asvins.com.br',
			first_name: 'Ana Costa',
			last_name: 'Silva',
			scope: 'medic',
			password: '123456789',
			cpf: '140.568.450-38',
			crm: '86532',
			specialty: 4,
		},
		{
			email: 'camargo@asvins.com.br',
			first_name: 'Vera Lucia',
			last_name: 'Camargo',
			scope: 'medic',
			password: '123456789',
			cpf: '060.743.123-77',
			crm: '123548',
			specialty: 5,
		}
	]

	/*
	 *	Medications
	 */
	var medications = [
		{
			active_agent: 'Nitrofural', 
			label: 'red', 
			dosage: '2mg', 
			bula: 'http://www.anvisa.gov.br/datavisa/fila_bula/frmVisualizarBula.asp?pNuTransacao=786192015&pIdAnexo=2424814', 
			type: 'ointment', 
			intake_mean: 'Uso tópico', 
			name: 'Furacin', 
			br_register: '1009301370333', 
			terapeutic_class: 'Antiinfeccioso', 
			manufecturer: 'Mantecorp', 
			receipt_ok: '1'
		},
		{
			active_agent: 'Dipirona Sodica', 
			label: 'none', 
			dosage: '300mg', 
			bula: 'http://www.onofre.com.br/BACKOFFICE/Uploads/Bula/020494.pdf', 
			type: 'pill', 
			intake_mean: 'Via oral', 
			name: 'Neosaldina', 
			br_register: '1063902310082', 
			terapeutic_class: 'Analgésico', 
			manufecturer: 'Takeda', 
			receipt_ok: '0'
		},
		{
			active_agent: 'Amoxicilina', 
			label: 'red', 
			dosage: '250mg', 
			bula: 'http://www.onofre.com.br/backoffice/uploads/bula/051047.pdf', 
			type: 'pill', 
			intake_mean: 'Via oral', 
			name: 'Amoxil', 
			br_register: '1010700030399', 
			terapeutic_class: 'Antibiótico', 
			manufecturer: 'GSK', 
			receipt_ok: '1'
		},
		{
			active_agent: 'Nimesulida', 
			label: 'red', 
			dosage: '100mg', 
			bula: 'http://www.medicinanet.com.br/bula/6900/nisulid_nimesulida.htm', 
			type: 'pill', 
			intake_mean: 'Via oral', 
			name: 'Nisulid', 
			br_register: '1057303010052', 
			terapeutic_class: 'Antiinflamatório', 
			manufecturer: 'Ache', 
			receipt_ok: '0'
		},
		{
			active_agent: 'Omeprazol', 
			label: 'yellow', 
			dosage: '20mg', 
			bula: 'http://www.medley.com.br/portal/bula/Omeprazol%20capsulas.pdf', 
			type: 'pill', 
			intake_mean: 'Via oral', 
			name: 'Omeprazol', 
			br_register: '1018103370038', 
			terapeutic_class: 'Anti-úlceroso', 
			manufecturer: 'Medley', 
			receipt_ok: '0'
		},
		{
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
		},
		{
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
		},
		{
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
		},
		{
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
		},
		{
			active_agent: 'Diclofenaco Potassico', 
			label: 'red', 
			dosage: '50mg', 
			bula: 'https://portal.novartis.com.br/UPLOAD/ImgConteudos/2599.pdf', 
			type: 'pill', 
			intake_mean: 'Via oral', 
			name: 'Cataflam', 
			br_register: '1006800380376', 
			terapeutic_class: 'Antiinflamatório', 
			manufecturer: 'Novartis', 
			receipt_ok: '0'
		},
		{
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
		},
		{
			active_agent: 'Diltiazem', 
			label: 'red', 
			dosage: '90mg', 
			bula: 'http://www.boehringer-ingelheim.com.br/content/dam/internet/opu/br_PT/documents/bibrnet_bula_cardizem_sr_paciente_capsulas.pdf', 
			type: 'pill', 
			intake_mean: 'Via oral', 
			name: 'Cardizem SR ', 
			br_register: '1036700620237', 
			terapeutic_class: 'Cardiovascular', 
			manufecturer: 'Boehringer Ingelheim ', 
			receipt_ok: '0'
		},
		{
			active_agent: 'Vildagliptina', 
			label: 'red', 
			dosage: '50mg', 
			bula: 'https://portal.novartis.com.br/upload/imgconteudos/1813.pdf', 
			type: 'pill', 
			intake_mean: 'Via oral', 
			name: 'Galvus', 
			br_register: '1006810500048', 
			terapeutic_class: 'Diabetes', 
			manufecturer: 'Novartis', 
			receipt_ok: '0'
		},
		{
			active_agent: 'Insulina Glargina', 
			label: 'red', 
			dosage: '100u/ml', 
			bula: 'www.4bio.com.br/download/pdf/121/121-lantus-solostar.pdf/', 
			type: 'liquid', 
			intake_mean: 'Injetável', 
			name: 'Lantus', 
			br_register: '1006810500048', 
			terapeutic_class: 'Diabetes', 
			manufecturer: 'Sanofi', 
			receipt_ok: '1'
		},
		{
			active_agent: 'Naproxeno Sódico', 
			label: 'red', 
			dosage: '550mg', 
			bula: 'http://www.bayerconsumer.com.br/html/bulas/publico_geral/FLANAX_Unificada.pdf', 
			type: 'pill', 
			intake_mean: 'Via oral', 
			name: 'Flanax', 
			br_register: '1705600470122', 
			terapeutic_class: 'Antiinflamatório', 
			manufecturer: 'Bayer', 
			receipt_ok: '0'
		},
		{
			active_agent: 'Rosuvastatina Calcica', 
			label: 'red', 
			dosage: '10mg', 
			bula: 'http://www.anvisa.gov.br/datavisa/fila_bula/frmVisualizarBula.asp?pNuTransacao=2110532015&pIdAnexo=2502606', 
			type: 'pill', 
			intake_mean: 'Via oral', 
			name: 'Trezor', 
			br_register: '1057304140049', 
			terapeutic_class: 'Colesterol', 
			manufecturer: 'Ache', 
			receipt_ok: '0'
		},
		{
			active_agent: 'Cloridrato de Ambroxol', 
			label: 'none', 
			dosage: '30mg', 
			bula: 'http://www.medicinanet.com.br/bula/3512/mucosolvan.htm', 
			type: 'liquid', 
			intake_mean: 'Via oral', 
			name: 'Mucosolvan', 
			br_register: '1036700730156', 
			terapeutic_class: 'Expectorante', 
			manufecturer: 'Boehringer Ingelheim', 
			receipt_ok: '0'
		},
		{
			active_agent: 'Ciprofloxacino', 
			label: 'red', 
			dosage: '500mg', 
			bula: 'http://www.medley.com.br/portal/bula/cloridrato_de_ciprofloxacino_comp_rev.pdf', 
			type: 'pill', 
			intake_mean: 'Via oral', 
			name: 'Ciprofloxacino', 
			br_register: '100430739', 
			terapeutic_class: 'Antibiótico', 
			manufecturer: 'Sandoz', 
			receipt_ok: '1'
		},
		{
			active_agent: 'Lisado Bacteriano', 
			label: 'red', 
			dosage: '3mg', 
			bula: 'http://www.anvisa.gov.br/datavisa/fila_bula/frmVisualizarBula.asp?pNuTransacao=361012014&pIdAnexo=1938660', 
			type: 'pill', 
			intake_mean: 'Via oral', 
			name: 'Estimoral', 
			br_register: '1045401680024', 
			terapeutic_class: 'Descongestionante', 
			manufecturer: 'Daiichi Sankyo', 
			receipt_ok: '0'
		},
		{
			active_agent: 'Paracetamol', 
			label: 'none', 
			dosage: '500mg', 
			bula: 'https://www.tylenol.com.br/system/files/tylenol_500_750_0.pdf', 
			type: 'pill', 
			intake_mean: 'Via oral', 
			name: 'Tylenol', 
			br_register: '1123633260445', 
			terapeutic_class: 'Analgésico', 
			manufecturer: 'Johnson & Johnson', 
			receipt_ok: '0'
		},
		{
			active_agent: 'Hemifumarato de Bisoprolol', 
			label: 'red', 
			dosage: '2,5mg', 
			bula: 'http://www.merck.com.br/country.br/pt/images/Concor_Bula_Paciente_06.11.2014_tcm512_134993.pdf?Version=', 
			type: 'pill', 
			intake_mean: 'Via oral', 
			name: 'Concor', 
			br_register: '1008901940128', 
			terapeutic_class: 'Anti-hipertensivo', 
			manufecturer: 'Merck', 
			receipt_ok: '1'
		},	
		{
			active_agent: 'Alopurinol', 
			label: 'red', 
			dosage: '100mg', 
			bula: 'http://www.netfarma.com.br/geraBula.asp?NomeArquivoBula=P00008APH00.pdf', 
			type: 'pill', 
			intake_mean: 'Via oral', 
			name: 'Zyloric', 
			br_register: '1002500780015', 
			terapeutic_class: 'Gota', 
			manufecturer: 'Aspen', 
			receipt_ok: '0'
		}	
	]


	/*
	 *	Creation
	 */
	create_user(medic1);

}());
