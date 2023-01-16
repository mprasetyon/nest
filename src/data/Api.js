import axios from "axios"
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const API_BASE = "http://103.108.126.161/nestapp/api/"; 
var bearer = cookies.get('token');
//var bearer = "49|xdT6MG0pwRt9ripSp3pzJM967bX0cXOlWtSxoVoi";
//console.log("bearer "+bearer);

const api = {
	// ================ AUTH ========================== //
	async login(email,password) {
		return await axios({
	    	method:'post',
	    	url: API_BASE+'login',	    	
	    	data:{
	    		email: email,
		    	password: password		    	
	    	},	    	
	    }).then(function (response) {
		    return response.data;
		});	

	},
	async login_google() {
		return await axios({	    	
	    	url: API_BASE+'login/google/',
	    	headers: {'Authorization': 'Bearer '+bearer},	    	
	    }).then(function (response) {
		    return response.data;
		}).catch(function (error) {
		    return "error";
		});	

	},
	async login_facebook() {
    return await axios({
      url: API_BASE + "login/facebook/",
      headers: { Authorization: "Bearer " + bearer },
    })
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        return "error";
      });
  },
	async register(name,email,password,c_password) {
		return await axios({
	    	method:'post',
	    	url: API_BASE+'register',	    	
	    	data:{
	    		name: name,
	    		email: email,
		    	password: password,
		    	c_password: c_password
	    	},	    	
	    }).then(function (response) {
		    return response.data;
		});	

	},
	async update_profile(name,password,phone_number,email,photo) {
		return await axios({
	    	method:'post',
	    	url: API_BASE+'update-profile?_method=put',	    	
	    	data:{
	    		name: name,
		    	password: password,
		    	phone_number: phone_number,
		    	email: email,
		    	photo: photo
	    	},	    	
	    }).then(function (response) {
		    return response.data;
		});	

	},
	async forgot_password(email) {
		return await axios({
	    	method:'post',
	    	url: API_BASE+'forgot-password',	    	
	    	data:{
	    		email: email,
	    	},	    	
	    }).then(function (response) {
		    return response.data;
		});	

	},
	async check_code_forgot_password(code) {
		return await axios({
	    	method:'post',
	    	url: API_BASE+'check-code',	    	
	    	data:{
	    		code: code,
	    	},	    	
	    }).then(function (response) {
		    return response.data;
		});	

	},
	async reset_password(code,password,c_password) {
		return await axios({
	    	method:'post',
	    	url: API_BASE+'reset-password',	    	
	    	data:{
	    		code: code,
	    		password: password,
		    	c_password: c_password
	    	},	    	
	    }).then(function (response) {
		    return response.data;
		});	

	},
	// ================ PROPERTIES ========================== //
	async properties() {
		return await axios({	    	
	    	url: API_BASE+'properties',
	    	headers: {'Authorization': 'Bearer '+bearer},	    	
	    }).then(function (response) {
		    return response.data;
		}).catch(function (error) {
		    return "error";
		});	

	},
	async property(id) {
		return await axios({	    	
	    	url: API_BASE+'properties/'+id,
	    	headers: {'Authorization': 'Bearer '+bearer},	    	
	    }).then(function (response) {
		    return response.data;
		}).catch(function (error) {
		    return "error";
		});	

	},
	async property_category() {
		return await axios({	    	
	    	url: API_BASE+'properties-with-category',
	    	headers: {'Authorization': 'Bearer '+bearer},	    	
	    }).then(function (response) {
		    return response.data;
		}).catch(function (error) {
		    return "error";
		});	

	},

	// ================ DASHBOARD ========================== //
	async dashboard() {
		return await axios({	    	
	    	url: API_BASE+'dashboard',
	    	headers: {'Authorization': 'Bearer '+bearer},	    	
	    }).then(function (response) {
		    return response.data;
		}).catch(function (error) {
		    return "error";
		});	

	},
	async dashboard_asset() {
		return await axios({	    	
	    	url: API_BASE+'dashboard/assets',
	    	headers: {'Authorization': 'Bearer '+bearer},	    	
	    }).then(function (response) {
		    return response.data;
		}).catch(function (error) {
		    return "error";
		});	

	},
	async dashboard_dividen() {
		return await axios({	    	
	    	url: API_BASE+'dashboard/dividen',
	    	headers: {'Authorization': 'Bearer '+bearer},	    	
	    }).then(function (response) {
		    return response.data;
		}).catch(function (error) {
		    return "error";
		});	

	},
	async dashboard_transaction() {
		return await axios({	    	
	    	url: API_BASE+'dashboard/transaction',
	    	headers: {'Authorization': 'Bearer '+bearer},	    	
	    }).then(function (response) {
		    return response.data;
		}).catch(function (error) {
		    return "error";
		});	

	},
	async dashboard_portofolio() {
		return await axios({	    	
	    	url: API_BASE+'dashboard/portofolio',
	    	headers: {'Authorization': 'Bearer '+bearer},	    	
	    }).then(function (response) {
		    return response.data;
		}).catch(function (error) {
		    return "error";
		});	

	},
	// ================ TEAMS ========================== //
	async team(id) {
		return await axios({	    	
	    	url: API_BASE+'teams/'+id,
	    	headers: {'Authorization': 'Bearer '+bearer},	    	
	    }).then(function (response) {
		    return response.data;
		}).catch(function (error) {
		    return "error";
		});	

	},
	async teams() {
		return await axios({	    	
	    	url: API_BASE+'teams',
	    	headers: {'Authorization': 'Bearer '+bearer},	    	
	    }).then(function (response) {
		    return response.data;
		}).catch(function (error) {
		    return "error";
		});	

	},
	// ================ DOCUMENTS ========================== //
	async check_document_status() {
		return await axios({	    	
	    	url: API_BASE+'check-document-status',
	    	headers: {'Authorization': 'Bearer '+bearer},	    	
	    }).then(function (response) {
		    return response.data;
		}).catch(function (error) {
		    return "error";
		});	

	},
	async sign_document() {
		return await axios({
	    	method:'post',
	    	url: API_BASE+'sign-document',	    	
	    	headers: {'Authorization': 'Bearer '+bearer},	    	
	    }).then(function (response) {
		    return response.data;
		}).catch(function (error) {
		    return "error";
		});	

	},
	// ================ VERIFICATION ========================== //
	async verification(data) {
		return await axios({
	    	method:'post',
	    	url: API_BASE+'verification',	    	
	    	data:{
	    		identity_no: data.identity_no,
				identity_name: data.identity_name,
				identity_dob: data.identity_dob,
				npwp_no: data.npwp_no,
				income_per_year: data.income_per_year,
				occupation: data.occupation,
				source_of_funds: data.source_of_funds,
				biological_mother_name: data.biological_mother_name
	    	},	
	    	headers: {'Authorization': 'Bearer '+bearer},    	
	    }).then(function (response) {
		    return response.data;
		}).catch(function (error) {
		    return "error";
		});	

	},
	async check_verification() {
		return await axios({
	    	method:'post',
	    	url: API_BASE+'check-verification',	    	
	    	headers: {'Authorization': 'Bearer '+bearer},	    	
	    }).then(function (response) {
		    return response.data;
		}).catch(function (error) {
		    return "error";
		});	

	},
	// ================ OTP =================================== //
	async request_otp() {
		return await axios({
	    	method:'post',
	    	url: API_BASE+'request-otp',	    	
	    	headers: {'Authorization': 'Bearer '+bearer},	    	
	    }).then(function (response) {
		    return response.data;
		}).catch(function (error) {
		    return "error";
		});	

	},
	async verify_otp(otp) {
		return await axios({
	    	method:'post',
	    	url: API_BASE+'verify-otp',	    	
	    	data:{
	    		otp: otp,
	    	},	
	    	headers: {'Authorization': 'Bearer '+bearer},    	
	    }).then(function (response) {
		    return response.data;
		}).catch(function (error) {
		    return "error";
		});	

	},

};
export default api;

//module.exports = api;