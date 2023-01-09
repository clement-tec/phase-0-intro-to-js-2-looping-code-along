const writeCard = (names,event) => {
  const messages = []
  for (let i = 0; i< names.lenght; i++) {
    const greetingMessage = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
    message.push(greetingMessage)
  }
  return messages
}
console.log(writeCard(["Charlie", "Sampip", "Ali"], "birthday"))
