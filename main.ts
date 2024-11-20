controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . 3 3 . . . 3 3 . . . . . . . 
        . 3 1 1 2 . . 3 1 3 . . 3 3 3 . 
        . 3 1 1 2 . . 3 1 3 . 3 1 1 3 . 
        . . 3 2 2 . . 2 1 2 . 2 1 1 3 . 
        . 3 3 . . . . . 2 2 . 2 2 2 . . 
        3 1 1 2 2 . . . . . . . 3 3 . . 
        3 1 1 1 2 . . . . . . 2 1 1 3 3 
        3 1 1 2 . . . . . . 3 1 1 1 1 3 
        . 3 2 2 . . . . . . . 2 1 1 3 . 
        . . . . . . . 2 . . . . 3 3 . . 
        . . 2 2 2 . 2 1 2 . . 2 2 2 . . 
        . 3 1 1 2 2 3 1 1 2 . 2 1 1 3 3 
        3 1 1 1 2 2 1 1 1 2 . 2 1 1 1 3 
        3 1 1 3 . . 3 1 3 . . . 3 1 1 3 
        3 3 3 . . . . 3 3 . . . . 3 3 . 
        . . . . . . . . . . . . . . . . 
        `, spacePlane, 200, 0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.halo, 500)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    scene.cameraShake(4, 500)
    info.changeLifeBy(-1)
})
let otherSprite: Sprite = null
let projectile: Sprite = null
let spacePlane: Sprite = null
info.setLife(3)
spacePlane = sprites.create(img`
    . . 4 4 4 . . . . 4 4 4 . . . . 
    . 4 5 5 5 e . . e 5 5 5 4 . . . 
    4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
    4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
    e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
    . e e 5 5 5 5 5 5 5 5 e e . . . 
    . . e 5 f 5 5 5 5 f 5 e . . . . 
    . . f 5 5 5 4 4 5 5 5 f . . f f 
    . . f 4 5 5 f f 5 5 6 f . f 5 f 
    . . . f 6 6 6 6 6 6 4 4 f 5 5 f 
    . . . f 4 5 5 5 5 5 5 4 4 5 f . 
    . . . f 5 5 5 5 5 4 5 5 f f . . 
    . . . f 5 f f f 5 f f 5 f . . . 
    . . . f f . . f f . . f f . . . 
    `, SpriteKind.Player)
controller.moveSprite(spacePlane, 200, 200)
spacePlane.setStayInScreen(true)
game.onUpdateInterval(1000, function () {
    otherSprite = sprites.create(img`
        ....ffffff..............
        ....ff22ccf.........cf..
        .....ffccccfff.....c4f..
        ....cc22222222ccccc44f..
        ...c9b244422222ccc442f..
        ..c99944222222222242fc..
        .c2b9992222222222222fcc.
        c222b1111b22222222cc22cf
        f2222211992222ccccccc22f
        .f22222222222c222cffffff
        ..ff2222222c442222ff....
        ....fffffffff442222fc...
        .........f2cff442222c...
        .........fccfffc2222c...
        ..........fc2ffffffff...
        ...........c2fff........
        `, SpriteKind.Enemy)
    otherSprite.setVelocity(-100, 0)
    otherSprite.setPosition(160, randint(5, 115))
    otherSprite.setFlag(SpriteFlag.AutoDestroy, true)
})
