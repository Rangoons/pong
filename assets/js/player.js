class Player extends Rect
{
    constructor()
    {
        super(20, 100)
        this.vel = new Vec
        this.score = 0

        this._lastPos = new Vec
    }
    update(dt)
    {
        this.vel.y = (this.pos.y - this._lastPos.y) / dt
        this._lastPos.y = this.pos.y
    }
}
