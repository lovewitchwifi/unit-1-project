// Set categories to "song lyrics", "locations", "girl names", "puerto rican slang", and "wild card"

const categories = ['song lyrics', 'locations', 'girl names', 'puerto rican slang', 'wild card']

// Set questions and answers within each category:

const songLyricsQuestions = 
    ["What is the messaging app Bad Bunny references when he laments the feeling of someone not saving you as a contact in their phone: ‘____ sin el retrato, no guarda mi contacto’?", 
    "Finish this line in the song “Me Porto Bonito”: 'Tu no eres bebesita, __ ____ ________'", 
    "In the song, “Yo no soy celoso”, Bad Bunny is stating that he’s not the jealous type but seeing his girl with another guy still begs what question?"]

const songLyricsAnswers =
    ["What is WhatsApp?", 
    "What is tu eres bebesota?", 
    "What is pero quien es ese cabron?"]

const locationsQuestions = 
    ["In the song “Ensename a bailar” Bad Bunny refers to the island Quisqeya, who colonized this island in 1492?", 
    "In the song 'Andrea', Bad Bunny tells a story about Andrea leaving what popular nightlife area at 4 in the morning?", 
    "What is the secret beach town where Bad Bunny recorded ‘Un Verano Sin Ti’?"]

const locationsAnswers =
    ["Who is Christopher Columbus?", 
    "What is La Perla?", 
    "What is Aniaco?"]

const prSlangQuestions =
    ["What is the puerto rican term for dancing or rather, twerking?",
    "Bad Bunny’s hit single “TITI ME PREGUNTO” climbed the charts in 2022, who is he referring to when he addresses “TITI”?",
    "When Bad Bunny says “Puerto Rico está bien cabrón, ey, está bien cabrón”, he is using the term “cabron” which can often mean what?"]

const prSlangAnswers =
    ["What is perreo?",
    "What is an aunty?",
    "What is cool?"]

const girlNamesQuestions =
    ["Out of all the names mentioned in the hit song “Titi Me Pregunto”, what is the name of the one woman confirmed Bad Bunny has had a serious relationship with in the past?",
    "Who does Bad Bunny name as being his first girlfriend in kindergarten when he says, “Mi primera novia en kinder, _____”?",
    "At almost 6 minutes long, this song sends a powerful message on femicide. The track sheds light on the case of a Puerto Rican woman murdered by her abusive ex-boyfriend after the courts failed to protect her. What is this woman’s name?"]

const girlNamesAnswers =
    ["Who is Gabriela?",
    "Who is Maria?",
    "Who is Andrea?"]

const wildCardQuestions =
    ["“Despues de la playa” has a distinctive sound compared to the rest of the album, what genre is Bad Bunny paying homage to in this song?",
    "In “El Apagon” Bad Bunny is paying homage to his beloved home, Puerto Rico, by highlighting the effects of power blackouts throughout the territory. What energy company is widely known as being responsible for these blackouts?",
    "In the music video for 'Neverita' Bad Bunny paid homage to a famous latin song and singer by replicating the exact same music video but starring himself. What is the name of the song and artist that Benito is paying homage to?"]

const wildCardAnswers =
    ["What is salsa?",
    "What is Luma Energy?",
    "What is Suavemente by Elvis Crespo?"]

const songLyricsQuestion100 = document.querySelector("#song-lyrics-100")

songLyricsQuestion100.addEventListener('click', (event){
    console.log('test');
})



// Then we will have functions to display the question and answer

// [function]
// displayQuestion(categoryIndex, questionIndex) {
// Display the question on the game board
//   let category = categories[categoryIndex];
//   let question = questions[category][questionIndex];
// }

// [function]
// Display the answer on the game board
//   let category = categories[categoryIndex];
//   let answer = questions[category][questionIndex].answers;


// Then we need a loop to let the player select a question and answer and then check if that answer is correct. 

// [loop]
// let user click question by making it a button

// [function]
// display question 
// let user submit answer (this is the part that i dont know... how will they give their answer hmmm)

// [loop]
// if user answer === category index question index answer index
// then add $ to winnings box
// [else]
// remove $ from winnings box and display correct answer

// 