module managers {
    export class LivesBoard {
        // private instance variables
        private _lives: number;
        // private _score: number;
        // private _highscore: number;


        // public Instance variables
        public LivesLabel: objects.Label;
        // public ScoreLabel: objects.Label;
        // public HighScoreLabel: objects.Label;

        // public properties
        get Lives(): number {
            return this._lives;
        }

        set Lives(newLives: number) {
            this._lives = newLives;
            this.LivesLabel.text = "♥: " + this._lives;
        }

        // get Score(): number {
        //     return this._score;
        // }

        // set Score(newScore: number) {
        //     this._score = newScore;
        //     this.ScoreLabel.text = "Score: " + this._score;
        // }

        // get HighScore(): number {
        //     return this._highscore;
        // }

        // set HighScore(newHighScore: number) {
        //     this._highscore = newHighScore;
        //     this.HighScoreLabel.text = "High Score: " + this._highscore;
        // }

        // constructors
        constructor() {
            this._initialize();
        }
        // private methods
        private _initialize(): void {
            //this.LivesLabel = new objects.Label("Lives: 0", "20px", "Consolas", "#FF0000", 540, 50, false);
            this.LivesLabel = new objects.Label("♥: 0", "20px", "jabjai", "#333333", 530, 17, false);
            // this.ScoreLabel = new objects.Label("Score: 99999", "20px", "Consolas", "#FFFF00", 500, 10, false);
            // this.HighScoreLabel = new objects.Label("HighScore: 99999", "40px", "Consolas", "#FFFF00", 320, 240, true);

            this.Lives = 5;
            // this.Score = 0;
            // this.HighScore = 0;
        }

        // public methods
    }
}