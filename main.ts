namespace SpriteKind {
    export const Key1 = SpriteKind.create()
    export const key3 = SpriteKind.create()
    export const winkey = SpriteKind.create()
}
tiles.setCurrentTilemap(tilemap`level1`)
let mySprite = sprites.create(assets.image`player`, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setPosition(3, 3)
let key = sprites.create(assets.image`key`, SpriteKind.Key1)
let key2 = sprites.create(assets.image`key`, SpriteKind.key3)
let winning_key = sprites.create(assets.image`key`, SpriteKind.winkey)
key.setPosition(150, 108)
key2.setPosition(500, 500)
winning_key.setPosition(500, 500)
forever(function () {
    if (mySprite.overlapsWith(key)) {
        tiles.setCurrentTilemap(tilemap`level1`)
        mySprite.setPosition(145, 3)
        sprites.destroyAllSpritesOfKind(SpriteKind.Key1, effects.confetti, 500)
        key2.setPosition(6, 108)
    }
    if (mySprite.overlapsWith(key2)) {
        tiles.setCurrentTilemap(tilemap`level0`)
        mySprite.setPosition(6, 108)
        sprites.destroyAllSpritesOfKind(SpriteKind.key3, effects.confetti, 500)
        winning_key.setPosition(4, 4)
    }
    if (mySprite.overlapsWith(winning_key)) {
        sprites.destroyAllSpritesOfKind(SpriteKind.winkey, effects.confetti, 500)
        sprites.destroyAllSpritesOfKind(SpriteKind.Player, effects.confetti, 500)
        game.gameOver(true)
    }
})
