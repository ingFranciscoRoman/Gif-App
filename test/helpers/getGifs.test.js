import { getGifs } from "../../src/helpers/getGifs";

describe('Pruebas en getGifs()', () => {
    test('Debe de retornar un arreglo de gifs', async () => {

        const gifts = await getGifs('One Punch');
        expect( gifts.length ).toBeGreaterThan( 0 );
        expect( gifts[0] ).toEqual({
            id: expect.any( String ),
            title: expect.any( String ),
            url: expect.any( String ),
        });

    });
});
