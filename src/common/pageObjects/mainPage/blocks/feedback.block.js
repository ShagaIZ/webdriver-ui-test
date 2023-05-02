
class FeedbackBlock {
	get iconNameField() {
		return $('[class="fa fa-id-card"]');
	}

	get nameField() {
		return $('[data-testid="ContactName"]');
	}

	get iconEmailField() {
		return $('div.container-fluid div.row.contact:nth-child(5) div.col-sm-5:nth-child(2) form:nth-child(1) div.input-group.mb-3:nth-child(2) div.input-group-prepend span.input-group-text > span.fa.fa-envelope');
	}

	get emailField() {
		return $('[data-testid="ContactEmail"]');
	}

	get iconPhoneField() {
		return $('[class="fa fa-phone"]');
	}

	get phoneField() {
		return $('[data-testid="ContactPhone"]');
	}

	get iconSubjectField() {
		return $('div.container-fluid div.row.contact:nth-child(5) div.col-sm-5:nth-child(2) form:nth-child(1) div.input-group.mb-3:nth-child(4) div.input-group-prepend span.input-group-text > span.fa.fa-envelope');
	}

	get subjectField() {
		return $('[data-testid="ContactSubject"]');
	}

	get messageTitle() {
		return $('span=Message');
	}

	get messageField() {
		return $('aria/Description');
	}

	get submitButton() {
		return $('button=Submit');
	}
}

export default new FeedbackBlock();
