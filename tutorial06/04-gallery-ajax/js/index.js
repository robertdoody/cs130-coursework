const photosURL = 'https://raw.githubusercontent.com/eecs130/spring2020/master/course-files/tutorials/tutorial06/04-gallery-ajax/data/flowers.json';
const bikesURL = 'https://raw.githubusercontent.com/eecs130/spring2020/master/course-files/tutorials/tutorial06/04-gallery-ajax/data/bikes.json';
const carsURL = 'https://raw.githubusercontent.com/eecs130/spring2020/master/course-files/tutorials/tutorial06/04-gallery-ajax/data/cars.json';


const loadCards = (photos) => {
    document.querySelector('.cards').innerHTML = '';
    // clears the class of cards
    for (photo of photos) {
      // creating the for loop for each photo in the API
        const template = `
            <div class="card" style="background-image:url('${photo}')"></div>`;
            // creating the template for generating each photo
        document.querySelector('.cards').innerHTML += template;
        // adding each photo using the template
    }
    initCarousel();
    // establishing the carousel
};

// query the data from the server:
fetch(bikesURL)
// fetching data for the chosen API
    .then((response) => {
        return response.json();
    })
    .then(loadCards); // invokes a function to process the data
