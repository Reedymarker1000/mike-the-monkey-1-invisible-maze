namespace SpriteKind {
    export const colectable = SpriteKind.create()
    export const Enddddd = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enddddd, function (sprite, otherSprite) {
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    Challenger_Mike.startEffect(effects.clouds, 1000)
    tiles.placeOnTile(Challenger_Mike, tiles.getTileLocation(0, 0))
    Challenger_Mike.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    music.play(music.melodyPlayable(music.powerDown), music.PlaybackMode.UntilDone)
    Challenger_Mike.setImage(img`
        . . . . f f f f f . . . . . . . 
        . . . f e e e e e f . . . . . . 
        . . f d d d d e e e f . . . . . 
        . c d f d d f d e e f f . . . . 
        . c d f d d f d e e d d f . . . 
        c d e e d d d d e e b d c . . . 
        c d d d d c d d e e b d c . f f 
        c c c c c d d d e e f c . f e f 
        . f d d d d d e e f f . . f e f 
        . . f f f f f e e e e f . f e f 
        . . . . f e e e e e e e f f e f 
        . . . f e f f e f e e e e f f . 
        . . . f e f f e f e e e e f . . 
        . . . f d b f d b f f e f . . . 
        . . . f d d c d d b b d f . . . 
        . . . . f f f f f f f f f . . . 
        `)
})
let Challenger_Mike: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
Challenger_Mike = sprites.create(img`
    . . . . f f f f f . . . . . . . 
    . . . f e e e e e f . . . . . . 
    . . f d d d d e e e f . . . . . 
    . c d f d d f d e e f f . . . . 
    . c d f d d f d e e d d f . . . 
    c d e e d d d d e e b d c . . . 
    c d d d d c d d e e b d c . f f 
    c c c c c d d d e e f c . f e f 
    . f d d d d d e e f f . . f e f 
    . . f f f f f e e e e f . f e f 
    . . . . f e e e e e e e f f e f 
    . . . f e f f e f e e e e f f . 
    . . . f e f f e f e e e e f . . 
    . . . f d b f d b f f e f . . . 
    . . . f d d c d d b b d f . . . 
    . . . . f f f f f f f f f . . . 
    `, SpriteKind.Player)
music.play(music.createSong(assets.song`song 1`), music.PlaybackMode.LoopingInBackground)
controller.moveSprite(Challenger_Mike, 100, 100)
tiles.placeOnTile(Challenger_Mike, tiles.getTileLocation(0, 0))
scene.cameraFollowSprite(Challenger_Mike)
let spike = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . 1 . . . . . . 
    . 1 . . . 1 . . . 1 . . . . . . 
    . 1 . . . 1 . 1 . 1 . 1 . 1 . . 
    . 1 . 1 . 1 . 1 . 1 . 1 . 1 . 1 
    . 1 . 1 . 1 . 1 . 1 . 1 . 1 . 1 
    b b b b b b b b b b b b b b b b 
    `, SpriteKind.Enemy)
tiles.placeOnTile(spike, tiles.getTileLocation(8, 3))
spike = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . 1 . . . . . . 
    . 1 . . . 1 . . . 1 . . . . . . 
    . 1 . . . 1 . 1 . 1 . 1 . 1 . . 
    . 1 . 1 . 1 . 1 . 1 . 1 . 1 . 1 
    . 1 . 1 . 1 . 1 . 1 . 1 . 1 . 1 
    b b b b b b b b b b b b b b b b 
    `, SpriteKind.Enemy)
tiles.placeOnTile(spike, tiles.getTileLocation(10, 29))
spike = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . 1 . . . . . . 
    . 1 . . . 1 . . . 1 . . . . . . 
    . 1 . . . 1 . 1 . 1 . 1 . 1 . . 
    . 1 . 1 . 1 . 1 . 1 . 1 . 1 . 1 
    . 1 . 1 . 1 . 1 . 1 . 1 . 1 . 1 
    b b b b b b b b b b b b b b b b 
    `, SpriteKind.Enemy)
tiles.placeOnTile(spike, tiles.getTileLocation(33, 16))
spike = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . 1 . . . . . . 
    . 1 . . . 1 . . . 1 . . . . . . 
    . 1 . . . 1 . 1 . 1 . 1 . 1 . . 
    . 1 . 1 . 1 . 1 . 1 . 1 . 1 . 1 
    . 1 . 1 . 1 . 1 . 1 . 1 . 1 . 1 
    b b b b b b b b b b b b b b b b 
    `, SpriteKind.Enemy)
tiles.placeOnTile(spike, tiles.getTileLocation(35, 10))
spike = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . 1 . . . . . . 
    . 1 . . . 1 . . . 1 . . . . . . 
    . 1 . . . 1 . 1 . 1 . 1 . 1 . . 
    . 1 . 1 . 1 . 1 . 1 . 1 . 1 . 1 
    . 1 . 1 . 1 . 1 . 1 . 1 . 1 . 1 
    b b b b b b b b b b b b b b b b 
    `, SpriteKind.Enemy)
tiles.placeOnTile(spike, tiles.getTileLocation(0, 14))
spike = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . 1 . . . . . . 
    . 1 . . . 1 . . . 1 . . . . . . 
    . 1 . . . 1 . 1 . 1 . 1 . 1 . . 
    . 1 . 1 . 1 . 1 . 1 . 1 . 1 . 1 
    . 1 . 1 . 1 . 1 . 1 . 1 . 1 . 1 
    b b b b b b b b b b b b b b b b 
    `, SpriteKind.Enemy)
tiles.placeOnTile(spike, tiles.getTileLocation(15, 29))
let end = sprites.create(img`
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 5 5 f 5 5 5 5 5 5 f 5 5 5 5 
    5 5 5 5 f 5 5 5 5 5 5 f 5 5 5 5 
    5 5 5 5 f 5 5 5 5 5 5 f 5 5 5 5 
    5 5 5 5 f 5 5 5 5 5 5 f 5 5 5 5 
    5 5 5 5 f 5 5 5 5 5 5 f 5 5 5 5 
    5 5 f 5 5 5 5 5 5 5 5 5 5 f 5 5 
    5 5 f 5 5 5 5 5 5 5 5 5 5 f 5 5 
    5 5 5 f 5 5 5 5 5 5 5 5 f 5 5 5 
    5 5 5 5 f f f f f f f f 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    `, SpriteKind.Enddddd)
tiles.placeOnTile(end, tiles.getTileLocation(9, 39))
