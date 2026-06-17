namespace SpriteKind {
    export const Key1 = SpriteKind.create()
    export const key3 = SpriteKind.create()
    export const winkey = SpriteKind.create()
    export const levelone = SpriteKind.create()
    export const leveltwo = SpriteKind.create()
    export const levelthree = SpriteKind.create()
}
info.onLifeZero(function () {
    game.gameOver(false)
})
info.setLife(3)
tiles.setCurrentTilemap(tilemap`level1`)
let mySprite = sprites.create(assets.image`player`, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setPosition(130, 3)
let key = sprites.create(assets.image`key`, SpriteKind.Key1)
let key2 = sprites.create(assets.image`key`, SpriteKind.key3)
let winning_key = sprites.create(assets.image`key`, SpriteKind.winkey)
key.setPosition(150, 108)
key2.setPosition(500, 500)
winning_key.setPosition(500, 500)
let car1_level1 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 2 2 2 2 2 2 2 2 . . 
    . . . . . 2 c 2 2 2 2 2 2 4 2 . 
    . . . . 2 c c 2 2 2 2 2 2 4 c 2 
    . . d 2 4 c c 2 4 4 4 4 4 4 c c 
    . d 2 2 4 c b e e e e e e e 2 c 
    . 2 2 2 4 b e e b b b e b b e 2 
    . 2 2 2 2 2 e b b b b e b b b e 
    . 2 2 2 2 e 2 2 2 2 2 e 2 2 2 e 
    . 2 d d 2 e f e e e f e e e e e 
    . d d 2 e e e f e e f e e e e e 
    . e e e e e e e f f f e e e e e 
    . e e e e f f f e e e e f f f f 
    . . . e f f f f f e e f f f f f 
    . . . . f f f f . . . . f f f . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.levelone)
let car2_level1 = sprites.create(img`
    . . . . . . . e e e e e . . . . 
    . . . . . e e 2 2 2 2 2 e . . . 
    . . . . e e 2 2 2 2 2 2 2 e . . 
    . . . . e 9 4 4 4 2 2 2 4 b e . 
    . . e e 9 9 4 4 4 4 2 2 4 9 b e 
    . e 2 2 9 9 4 4 4 4 4 2 4 9 9 e 
    e 2 2 2 9 9 2 4 4 4 4 4 2 9 9 e 
    e 2 2 2 9 9 e e e e e e e 9 9 e 
    e 2 2 2 9 b e b b b e b e b 9 e 
    e 2 e e e e b b b b e b b e b e 
    e e 3 3 e e 2 2 2 2 e 2 2 e e e 
    e 3 3 e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e 
    e e e e f f f e e e e f f f e e 
    . e e f f f b f e e f f f b f . 
    . . . . c b b . . . . c b b . . 
    `, SpriteKind.levelone)
let car3_level1 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 6 6 6 6 6 6 6 6 . . 
    . . . . . 6 c 6 6 6 6 6 6 9 6 . 
    . . . . 6 c c 6 6 6 6 6 6 9 c 6 
    . . d 6 9 c c 6 9 9 9 9 9 9 c c 
    . d 6 6 9 c b 8 8 8 8 8 8 8 6 c 
    . 6 6 6 9 b 8 8 b b b 8 b b 8 6 
    . 6 6 6 6 6 8 b b b b 8 b b b 8 
    . 6 6 6 6 8 6 6 6 6 6 8 6 6 6 8 
    . 6 d d 6 8 f 8 8 8 f 8 8 8 8 8 
    . d d 6 8 8 8 f 8 8 f 8 8 8 8 8 
    . 8 8 8 8 8 8 8 f f f 8 8 8 8 8 
    . 8 8 8 8 f f f 8 8 8 8 f f f f 
    . . . 8 f f f f f 8 8 f f f f f 
    . . . . f f f f . . . . f f f . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.levelone)
let car4_level1 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 3 3 3 3 3 3 3 3 . . 
    . . . . . 3 c 3 3 3 3 3 3 d 3 . 
    . . . . 3 c c 3 3 3 3 3 3 d c 3 
    . . d 3 d c c 3 d d d d d d c c 
    . d 3 3 d c b a a a a a a a 3 c 
    . 3 3 3 d b a a b b b a b b a 3 
    . 3 3 3 3 3 a b b b b a b b b a 
    . 3 3 3 3 a 3 3 3 3 3 a 3 3 3 a 
    . 3 d d 3 a f a a a f a a a a a 
    . d d 3 a a a f a a f a a a a a 
    . a a a a a a a f f f a a a a a 
    . a a a a f f f a a a a f f f f 
    . . . a f f f f f a a f f f f f 
    . . . . f f f f . . . . f f f . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.levelone)
let car5_level1 = sprites.create(img`
    . . . . . . . 8 8 8 8 8 . . . . 
    . . . . . 8 8 6 6 6 6 6 8 . . . 
    . . . . 8 8 6 6 6 6 6 6 6 8 . . 
    . . . . 8 9 7 6 6 6 6 6 7 b 8 . 
    . . 8 8 9 9 7 7 6 6 6 6 7 9 b 8 
    . 8 6 6 9 9 7 7 7 6 6 6 7 9 9 8 
    8 6 6 6 9 9 6 7 7 7 7 7 6 9 9 8 
    8 6 6 6 9 9 8 8 8 8 8 8 8 9 9 8 
    8 6 6 6 9 b 8 b b b 8 b 8 b 9 8 
    8 6 8 8 8 8 b b b b 8 b b 8 b 8 
    8 8 3 3 8 8 6 6 6 6 8 6 6 8 8 8 
    8 3 3 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 f f f 8 8 8 8 f f f 8 8 
    . 8 8 f b c c f 8 8 f b c c f . 
    . . . . b b f . . . . b b f . . 
    `, SpriteKind.levelone)
let car6_level1 = sprites.create(img`
    . . . . . . . e e e e e . . . . 
    . . . . . e e 2 2 2 2 2 e . . . 
    . . . . e e 2 2 2 2 2 2 2 e . . 
    . . . . e 9 4 4 4 2 2 2 4 b e . 
    . . e e 9 9 4 4 4 4 2 2 4 9 b e 
    . e 2 2 9 9 4 4 4 4 4 2 4 9 9 e 
    e 2 2 2 9 9 2 4 4 4 4 4 2 9 9 e 
    e 2 2 2 9 9 e e e e e e e 9 9 e 
    e 2 2 2 9 b e b b b e b e b 9 e 
    e 2 e e e e b b b b e b b e b e 
    e e 3 3 e e 2 2 2 2 e 2 2 e e e 
    e 3 3 e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e 
    e e e e f f f e e e e f f f e e 
    . e e f f f b f e e f f f b f . 
    . . . . c b b . . . . c b b . . 
    `, SpriteKind.levelone)
let car7_level1 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 2 2 2 2 2 2 2 2 . . 
    . . . . . 2 c 2 2 2 2 2 2 4 2 . 
    . . . . 2 c c 2 2 2 2 2 2 4 c 2 
    . . d 2 4 c c 2 4 4 4 4 4 4 c c 
    . d 2 2 4 c b e e e e e e e 2 c 
    . 2 2 2 4 b e e b b b e b b e 2 
    . 2 2 2 2 2 e b b b b e b b b e 
    . 2 2 2 2 e 2 2 2 2 2 e 2 2 2 e 
    . 2 d d 2 e f e e e f e e e e e 
    . d d 2 e e e f e e f e e e e e 
    . e e e e e e e f f f e e e e e 
    . e e e e f f f e e e e f f f f 
    . . . e f f f f f e e f f f f f 
    . . . . f f f f . . . . f f f . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.levelone)
let car1_level2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 6 6 6 6 6 6 6 6 . . 
    . . . . . 6 c 6 6 6 6 6 6 9 6 . 
    . . . . 6 c c 6 6 6 6 6 6 9 c 6 
    . . d 6 9 c c 6 9 9 9 9 9 9 c c 
    . d 6 6 9 c b 8 8 8 8 8 8 8 6 c 
    . 6 6 6 9 b 8 8 b b b 8 b b 8 6 
    . 6 6 6 6 6 8 b b b b 8 b b b 8 
    . 6 6 6 6 8 6 6 6 6 6 8 6 6 6 8 
    . 6 d d 6 8 f 8 8 8 f 8 8 8 8 8 
    . d d 6 8 8 8 f 8 8 f 8 8 8 8 8 
    . 8 8 8 8 8 8 8 f f f 8 8 8 8 8 
    . 8 8 8 8 f f f 8 8 8 8 f f f f 
    . . . 8 f f f f f 8 8 f f f f f 
    . . . . f f f f . . . . f f f . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.leveltwo)
let car2_level2 = sprites.create(img`
    . . . . . . . 8 8 8 8 8 . . . . 
    . . . . . 8 8 6 6 6 6 6 8 . . . 
    . . . . 8 8 6 6 6 6 6 6 6 8 . . 
    . . . . 8 9 7 6 6 6 6 6 7 b 8 . 
    . . 8 8 9 9 7 7 6 6 6 6 7 9 b 8 
    . 8 6 6 9 9 7 7 7 6 6 6 7 9 9 8 
    8 6 6 6 9 9 6 7 7 7 7 7 6 9 9 8 
    8 6 6 6 9 9 8 8 8 8 8 8 8 9 9 8 
    8 6 6 6 9 b 8 b b b 8 b 8 b 9 8 
    8 6 8 8 8 8 b b b b 8 b b 8 b 8 
    8 8 3 3 8 8 6 6 6 6 8 6 6 8 8 8 
    8 3 3 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 f f f 8 8 8 8 f f f 8 8 
    . 8 8 f b c c f 8 8 f b c c f . 
    . . . . b b f . . . . b b f . . 
    `, SpriteKind.leveltwo)
let car3_level2 = sprites.create(img`
    . . . . . . . e e e e e . . . . 
    . . . . . e e 2 2 2 2 2 e . . . 
    . . . . e e 2 2 2 2 2 2 2 e . . 
    . . . . e 9 4 4 4 2 2 2 4 b e . 
    . . e e 9 9 4 4 4 4 2 2 4 9 b e 
    . e 2 2 9 9 4 4 4 4 4 2 4 9 9 e 
    e 2 2 2 9 9 2 4 4 4 4 4 2 9 9 e 
    e 2 2 2 9 9 e e e e e e e 9 9 e 
    e 2 2 2 9 b e b b b e b e b 9 e 
    e 2 e e e e b b b b e b b e b e 
    e e 3 3 e e 2 2 2 2 e 2 2 e e e 
    e 3 3 e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e 
    e e e e f f f e e e e f f f e e 
    . e e f f f b f e e f f f b f . 
    . . . . c b b . . . . c b b . . 
    `, SpriteKind.leveltwo)
let car4_level2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 3 3 3 3 3 3 3 3 . . 
    . . . . . 3 c 3 3 3 3 3 3 d 3 . 
    . . . . 3 c c 3 3 3 3 3 3 d c 3 
    . . d 3 d c c 3 d d d d d d c c 
    . d 3 3 d c b a a a a a a a 3 c 
    . 3 3 3 d b a a b b b a b b a 3 
    . 3 3 3 3 3 a b b b b a b b b a 
    . 3 3 3 3 a 3 3 3 3 3 a 3 3 3 a 
    . 3 d d 3 a f a a a f a a a a a 
    . d d 3 a a a f a a f a a a a a 
    . a a a a a a a f f f a a a a a 
    . a a a a f f f a a a a f f f f 
    . . . a f f f f f a a f f f f f 
    . . . . f f f f . . . . f f f . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.leveltwo)
let car5_level2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 2 2 2 2 2 2 2 2 . . 
    . . . . . 2 c 2 2 2 2 2 2 4 2 . 
    . . . . 2 c c 2 2 2 2 2 2 4 c 2 
    . . d 2 4 c c 2 4 4 4 4 4 4 c c 
    . d 2 2 4 c b e e e e e e e 2 c 
    . 2 2 2 4 b e e b b b e b b e 2 
    . 2 2 2 2 2 e b b b b e b b b e 
    . 2 2 2 2 e 2 2 2 2 2 e 2 2 2 e 
    . 2 d d 2 e f e e e f e e e e e 
    . d d 2 e e e f e e f e e e e e 
    . e e e e e e e f f f e e e e e 
    . e e e e f f f e e e e f f f f 
    . . . e f f f f f e e f f f f f 
    . . . . f f f f . . . . f f f . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.leveltwo)
let car6_level2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 6 6 6 6 6 6 6 6 . . 
    . . . . . 6 c 6 6 6 6 6 6 9 6 . 
    . . . . 6 c c 6 6 6 6 6 6 9 c 6 
    . . d 6 9 c c 6 9 9 9 9 9 9 c c 
    . d 6 6 9 c b 8 8 8 8 8 8 8 6 c 
    . 6 6 6 9 b 8 8 b b b 8 b b 8 6 
    . 6 6 6 6 6 8 b b b b 8 b b b 8 
    . 6 6 6 6 8 6 6 6 6 6 8 6 6 6 8 
    . 6 d d 6 8 f 8 8 8 f 8 8 8 8 8 
    . d d 6 8 8 8 f 8 8 f 8 8 8 8 8 
    . 8 8 8 8 8 8 8 f f f 8 8 8 8 8 
    . 8 8 8 8 f f f 8 8 8 8 f f f f 
    . . . 8 f f f f f 8 8 f f f f f 
    . . . . f f f f . . . . f f f . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.leveltwo)
let car7_level2 = sprites.create(img`
    . . . . . . . 8 8 8 8 8 . . . . 
    . . . . . 8 8 6 6 6 6 6 8 . . . 
    . . . . 8 8 6 6 6 6 6 6 6 8 . . 
    . . . . 8 9 7 6 6 6 6 6 7 b 8 . 
    . . 8 8 9 9 7 7 6 6 6 6 7 9 b 8 
    . 8 6 6 9 9 7 7 7 6 6 6 7 9 9 8 
    8 6 6 6 9 9 6 7 7 7 7 7 6 9 9 8 
    8 6 6 6 9 9 8 8 8 8 8 8 8 9 9 8 
    8 6 6 6 9 b 8 b b b 8 b 8 b 9 8 
    8 6 8 8 8 8 b b b b 8 b b 8 b 8 
    8 8 3 3 8 8 6 6 6 6 8 6 6 8 8 8 
    8 3 3 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 f f f 8 8 8 8 f f f 8 8 
    . 8 8 f b c c f 8 8 f b c c f . 
    . . . . b b f . . . . b b f . . 
    `, SpriteKind.leveltwo)
car1_level2.setPosition(6840989038, 5000)
car2_level2.setPosition(5555, 5000)
car3_level2.setPosition(5000, 5000)
car4_level2.setPosition(5000, 5000)
car5_level2.setPosition(5000, 5000)
car6_level2.setPosition(5000, 5000)
car7_level2.setPosition(5000, 5000)
car1_level2.setVelocity(0, 0)
car2_level2.setVelocity(0, 0)
car3_level2.setVelocity(0, 0)
car4_level2.setVelocity(0, 0)
car5_level2.setVelocity(0, 0)
car6_level2.setVelocity(0, 0)
car7_level2.setVelocity(0, 0)
let car_1_level3 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 6 6 6 6 6 6 6 6 . . 
    . . . . . 6 c 6 6 6 6 6 6 9 6 . 
    . . . . 6 c c 6 6 6 6 6 6 9 c 6 
    . . d 6 9 c c 6 9 9 9 9 9 9 c c 
    . d 6 6 9 c b 8 8 8 8 8 8 8 6 c 
    . 6 6 6 9 b 8 8 b b b 8 b b 8 6 
    . 6 6 6 6 6 8 b b b b 8 b b b 8 
    . 6 6 6 6 8 6 6 6 6 6 8 6 6 6 8 
    . 6 d d 6 8 f 8 8 8 f 8 8 8 8 8 
    . d d 6 8 8 8 f 8 8 f 8 8 8 8 8 
    . 8 8 8 8 8 8 8 f f f 8 8 8 8 8 
    . 8 8 8 8 f f f 8 8 8 8 f f f f 
    . . . 8 f f f f f 8 8 f f f f f 
    . . . . f f f f . . . . f f f . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.levelthree)
let car2_level3 = sprites.create(img`
    . . . . . . . 8 8 8 8 8 . . . . 
    . . . . . 8 8 6 6 6 6 6 8 . . . 
    . . . . 8 8 6 6 6 6 6 6 6 8 . . 
    . . . . 8 9 7 6 6 6 6 6 7 b 8 . 
    . . 8 8 9 9 7 7 6 6 6 6 7 9 b 8 
    . 8 6 6 9 9 7 7 7 6 6 6 7 9 9 8 
    8 6 6 6 9 9 6 7 7 7 7 7 6 9 9 8 
    8 6 6 6 9 9 8 8 8 8 8 8 8 9 9 8 
    8 6 6 6 9 b 8 b b b 8 b 8 b 9 8 
    8 6 8 8 8 8 b b b b 8 b b 8 b 8 
    8 8 3 3 8 8 6 6 6 6 8 6 6 8 8 8 
    8 3 3 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 f f f 8 8 8 8 f f f 8 8 
    . 8 8 f b c c f 8 8 f b c c f . 
    . . . . b b f . . . . b b f . . 
    `, SpriteKind.levelthree)
let car3_level3 = sprites.create(img`
    . . . . . . . e e e e e . . . . 
    . . . . . e e 2 2 2 2 2 e . . . 
    . . . . e e 2 2 2 2 2 2 2 e . . 
    . . . . e 9 4 4 4 2 2 2 4 b e . 
    . . e e 9 9 4 4 4 4 2 2 4 9 b e 
    . e 2 2 9 9 4 4 4 4 4 2 4 9 9 e 
    e 2 2 2 9 9 2 4 4 4 4 4 2 9 9 e 
    e 2 2 2 9 9 e e e e e e e 9 9 e 
    e 2 2 2 9 b e b b b e b e b 9 e 
    e 2 e e e e b b b b e b b e b e 
    e e 3 3 e e 2 2 2 2 e 2 2 e e e 
    e 3 3 e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e 
    e e e e f f f e e e e f f f e e 
    . e e f f f b f e e f f f b f . 
    . . . . c b b . . . . c b b . . 
    `, SpriteKind.levelthree)
let car4_level3 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 2 2 2 2 2 2 2 2 . . 
    . . . . . 2 c 2 2 2 2 2 2 4 2 . 
    . . . . 2 c c 2 2 2 2 2 2 4 c 2 
    . . d 2 4 c c 2 4 4 4 4 4 4 c c 
    . d 2 2 4 c b e e e e e e e 2 c 
    . 2 2 2 4 b e e b b b e b b e 2 
    . 2 2 2 2 2 e b b b b e b b b e 
    . 2 2 2 2 e 2 2 2 2 2 e 2 2 2 e 
    . 2 d d 2 e f e e e f e e e e e 
    . d d 2 e e e f e e f e e e e e 
    . e e e e e e e f f f e e e e e 
    . e e e e f f f e e e e f f f f 
    . . . e f f f f f e e f f f f f 
    . . . . f f f f . . . . f f f . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.levelthree)
let car5_level3 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 3 3 3 3 3 3 3 3 . . 
    . . . . . 3 c 3 3 3 3 3 3 d 3 . 
    . . . . 3 c c 3 3 3 3 3 3 d c 3 
    . . d 3 d c c 3 d d d d d d c c 
    . d 3 3 d c b a a a a a a a 3 c 
    . 3 3 3 d b a a b b b a b b a 3 
    . 3 3 3 3 3 a b b b b a b b b a 
    . 3 3 3 3 a 3 3 3 3 3 a 3 3 3 a 
    . 3 d d 3 a f a a a f a a a a a 
    . d d 3 a a a f a a f a a a a a 
    . a a a a a a a f f f a a a a a 
    . a a a a f f f a a a a f f f f 
    . . . a f f f f f a a f f f f f 
    . . . . f f f f . . . . f f f . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.levelthree)
let car6_level3 = sprites.create(img`
    . . . . . . . 8 8 8 8 8 . . . . 
    . . . . . 8 8 6 6 6 6 6 8 . . . 
    . . . . 8 8 6 6 6 6 6 6 6 8 . . 
    . . . . 8 9 7 6 6 6 6 6 7 b 8 . 
    . . 8 8 9 9 7 7 6 6 6 6 7 9 b 8 
    . 8 6 6 9 9 7 7 7 6 6 6 7 9 9 8 
    8 6 6 6 9 9 6 7 7 7 7 7 6 9 9 8 
    8 6 6 6 9 9 8 8 8 8 8 8 8 9 9 8 
    8 6 6 6 9 b 8 b b b 8 b 8 b 9 8 
    8 6 8 8 8 8 b b b b 8 b b 8 b 8 
    8 8 3 3 8 8 6 6 6 6 8 6 6 8 8 8 
    8 3 3 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 f f f 8 8 8 8 f f f 8 8 
    . 8 8 f b c c f 8 8 f b c c f . 
    . . . . b b f . . . . b b f . . 
    `, SpriteKind.levelthree)
let car7_level3 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 6 6 6 6 6 6 6 6 . . 
    . . . . . 6 c 6 6 6 6 6 6 9 6 . 
    . . . . 6 c c 6 6 6 6 6 6 9 c 6 
    . . d 6 9 c c 6 9 9 9 9 9 9 c c 
    . d 6 6 9 c b 8 8 8 8 8 8 8 6 c 
    . 6 6 6 9 b 8 8 b b b 8 b b 8 6 
    . 6 6 6 6 6 8 b b b b 8 b b b 8 
    . 6 6 6 6 8 6 6 6 6 6 8 6 6 6 8 
    . 6 d d 6 8 f 8 8 8 f 8 8 8 8 8 
    . d d 6 8 8 8 f 8 8 f 8 8 8 8 8 
    . 8 8 8 8 8 8 8 f f f 8 8 8 8 8 
    . 8 8 8 8 f f f 8 8 8 8 f f f f 
    . . . 8 f f f f f 8 8 f f f f f 
    . . . . f f f f . . . . f f f . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.levelthree)
car_1_level3.setPosition(5000, 5000)
car2_level3.setPosition(5000, 5000)
car3_level3.setPosition(5000, 5000)
car4_level3.setPosition(5000, 5000)
car5_level3.setPosition(5000, 5000)
car6_level3.setPosition(5000, 5000)
car7_level3.setPosition(5000, 5000)
car_1_level3.setVelocity(0, 0)
car2_level3.setVelocity(0, 0)
car3_level3.setVelocity(0, 0)
car4_level3.setVelocity(0, 0)
car5_level3.setVelocity(0, 0)
car6_level3.setVelocity(0, 0)
car7_level3.setVelocity(0, 0)
forever(function () {
    if (mySprite.overlapsWith(car1_level1)) {
        info.changeLifeBy(-1)
        pause(500)
    }
    if (mySprite.overlapsWith(car2_level1)) {
        info.changeLifeBy(-1)
        pause(500)
    }
    if (mySprite.overlapsWith(car3_level1)) {
        info.changeLifeBy(-1)
        pause(500)
    }
    if (mySprite.overlapsWith(car4_level1)) {
        info.changeLifeBy(-1)
        pause(500)
    }
    if (mySprite.overlapsWith(car5_level1)) {
        info.changeLifeBy(-1)
        pause(500)
    }
    if (mySprite.overlapsWith(car6_level1)) {
        info.changeLifeBy(-1)
        pause(500)
    }
    if (mySprite.overlapsWith(car7_level1)) {
        info.changeLifeBy(-1)
        pause(500)
    }
})
forever(function () {
    if (mySprite.overlapsWith(car1_level2)) {
        info.changeLifeBy(-1)
        pause(500)
    }
    if (mySprite.overlapsWith(car2_level2)) {
        info.changeLifeBy(-1)
        pause(500)
    }
    if (mySprite.overlapsWith(car3_level2)) {
        info.changeLifeBy(-1)
        pause(500)
    }
    if (mySprite.overlapsWith(car4_level2)) {
        info.changeLifeBy(-1)
        pause(500)
    }
    if (mySprite.overlapsWith(car5_level2)) {
        info.changeLifeBy(-1)
        pause(500)
    }
    if (mySprite.overlapsWith(car6_level2)) {
        info.changeLifeBy(-1)
        pause(500)
    }
    if (mySprite.overlapsWith(car7_level2)) {
        info.changeLifeBy(-1)
        pause(500)
    }
})
forever(function () {
    if (mySprite.overlapsWith(key)) {
        tiles.setCurrentTilemap(tilemap`level1`)
        sprites.destroyAllSpritesOfKind(SpriteKind.Key1, effects.confetti, 500)
        sprites.destroyAllSpritesOfKind(SpriteKind.levelone)
        mySprite.setPosition(145, 3)
        key2.setPosition(4, 107)
        for (let index = 0; index < 5; index++) {
            car1_level2.setPosition(136, 12)
            car2_level2.setPosition(16, 20)
            car3_level2.setPosition(5, 36)
            car4_level2.setPosition(17, 53)
            car5_level2.setPosition(136, 85)
            car6_level2.setPosition(19, 68)
            car7_level2.setPosition(14, 96)
            car1_level2.setVelocity(-70, 0)
            car2_level2.setVelocity(70, 0)
            car3_level2.setVelocity(70, 0)
            car4_level2.setVelocity(70, 0)
            car5_level2.setVelocity(-70, 0)
            car6_level2.setVelocity(70, 0)
            car7_level2.setVelocity(70, 0)
            pause(1700)
        }
    }
    if (mySprite.overlapsWith(key2)) {
        tiles.setCurrentTilemap(tilemap`level0`)
        sprites.destroyAllSpritesOfKind(SpriteKind.key3, effects.confetti, 500)
        sprites.destroyAllSpritesOfKind(SpriteKind.leveltwo)
        winning_key.setPosition(127, 3)
        mySprite.setPosition(8, 106)
        for (let index = 0; index < 5; index++) {
            car_1_level3.setPosition(133, 12)
            car2_level3.setPosition(140, 24)
            car3_level3.setPosition(5, 36)
            car4_level3.setPosition(140, 53)
            car5_level3.setPosition(10, 85)
            car6_level3.setPosition(137, 68)
            car7_level3.setPosition(14, 96)
            car_1_level3.setVelocity(-70, 0)
            car2_level3.setVelocity(-70, 0)
            car3_level3.setVelocity(70, 0)
            car4_level3.setVelocity(-70, 0)
            car5_level3.setVelocity(70, 0)
            car6_level3.setVelocity(-70, 0)
            car7_level3.setVelocity(70, 0)
            pause(1700)
        }
    }
    if (mySprite.overlapsWith(winning_key)) {
        sprites.destroyAllSpritesOfKind(SpriteKind.winkey, effects.confetti, 500)
        sprites.destroyAllSpritesOfKind(SpriteKind.Player, effects.confetti, 500)
        sprites.destroyAllSpritesOfKind(SpriteKind.levelthree)
        game.gameOver(true)
    }
})
forever(function () {
    car1_level1.setPosition(134, 18)
    car2_level1.setPosition(139, 42)
    car3_level1.setPosition(148, 56)
    car4_level1.setPosition(8, 33)
    car5_level1.setPosition(14, 62)
    car6_level1.setPosition(18, 76)
    car7_level1.setPosition(9, 98)
    car1_level1.setVelocity(-75, 0)
    car2_level1.setVelocity(-75, 0)
    car3_level1.setVelocity(-75, 0)
    car4_level1.setVelocity(75, 0)
    car5_level1.setVelocity(75, 0)
    car6_level1.setVelocity(75, 0)
    car7_level1.setVelocity(75, 0)
    pause(1700)
})
forever(function () {
    if (mySprite.overlapsWith(car_1_level3)) {
        info.changeLifeBy(-1)
        pause(500)
    }
    if (mySprite.overlapsWith(car2_level3)) {
        info.changeLifeBy(-1)
        pause(500)
    }
    if (mySprite.overlapsWith(car3_level3)) {
        info.changeLifeBy(-1)
        pause(500)
    }
    if (mySprite.overlapsWith(car4_level3)) {
        info.changeLifeBy(-1)
        pause(500)
    }
    if (mySprite.overlapsWith(car5_level3)) {
        info.changeLifeBy(-1)
        pause(500)
    }
    if (mySprite.overlapsWith(car6_level3)) {
        info.changeLifeBy(-1)
        pause(500)
    }
    if (mySprite.overlapsWith(car7_level3)) {
        info.changeLifeBy(-1)
        pause(500)
    }
})
