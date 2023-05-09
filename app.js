const data = [
    {id: 0,
    category: "song lyrics",
    value: 100,
    question: "What is the messaging app Bad Bunny references when he laments the feeling of someone not saving you as a contact in their phone: ‘____ sin el retrato, no guarda mi contacto’?",
    answer: "What is WhatsApp?",
    dailyDouble: false
    },
  
    {id: 1,
    category: "locations",
    value: 100,
    question: "In the song “Ensename a bailar” Bad Bunny refers to the island “Quisqeya”, who colonized this island in 1492?",
    answer: "Who is Christopher Columbus?",
    dailyDouble: false
    },  
    
    {id: 2,
    category: "girl names",
    value: 100,
    question: "Out of all the names mentioned in the hit song “Titi Me Pregunto”, what is the name of the one woman confirmed Bad Bunny has had a serious relationship with in the past?",
    answer: "Who is Gabriela?",
    dailyDouble: false
    },   
    
    {id: 3,
    category: "puerto rican slang",
    value: 100,
    question: "What is the puerto rican term for dancing or rather, twerking?",
    answer: "What is Perreo?",
    dailyDouble: false
    },  
    
    {id: 4,
    category: "wild card",
    value: 100,
    question: "“Despues de la playa” has a distinctive sound compared to the rest of the album, what genre is Bad Bunny paying homage to in this song?",
    answer: "What is salsa?",
    dailyDouble: false
    },  
      
    {id: 5,
    category: "song lyrics",
    value: 200,
    question: "Finish this line in the song 'Me Porto Bonito': 'Tu no eres bebesita, tu eres ...'",
    answer: "What is bebesota?",
    dailyDouble: false
    },
  
    {id: 6,
    category: "locations",
    value: 200,
    question: "In the song “Andrea” Bad Bunny tells a story about Andrea leaving what popular nightlife area that rests in Old San Juan at 4 in the morning?",
    answer: "What is La Perla?",
    dailyDouble: false
    },  
    
    {id: 7,
    category: "girl names",
    value: 200,
    question: "Who does Bad Bunny name as being his first girlfriend in kindergarten when he says, “Mi primera novia en kinder, _____”?",
    answer: "Who is Maria?",
    dailyDouble: false
    },  
    
    {id: 8,
    category: "puerto rican slang",
    value: 200,
    question: "Bad Bunny’s hit single 'TITI ME PREGUNTO' climbed the charts in 2022, who is he referring to when he addresses 'TITI'?",
    answer: "What is an aunty?",
    dailyDouble: false
    },  
    
    {id: 9,
    category: "wild card",
    value: 200,
    question: "In “El Apagon” Bad Bunny is paying homage to his beloved home, Puerto Rico, by highlighting the effects of power blackouts throughout the territory. What energy company is widely known as being responsible for these blackouts?",
    answer: "Who is Luma Energy?",
    dailyDouble: false
    },  
    
    {id: 10,
    category: "song lyrics",
    value: 300,
    question: "In the song, “Yo no soy celoso”, Bad Bunny is stating that he’s not the jealous type but seeing his girl with another guy still begs what question?",
    answer: "What is pero quien es ese cabron?",
    dailyDouble: false
    },
  
    {id: 11,
    category: "locations",
    value: 300,
    question: "What is the secret beach town where Bad Bunny recorded ‘Un Verano Sin Ti’?",
    answer: "What is Aniaco?",
    dailyDouble: false
    },
  
    {id: 12,
    category: "girl names",
    value: 300,
    question: "At almost 6 minutes long, this song sends a powerful message on femicide. The track sheds light on the case of a Puerto Rican woman murdered by her abusive ex-boyfriend after the courts failed to protect her. What is this woman’s name?",
    answer: "Who is Andrea?",
    dailyDouble: false
    },  
  
    {id: 13,
    category: "puerto rican slang",
    value: 300,
    question: "When Bad Bunny says “Puerto Rico está bien cabrón, ey, está bien cabrón”, he is using the term “cabron” which can often mean what?",
    answer: "What is cool?",
    dailyDouble: false
    },   
  
    {id: 14,
    category: "wild card",
    value: 300,
    question: "In the music video for 'Neverita' Bad Bunny paid homage to a famous latin song and singer by replicating the exact same music video but starring himself. What is the name of the song and artist that Benito is paying homage to?",
    answer: "What is Suavemente by Elvis Crespo?",
    dailyDouble: false
    },    
  ]
  
  //event listeners, set up reference to all of objects i want to interact with in HTML
  
  const squares = document.querySelectorAll('.child')
  squares.forEach((square, index) => {
    const squareData = data[square.dataset.id]
    console.log(squareData)
  })
  
  //add event listener and populate module with data
  
  <div id="myModal" class="modal">
    <div class="modal-content">
      <span class="close">&times;</span>
      <h2 id="modal-question"></h2>
      <input type="text" id="modal-answer" placeholder="Enter your answer here">
      <button id="modal-submit">Submit</button>
    </div>
  </div>
  
  