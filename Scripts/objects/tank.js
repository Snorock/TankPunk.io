var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var objects;
(function (objects) {
    var Tank = /** @class */ (function (_super) {
        __extends(Tank, _super);
        // Constructor
        function Tank(assetManager) {
            var _this = _super.call(this, assetManager, "dark-tank") || this;
            _this.Start();
            return _this;
        }
        // private methods
        Tank.prototype._animationEnded = function () {
            if (this.alpha == 0) {
                this.alpha = 1;
                this.tankFlash.alpha = 0;
            }
        };
        // public methods
        // Initializes variables and creates new objects
        Tank.prototype.Start = function () {
            this.tankFlash = new objects.TankFlash();
            this.tankFlash.alpha = 0;
            this.tankFlash.on("animationend", this._animationEnded.bind(this), false);
            this.x = 25;
            this.y = 434;
            //this.rotation = -90;
        };
        // updates the game object every frame
        Tank.prototype.Update = function () {
            this.Move();
            this.CheckBounds();
        };
        // reset the objects location to some value
        Tank.prototype.Reset = function () {
        };
        // move the object to some new location
        Tank.prototype.Move = function () {
            //Speed
            var speed = 1.5;
            // keyboard controls
            if (objects.Game.keyboardManager.moveLeft) {
                this.x -= speed;
                this.rotation = -90;
            }
            else if (objects.Game.keyboardManager.moveRight) {
                this.x += speed;
                this.rotation = 90;
            }
            else if (objects.Game.keyboardManager.moveForward) {
                this.y -= speed;
                this.rotation = 0;
            }
            else if (objects.Game.keyboardManager.moveBackward) {
                this.y += speed;
                this.rotation = 180;
            }
            this.tankFlash.rotation = this.rotation;
            this.tankFlash.x = this.x;
            this.tankFlash.y = this.y;
        };
        // check to see if some boundary has been passed
        Tank.prototype.CheckBounds = function () {
            // right boundary
            if (this.x >= 640 - this.halfWidth) {
                this.x = 640 - this.halfWidth;
            }
            else if (this.x <= this.halfWidth) {
                this.x = this.halfWidth;
            }
            if (this.y >= 480 - this.halfHeight) {
                this.y = 480 - this.halfHeight;
            }
            else if (this.y <= this.halfHeight) {
                this.y = this.halfHeight;
            }
        };
        return Tank;
    }(objects.GameObject));
    objects.Tank = Tank;
})(objects || (objects = {}));
//# sourceMappingURL=tank.js.map