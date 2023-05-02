
class FooterBlock {
	get mapPicture() {
		return $('[class="map"]');
	}

	get footerTextBlock() {
		return $('[class="text-muted"]');
	}

	get mark() {
		return $('a=Mark Winteringham');
	}

	get richard() {
		return $('a=Richard Bradshaw');
	}

	get cookie() {
		return $('a=Cookie-Policy');
	}

	get privacy() {
		return $('a=Privacy-Policy');
	}

	get admin() {
		return $('a=Admin panel');
	}

	get automation() {
		return $('a=Automation in Testing');
	}
}

export default new FooterBlock();
