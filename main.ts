enum SpriteKind {
    Player,
    Projectile,
    Food,
    Enemy
}
let Bob: Sprite = null
controller.up.onEvent(ControllerButtonEvent.Repeated, function () {
    Bob.startEffect(effects.spray, 500)
    if (Bob.vy > -200) {
        Bob.vy = Bob.vy - 100
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    Bob.setImage(img`
        . . . . f f f f f f . . . . . .
        . . . f 2 f e e e e f f . . . .
        . . f 2 2 2 f e e e e f f . . .
        . . f e e e e f f e e e f . . .
        . f e 2 2 2 2 e e f f f f . . .
        . f 2 e f f f f 2 2 2 e f . . .
        . f f f e e e f f f f f f f . .
        . f e e 4 4 f b e 4 4 e f f . .
        . . f e d d f 1 4 d 4 e e f . .
        . . . f d d d d 4 e e e f . . .
        . . . f e 4 4 4 e e f f . . . .
        . . . f 2 2 2 e d d 4 . . . . .
        . . . f 2 2 2 e d d e . . . . .
        . . . f 5 5 4 f e e f . . . . .
        . . . . f f f f f f . . . . . .
        . . . . . . f f f . . . . . . .
    `)
    Bob.x = Bob.x - 1
})
controller.left.onEvent(ControllerButtonEvent.Repeated, function () {
    Bob.x = Bob.x - 1
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    Bob.setImage(img`
        . . . . . . f f f f f f . . . .
        . . . . f f e e e e f 2 f . . .
        . . . f f e e e e f 2 2 2 f . .
        . . . f e e e f f e e e e f . .
        . . . f f f f e e 2 2 2 2 e f .
        . . . f e 2 2 2 f f f f e 2 f .
        . . f f f f f f f e e e f f f .
        . . f f e 4 4 e b f 4 4 e e f .
        . . f e e 4 d 4 1 f d d e f . .
        . . . f e e e 4 d d d d f . . .
        . . . . f f e e 4 4 4 e f . . .
        . . . . . 4 d d e 2 2 2 f . . .
        . . . . . e d d e 2 2 2 f . . .
        . . . . . f e e f 4 5 5 f . . .
        . . . . . . f f f f f f . . . .
        . . . . . . . f f f . . . . . .
    `)
    Bob.x = Bob.x + 1
})
controller.right.onEvent(ControllerButtonEvent.Repeated, function () {
    Bob.x = Bob.x + 1
})
Bob = sprites.create(img`
    . . . . . . f f f f f f . . . .
    . . . . f f e e e e f 2 f . . .
    . . . f f e e e e f 2 2 2 f . .
    . . . f e e e f f e e e e f . .
    . . . f f f f e e 2 2 2 2 e f .
    . . . f e 2 2 2 f f f f e 2 f .
    . . f f f f f f f e e e f f f .
    . . f f e 4 4 e b f 4 4 e e f .
    . . f e e 4 d 4 1 f d d e f . .
    . . . f e e e 4 d d d d f . . .
    . . . . f f e e 4 4 4 e f . . .
    . . . . . 4 d d e 2 2 2 f . . .
    . . . . . e d d e 2 2 2 f . . .
    . . . . . f e e f 4 5 5 f . . .
    . . . . . . f f f f f f . . . .
    . . . . . . . f f f . . . . . .
`, SpriteKind.Player)
Bob.setFlag(SpriteFlag.StayInScreen, true)
scene.setTile(3, img`
    d d d d d d d d d d d d d d d d
    d d d 1 1 d d d d d d d d b d d
    d d d 1 1 d d d d d d d d d d d
    d d d d d d d d d d d d d d d d
    d d b d d d d d d b b d d d d d
    d d d d d d d d d b b d d d d d
    d d d d d d d d d d d d d d d d
    d d d d d d d d d d d d d d d d
    d d d d d b d d d d d d d d d d
    d d d d d d d d d d d d d d d d
    d d d d d d d d d d d d d d d d
    1 1 d d d d d d d d d d d d d d
    1 1 d d d d d d d d d d b d d d
    d d d d d d 1 d d d d d d d d d
    d d d d d d d d d d d d d d d d
    d d d d d d d d d d d d d d b d
`, true)
scene.setTileMap(img`
    . . . . . . . . . .
    . . . . . . . . . .
    3 3 3 . . . . . . .
    . . . . . . . . . .
    . . . . . . 3 3 3 3
    . . . . . . . . . .
    . . . . . . . . . .
    3 3 3 3 3 3 3 3 3 3
`)
Bob.ay = 400
