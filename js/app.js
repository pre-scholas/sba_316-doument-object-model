//create a object with an array of 5 barbers:
const barbers = [
	{
		name: 'Barber 1',
		image: 'barber1.jpg',
		description:
			'Description of Barber 1',
		availability: [
			'monday',
			'tuesday',
			'wednesday',
			'thursday',
			'friday',
			'saturday',
			'sunday',
		],
	},
	{
		name: 'Barber 2',
		image: 'barber2.jpg',
		description:
			'Description of Barber 2',
		availability: [
			'monday',
			'tuesday',
			'wednesday',
			'thursday',
			'friday',
			'saturday',
			'sunday',
		],
	},
	{
		name: 'Barber 3',
		image: 'barber3.jpg',
		description:
			'Description of Barber 3',
		availability: [
			'monday',
			'tuesday',
			'wednesday',
			'thursday',
			'friday',
			'saturday',
			'sunday',
		],
	},
	{
		name: 'Barber 4',
		image: 'barber4.jpg',
		description:
			'Description of Barber 4',
		availability: [
			'monday',
			'tuesday',
			'wednesday',
			'thursday',
			'friday',
			'saturday',
			'sunday',
		],
	},
	{
		name: 'Barber 5',
		image: 'barber5.jpg',
		description:
			'Description of Barber 5',
		availability: [
			'monday',
			'tuesday',
			'wednesday',
			'thursday',
			'friday',
			'saturday',
			'sunday',
		],
	},
]; 
const daysAvailable = []
daysAvailable.push(barbers[0].availability)
for (let i = 0; i < barbers.availability.length; i++) {
	console.log(barbers.availability[i])
}

console.log(barbers.availability)

// Cache DOM Elements
// cache elements needed to interact with
const mainEl = document.querySelector('main');
const contentWrapper = document.getElementById('content');

// State Management
// a variable to keep track of the application's state.
let selectedBarber = null;

// Render Functions
// functions responsible for drawing content on screen.


//  clears the content wrapper and renders the initial view with barber cards.
 
function renderInitialView() {
	// clear any existing content
	contentWrapper.innerHTML = '';

	// create and append the main title
	const title = document.createElement('h1');
	title.textContent = 'Sharp Cutz Booking';
	contentWrapper.appendChild(title);

	// create a container for the barber cards for better styling
	const cardsContainer =
		document.createElement('div');
	cardsContainer.classList.add( 'cards-container',);
	contentWrapper.appendChild( cardsContainer,);

	renderBarberCards(cardsContainer);
}


 // Creates and displays a card for each barber inside the provided container.
// The element to append barber cards

function renderBarberCards() {
	const container = document.querySelector( '.cards-container', );
	container.innerHTML = ''; // Clears previous cards

	barbers.forEach((barber) => {
		const card = document.createElement( 'div', );
		card.classList.add( 'barber-card', );
             console.log(barber);
             console.log(card)
		card.innerHTML = `
      <img src="images/${barber.image}" alt="Photo of ${barber.name}" style="width:100px; height:100px; border-radius:20px; object-fit:cover; border: solid 1px black; padding: 10px 20px; margin: 20px 0 20px 0; ">
      <p>${barber.description}</p>
      <button class="book-btn" style=" padding: 5px;">Book Now</button>
    `;

		// Add an event listener to the "Book Now" button on this specific card
		const bookButton = card.querySelector( '.book-btn', );
		console.log(bookButton);
		bookButton.addEventListener( 'click', () =>
				handleBookNowClick( barber, card, ),);

		container.appendChild(card);
	});
}


 // Renders the booking form for a selected barber.

function renderBookingForm(barber) {
	contentWrapper.innerHTML = ''; // Clear the screen

	const formHTML = `
    <h1>Book an Appointment with ${ barber.name }</h1>
    <form id="booking-form">
      <label for="name">Your Name:</label>
      <input type="text" id="name" name="name" required minlength="2">

      <label for="email">Your Email:</label>
      <input type="email" id="email" name="email" required>

      <label for="day">Select a Day:</label>
      <select id="day" name="day" required>
        <option value="">--Please choose a day--</option>
        ${barber.availability.map((day) => `<option value="${day}">${ day.charAt(0).toUpperCase() + day.slice(1) }</option>`,).join('') }
      </select>

      <div class="form-buttons">
        <button type="submit">Confirm Booking</button>
        <button type="button" id="back-btn">Go Back</button>
      </div>
    </form>
    <div id="form-message"></div>
  `;
	contentWrapper.innerHTML = formHTML;

	// Add event listeners for the new form
	document
		.getElementById('booking-form')
		.addEventListener( 'submit', handleFormSubmit,);
	document
		.getElementById('back-btn')
		.addEventListener( 'click', renderInitialView, );
}

// Event Handlers
// These functions will handle user interactions.

/**
 * Handles the click on a "Book Now" button.
 *  barber object.
 *  card element clicked.
 */
function handleBookNowClick(
	barber,
	cardElement,
) {
	console.log( `Booking with ${barber.name}`, );
	selectedBarber = barber; // Store the selected barber

	//  create a 'selected' class to the card
	document
		.querySelectorAll( '.barber-card', )
		.forEach((card) =>
			card.classList.remove( 'selected', ),
		);
	cardElement.classList.add( 'selected', );

	renderBookingForm(barber);
}


// Handles the submission of the booking form.

function handleFormSubmit(event) {
	event.preventDefault(); // Prevent the page from reloading
	const form = event.target;
	const messageEl = document.getElementById( 'form-message', );

	//  DOM validation check
	if (form.checkValidity()) {
		const customerName = form.elements.name.value;
		messageEl.textContent = `Thank you, ${customerName}! Your appointment with ${selectedBarber.name} is confirmed.`;
		messageEl.style.color = 'green';
		form.reset(); // Clear the form
		// Use a BOM method
		setTimeout(() => {
			alert( 'Booking successful! Check your confirmation message.',);
		}, 200);
	} else {
		messageEl.textContent =
			'Please fill out all required fields correctly.';
		messageEl.style.color = 'red';
	}
}

renderInitialView();
