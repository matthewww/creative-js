class Vector {
    private _x:number;
    private _y:number;

    constructor(x, y) {
        this._x = x;
        this._y = y;
    }

    public setAngle(angle:number):void {
        const length = this.getLength();
        this._x = Math.cos(angle) * length;
        this._y = Math.sin(angle) * length;
    }

    public getAngle():number {
        return Math.atan2(this._y, this._x)
    }

    public setLength(length:number):void {
        const angle = this.getAngle();
        this._x = Math.cos(angle) * length;
        this._y = Math.sin(angle) * length;
    }

    public getLength():number {
        return Math.sqrt(this._x * this._x + this._y * this._y);
    }

    public add(vector:Vector):Vector {
        return new Vector(this._x + vector.x, this._y + vector.y);
    }

    public subtract(vector:Vector):Vector {
        return new Vector(this._x - vector.x, this._y - vector.y);
    }

    public multiply(value:number):Vector {
        return new Vector(this._x * value, this._y * value);
    }

    public divide(value:number):Vector {
        return new Vector(this._x / value, this._y / value);
    }

    public addTo(v2):void {
        this._x += v2.getX();
        this._y += v2.getY();
    }

    public subtractFrom(v2):void {
        this._x -= v2.getX();
        this._y -= v2.getY();
    }

    public multiplyBy(val):void {
        this._x *= val;
        this._y *= val;
    }

    public divideBy(val):void {
        this._x /= val;
        this._y /= val;
    }

    get x():number {
        return this._x;
    }

    set x(value:number) {
        this._x = value;
    }

    get y():number {
        return this._y;
    }

    set y(value:number) {
        this._y = value;
    }
}

class Main {
    constructor(){
        this._init();
    }

    private _init(): void{
        const v1 = new Vector(10,5);

        console.log(v1.getAngle());
        console.log(v1.getLength());

    }
}


new Main();