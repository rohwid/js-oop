class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    
    // Can't instantiate, access class variable
    // So it must be called independently
    static distance(a, b) {
        // a and b is an instance
        // a = p1 and b = p2
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        
        return Math.hypot(dx, dy);
    }
}

const p1 = new Point(5, 5);
console.log(p1);

const p2 = new Point(10, 10);
console.log(p2);

console.log(Point.distance(p1, p2));