
 class MainPage {
   get LetHack(){
        return $('button=Let me hack!')
   }
    get logoHotel(){
        return $('.hotel-logoUrl')
    }
    get infoText(){
        return $('.col-sm-10')
    }
    get iconNameField(){
        return $('[class="fa fa-id-card"]')
    }
    get nameField(){
        return $('[data-testid="ContactName"]')
    }

    get iconEmailField(){
        return $('div.container-fluid div.row.contact:nth-child(5) div.col-sm-5:nth-child(2) form:nth-child(1) div.input-group.mb-3:nth-child(2) div.input-group-prepend span.input-group-text > span.fa.fa-envelope')
    }
    get emailField(){
        return $('[data-testid="ContactEmail"]')
    }
    get iconPhoneField(){
        return $('[class="fa fa-phone"]')
    }
    get phoneField(){
        return $('[data-testid="ContactPhone"]')
    }
    get iconSubjectField(){
        return $('div.container-fluid div.row.contact:nth-child(5) div.col-sm-5:nth-child(2) form:nth-child(1) div.input-group.mb-3:nth-child(4) div.input-group-prepend span.input-group-text > span.fa.fa-envelope')
    }
    get subjectField(){
        return $('[data-testid="ContactSubject"]')
    }
    get messageTitle(){
        return $('span=Message')
    }
    get messageField(){
        return $('aria/Description')
    }
    get submitButton(){
        return $('button=Submit')
    }

    get singleBlock(){
        return $('[class="col-sm-7"]')
    }
    get titleRooms(){
        return $('h2=Rooms')
    }
    get titleSingle(){
        return $('h3=single')
    }
    get roomsPic(){
        return $('[class="img-responsive hotel-img"]')
    }

    get iconMan(){
        return $('[class="fa fa-wheelchair wheelchair"]')
    }

    get bookThisRoomButton(){
        return $('[class="btn btn-outline-primary float-right openBooking"]')
    }

    get tvItem(){
        return $('li=TV')
    }

    get wififItem(){
        return $('li=WiFi')
    }

    get saveItem(){
        return $('li=TV')
    }

    get nameCompany(){
        return $('p=Shady Meadows B&B')
    }

    get addressCompany(){
        return $('p=The Old Farmhouse, Shady Street, Newfordburyshire, NE1 410S')
    }

    get phoneNumberCompany(){
        return $('p=012345678901')
    }

    get emailCompany(){
        return $('p=fake@fakeemail.com')
    }

    get iconEmailCompany(){
        return $('div.container-fluid div.row.contact:nth-child(5) div.col-sm-5:nth-child(3) p:nth-child(4) > span.fa.fa-envelope')
    }

    get iconNameCompany(){
        return $('[class="fa fa-home"]')
    }

    get iconPhoneNumberCompany(){
        return $('div.container-fluid div.row.contact:nth-child(5) div.col-sm-5:nth-child(3) p:nth-child(3) > span.fa.fa-phone')
    }

    get mapPicture(){
        return $('[class="map"]')
    }

    get footerTextBlock(){
        return $('[class="text-muted"]')
    }

    get mark(){
        return $('a=Mark Winteringham')
    }

    get richard(){
        return $('a=Richard Bradshaw')
    }

    get cookie(){
        return $('a=Cookie-Policy')
    }

    get privacy(){
        return $('a=Privacy-Policy')
    }

    get admin(){
        return $('a=Admin panel')
    }

    get automation(){
        return $('a=Automation in Testing')
    }
   
}

export default new MainPage()