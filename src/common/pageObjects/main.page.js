
 class MainPage {
   
    get logoHotel(){
        return $('.hotel-logoUrl')
    }
    
    get infoText(){
        return $('.col-sm-10')
    }
   
}

export default new MainPage()