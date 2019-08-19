// # javascript-session1-cw
//
// Try to do this without using the code from previous work. Only use the JavaScript reference guide: https://docs.google.com/document/d/1sdPHe4xQt_qEzbePtZRdTOcX2hDWpBVV8E_L8JvcPrI/
//
//     Create a FacebookUser class with one attribute: name.
//
//     In a main function use the array below to create an array of FacebookUser objects and console.log that new array.
//
//     ``` javascript
//  let myArray = ['Marvin','Ferris','Brynn','Damian','Whitney','Leila','Frances','Keith','Cara','Ainsley','Adrian','Adam','Iona','Akeem','Scarlett','Murphy','Angelica','Georgia','Calvin','Amy','Merrill','Gloria','Charissa','Colorado','Inga','Eden','Carla','Hedley','Thaddeus','Maggie','Kimberly','Ezra','Kane','Candace','Cade','Dante','Scott','Philip','Dieter','Kristen','Nerea','Ivor','Stacey','Tanner','Judith','Emery','Lionel','Josiah','Wesley','Anne','Lane','Kameko','Colleen','Travis','Abdul','Scarlet','Quail','Larissa','Palmer','Irene','Cherokee','Rajah','Maxine','Yen','Bruce','Matthew','Ivan','Georgia','Charissa','Thaddeus','Jack','Dean','Florence','Madonna','Dennis','Zeus','Destiny','Maia','Mara','Florence','Anika','Brenda','Jocelyn','Zia','Kiona','Lars','Molly','Gregory','Felix','William','Dahlia','Gil','Byron','Daria','Nevada','Claudia','Zelenia','Nathan','Judah','Sheila']
// // ```


class facebookUser
{
    constructor(name)
    {
        this.name_p = name
    }
}

function main() {
    let myArray = ['Marvin', 'Ferris', 'Brynn', 'Damian', 'Whitney', 'Leila', 'Frances', 'Keith', 'Cara', 'Ainsley', 'Adrian', 'Adam', 'Iona', 'Akeem', 'Scarlett', 'Murphy', 'Angelica', 'Georgia', 'Calvin', 'Amy', 'Merrill', 'Gloria', 'Charissa', 'Colorado', 'Inga', 'Eden', 'Carla', 'Hedley', 'Thaddeus', 'Maggie', 'Kimberly', 'Ezra', 'Kane', 'Candace', 'Cade', 'Dante', 'Scott', 'Philip', 'Dieter', 'Kristen', 'Nerea', 'Ivor', 'Stacey', 'Tanner', 'Judith', 'Emery', 'Lionel', 'Josiah', 'Wesley', 'Anne', 'Lane', 'Kameko', 'Colleen', 'Travis', 'Abdul', 'Scarlet', 'Quail', 'Larissa', 'Palmer', 'Irene', 'Cherokee', 'Rajah', 'Maxine', 'Yen', 'Bruce', 'Matthew', 'Ivan', 'Georgia', 'Charissa', 'Thaddeus', 'Jack', 'Dean', 'Florence', 'Madonna', 'Dennis', 'Zeus', 'Destiny', 'Maia', 'Mara', 'Florence', 'Anika', 'Brenda', 'Jocelyn', 'Zia', 'Kiona', 'Lars', 'Molly', 'Gregory', 'Felix', 'William', 'Dahlia', 'Gil', 'Byron', 'Daria', 'Nevada', 'Claudia', 'Zelenia', 'Nathan', 'Judah', 'Sheila'];

let instanceArray=[];
    myArray.forEach(display);

    function display(eachElement)
    {
        console.log(eachElement);
        var newFB = new facebookUser(eachElement);
        instanceArray.push(newFB);
    }
}

main();
//
//
// In your HTML file, include in below div tag in the position as seen below:
//     ```
// <body>
//
// <script src="index.js"></script>
// </body>
// ```