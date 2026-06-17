// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile10 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile11 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile12 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile13 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile14 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile15 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "win page":
            case "level2":return tiles.createTilemap(hex`0a00070001010101010101010101010203040101010101010101010101010101010101010506070101010101010101010101010101010101010101010101010101010101010101010101`, img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
`, [myTiles.transparency16,myTiles.tile2,myTiles.tile9,myTiles.tile11,myTiles.tile12,myTiles.tile13,myTiles.tile14,myTiles.tile15], TileScale.Sixteen);
            case "level0":
            case "level3":return tiles.createTilemap(hex`0a00070002020202020202020202010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010103030303030303030303`, img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
`, [myTiles.transparency16,myTiles.tile4,myTiles.tile7,myTiles.tile8], TileScale.Sixteen);
            case "level1":
            case "level1":return tiles.createTilemap(hex`0a00070002020202020202020202010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010103030303030303030303`, img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
`, [myTiles.transparency16,myTiles.tile4,myTiles.tile7,myTiles.tile8], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile":
            case "tile3":return tile3;
            case "road":
            case "tile1":return tile1;
            case "myTile1":
            case "tile4":return tile4;
            case "myTile2":
            case "tile5":return tile5;
            case "myTile3":
            case "tile6":return tile6;
            case "myTile4":
            case "tile7":return tile7;
            case "myTile5":
            case "tile8":return tile8;
            case "myTile7":
            case "tile10":return tile10;
            case "y":
            case "tile9":return tile9;
            case "myTile8":
            case "tile11":return tile11;
            case "myTile9":
            case "tile12":return tile12;
            case "myTile10":
            case "tile13":return tile13;
            case "myTile11":
            case "tile14":return tile14;
            case "myTile12":
            case "tile15":return tile15;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
