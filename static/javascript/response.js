function getBotResponce(input){
    let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");

// 'tell me a story' -> 'tell me story'
// 'i feel happy' -> 'happy'
const robot = ["How do you do, fellow human", "I am not a bot"];
  text = text
    .replace(/ a /g, " ")
    .replace(/i feel /g, "")
    .replace(/whats/g, "what is")
    .replace(/please /g, "")
    .replace(/ please/g, "")
    .replace(/ u /,"you")
    .replace(/ r /,"are");
    const trigger = [
        //0 
        ["hi", "hey", "hello"],
        //1
        ["how are you", "how are things"],
        //2
        ["what is going on", "what is up"],
        //3
        ["happy", "good", "well", "fantastic", "cool"],
        //4
        ["bad", "bored", "tired", "sad"],
        //5
        ["tell me story", "tell me joke"],
        //6
        ["thanks", "thank you"],
        //7
        ["bye", "good bye", "goodbye"],
        //8
        ["who made you", "who created you", "who is your creater"]
        ];
        
        const reply = [
        //0 
        ["Hello!", "Hi!", "Hey!", "Hi there!"], 
        //1
        [
            "Fine... how are you?",
            "Pretty well, how are you?",
            "Fantastic, how are you?"
          ],
        //2
        [
            "Nothing much",
            "Exciting things!"
          ],
        //3
        ["Glad to hear it"],
        //4
        ["Why?", "Cheer up buddy"],
        //5
        ["What about?", "Once upon a time..."],
        //6
        ["You're welcome", "No problem"],
        //7
        ["Goodbye", "See you later"],
        //8
        ["I was made by TURBS organisation"]
        ];
        
        const alternative = [
          "Same",
          "Go on...",
          "Try again",
          "I'm listening...",
          "Bro..."
        ];

        if (compare(trigger, reply, text)) {
            product = compare(trigger, reply, text);
          } else if (text.match(/robot/gi)) {
            product = robot[Math.floor(Math.random() * robot.length)];
          } else {
            product = alternative[Math.floor(Math.random() * alternative.length)];
          }

          return product;
}
function compare(triggerArray, replyArray, text) {
    let item;
    for (let x = 0; x < triggerArray.length; x++) {
      for (let y = 0; y < replyArray.length; y++) {
        if (triggerArray[x][y] == text) {
          items = replyArray[x];
          item = items[Math.floor(Math.random() * items.length)];
          return item;
        }
      }
    }
  
  }
