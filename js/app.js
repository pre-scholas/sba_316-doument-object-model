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
const barberInfo = barbers['name'] + barbers['image'] + barbers['description']
for (let i = 0; i < barbers.length; i++) {
  console.log(barbers[i].name + " " + barbers[i].image + " " + barbers[i].description);
  
}
// console.log(barbers[0].name + " " + barbers[0].image + " " + barbers[0].description)
console.log(barberInfo)

const printArea = document.querySelector('#content')

const dropdown = () => {
  const component = document.createElement('div');

  const input = document.createInput()
  // input.type = 'select'
  // input.name = 'barber'
  // input.id = 'barber'

  const dropdown = showDropdown();

  component.appendChild(input);
  component.appendChild(dropdown);
  printArea.appendChild(component);


}

const createInput = () => {
	// Creates the input outline
	const input = document.createElement('div');
	input.classList = 'input';
	input.addEventListener('click', toggleDropdown,);
	// Creates the input placeholder content
  const inputPlaceholder = document.createElement('div');
  inputPlaceholder.classList = 'input__placeholder';

	const placeholder = document.createElement('p');
	placeholder.textContent = 'Select user';
	placeholder.classList.add( 'placeholder',);

	// Appends the placeholder and chevron (stored in assets.js)
	inputPlaceholder.appendChild( placeholder,);
	inputPlaceholder.appendChild( dropdownIcon(),);
	input.appendChild(inputPlaceholder);

	return input;
};

// const barberList = document.getElementById('barber-list');
// barbers.forEach((barber) => {
//   const barberCard = document.createElement('div');
//   barberCard.classList.add('barber-card');
// });
// barberList.appendChild(barberCard);
// barberCard.innerHTML