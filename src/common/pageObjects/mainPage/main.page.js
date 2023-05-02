
class MainPage {
	get LetHack() {
		return $('button=Let me hack!');
	}

	get logoHotel() {
		return $('.hotel-logoUrl');
	}

	get infoText() {
		return $('.col-sm-10');
	}
}

export default new MainPage();
