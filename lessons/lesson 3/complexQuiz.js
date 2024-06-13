exports.complexQuiz1 = () => {
  let ticket = {
    from: "Taguig",
    to: "Makati",
    price: 25.0,
  };

  console.log(`Ticket from: ${ticket.from}`);
  console.log(`Ticket to: ${ticket.to}`);
  console.log(`Ticket price: ${ticket.price}`);

  const person = {};

  console.log(person);

  person.name = "Renyel Jay";
  person.surname = "Sioc";

  console.log(`${person.name} ${person.surname}`);
};

exports.complexQuiz2 = () => {
  const library = [
    {
      title: "Speaking Javascript",
      author: "Axel Rauschmayer",
      pages: 460,
    },
    {
      title: "Programming Javascript Applications",
      author: "Eric Elliott",
      pages: 254,
    },
    {
      title: "Understanding ECMAScript 6",
      author: "Nicholas C. Zakas",
      pages: 352,
    },
  ];

  const newbook = {
    title: "Learning Javascript Design Patterns",
    author: "Addy Osmani",
    pages: 254,
  };

  console.log(`Old Library Length: ${library.length}`);

  library.push(newbook);

  console.log(`New Library Length: ${library.length}`);
  console.log(library);

  //   const newLib = library.slice(-2);
  //   console.log(newLib);

  const lostbook = library.shift();
  console.log(lostbook);
  console.log(library.length);
  console.log(library);

  const total = `Total Library Pages ${
    library[0].pages + library[1].pages + library[2].pages
  }`;
  console.log(total);
};

exports.complexLaboratory = () => {

  const users = [
    {
      name: "Maxwell Wright",
      phone: "(0191) 719 6495",
      email: "Curabitur.egestas.nunc@nonummyac.co.uk",
    },
    {
      name: "Raja Villarreal",
      phone: "0866 398 2895",
      email: "posuere.vulputate@sed.com",
    },
    {
      name: "Helen Richards",
      phone: "0800 1111",
      email: "libero@convallis.edu",
    },
  ];

  const newUser = {
    name:"Maisie Haley",
    phone:"0913 531 3030",
    email:" risus.Quisque@urna.ca."
  };

  console.log(users.length);
  users.push(newUser);
  console.log(users.length);

  console.log(users);

  
};
