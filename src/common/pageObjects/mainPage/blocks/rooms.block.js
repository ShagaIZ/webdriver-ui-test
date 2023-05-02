
class RoomsBlock {
	get singleBlock() {
		return $('[class="col-sm-7"]');
	}

	get titleRooms() {
		return $('h2=Rooms');
	}

	get titleSingle() {
		return $('h3=single');
	}

	get roomsPic() {
		return $('[class="img-responsive hotel-img"]');
	}

	get iconMan() {
		return $('[class="fa fa-wheelchair wheelchair"]');
	}

	get bookThisRoomButton() {
		return $('[class="btn btn-outline-primary float-right openBooking"]');
	}

	get tvItem() {
		return $('li=TV');
	}

	get wififItem() {
		return $('li=WiFi');
	}

	get saveItem() {
		return $('li=TV');
	}
}

export default new RoomsBlock();
