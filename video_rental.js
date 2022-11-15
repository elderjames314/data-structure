function VideoRental() {
    this.checkIn=checkIn;
    this.rentedMovies = [];
    this.availableMovies = ["God father", "The school of evil and good", "Blood diamong"];
    this.checkout = checkout;
    this.add = add;
}

function checkout() {

}

function add(movie) {
    this.availableMovies.push(movie);
}

function checkIn(movieName) {
    let pos = -1;
    let isFound = false;
    for(let i = 0; i < this.availableMovies.length; i++) {
        if(this.availableMovies[i] === movieName) {
            pos = i;
            isFound = true;
            break;
        }
    }
    if(isFound) {
        this.availableMovies.splice(pos, 1);
        this.rentedMovies.push(movieName);
    }
    return `${movieName} not found`;
   
}

const movie = new VideoRental();
movie.checkIn("God father");
console.log(movie.availableMovies);
console.log(movie.rentedMovies)

