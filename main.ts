tiles.setCurrentTilemap(tilemap`level1`)
let mySprite = sprites.create(assets.image`player`, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setPosition(4, 4)
