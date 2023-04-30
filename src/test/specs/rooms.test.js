import RoomsBlock from '../../common/pageObjects/mainPage/blocks/rooms.block.js'
import { text } from '../../common/data/mainData.js'
import { urls } from '../../common/urls.js'




beforeEach(async()=>{
    await browser.url(urls.mainPage)
})

describe('Rooms', () => {

    it('Checkings titles', async () => {
        await expect(RoomsBlock.titleRooms).toBeDisplayed()
        await expect(RoomsBlock.titleSingle).toBeDisplayed()
    })

    it('Checking pictures', async () => {
        await expect(RoomsBlock.roomsPic).toBeDisplayed()
    })

    it('Checking icon man', async () => {
        await expect(RoomsBlock.iconMan).toBeDisplayed()
    })

    it('Checking text of single block', async () => {
        await expect(RoomsBlock.singleBlock).toHaveTextContaining(text.singleBlock)
    })

    it('Checking  button "Book this room"', async () => {
        await expect(RoomsBlock.bookThisRoomButton).toBeDisplayed()
    })

    it('Checking  "TV" item', async () => {
        await expect(RoomsBlock.tvItem).toBeDisplayed()
    })

    it('Checking  "WiFi" item', async () => {
        await expect(RoomsBlock.wififItem).toBeDisplayed()
    })

    it('Checking "Safe" item', async () => {
        await expect(RoomsBlock.saveItem).toBeDisplayed()
    })

})