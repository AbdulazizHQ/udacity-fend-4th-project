import { checkUrl } from '../src/client/js/urlCheck'

describe("Testing the URL checking functionalty", () => {
    
    test("Testing checkUrl() with valid url", () => {
           expect(checkUrl("google.com")).toBeTruthy();
    })

    test("Testing checkUrl() with an invalid url", () => {
        expect(checkUrl("an invalid url")).toBeFalsy();
    })
});