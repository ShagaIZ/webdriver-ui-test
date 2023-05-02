
class ContactsBlock {
	get nameCompany() {
		return $('p=Shady Meadows B&B');
	}

	get addressCompany() {
		return $('p=The Old Farmhouse, Shady Street, Newfordburyshire, NE1 410S');
	}

	get phoneNumberCompany() {
		return $('p=012345678901');
	}

	get emailCompany() {
		return $('p=fake@fakeemail.com');
	}

	get iconEmailCompany() {
		return $('div.container-fluid div.row.contact:nth-child(5) div.col-sm-5:nth-child(3) p:nth-child(4) > span.fa.fa-envelope');
	}

	get iconNameCompany() {
		return $('[class="fa fa-home"]');
	}

	get iconPhoneNumberCompany() {
		return $('div.container-fluid div.row.contact:nth-child(5) div.col-sm-5:nth-child(3) p:nth-child(3) > span.fa.fa-phone');
	}
}

export default new ContactsBlock();
