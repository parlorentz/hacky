/* eslint-disable */

import $ from 'jquery';

function get(options) {

	var defaultOptions = {
		traditional:true,
		type: 'GET',
		beforeSend,
		path: ''
	}

	if (options.data) {
		defaultOptions.dataType = "json"
		defaultOptions.contentType = "application/json;charset=utf-8"
	}

	var opt = Object.assign(defaultOptions, options)

	opt.url = settings.apiURL() + getRoute(opt.route) + opt.path
	opt.params = options.data;

	let req = $.ajax(opt);
	req.fail((res) => {
		if (res.status === 401) {
			redirectToLoginPage();
		}
	});
	return req;
}

export default {
	get,
};
