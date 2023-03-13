class Direction  {
    constructor() {
        this.x;
        this.y;
        this.initialize();
    }

    initialize() {
        this.x = 0;
        this.y  = 0;
    }

// changes direction after event-input (arrow, btn)

    /**
     * Changes the direction after the given event occured
     * 
     * this method prevents the snake from moving opposite itself 
     * 
     * @param {object} event 
     * 
     */

    change(event) {
        switch(event.code) {
            case"ArrowUp":
            if(this.y === 1) return;
            this.x = 0;
            this.y = -1;
            break;

            case"ArrowDown":
            if(this.y === -1) return;
            this.x = 0;
            this.y = 1;
            break;

            case"ArrowLeft":
            if(this.x === 1) return;
            this.x = -1;
            this.y = 0;
            break;

            case"ArrowRight":
            if(this.x === -1) return;
            this.x = 1;
            this.y = 0;
            break;
        }
    }
}
