"use strict";

const responses = [
  "It is certain.",
  "It is decidedly so.",
  "Without a doubt.",
  "Yes, definitely.",
  "You may rely on it.",
  "As I see it, yes.",
  "Most likely.",
  "Outlook good.",
  "Yes.",
  "Signs point to yes.",
  "Reply hazy, try again.",
  "Ask again later.",
  "Better not tell you now.",
  "Cannot predict now.",
  "Concentrate and ask again.",
  "Don't count on it.",
  "My reply is no.",
  "My sources say no.",
  "Outlook not so good.",
  "Very doubtful."
];

const eightBallCommand = {
  input: function (client, target, command, args) {
    if (args.length === 0) {
      client.sendMessage("You need to ask a question to the Magic 8-Ball!", target.chan);
      return;
    }

    const question = args.join(" ");
    const randomIndex = Math.floor(Math.random() * responses.length);
    const response = responses[randomIndex];

    client.sendMessage(`🎱 You asked: "${question}"`, target.chan);
    client.sendMessage(`🎱 The Magic 8-Ball says: "${response}"`, target.chan);
  },
  allowDisconnected: true
};

module.exports = {
  onServerStart: (api) => {
    api.Commands.add("8ball", eightBallCommand);
  },
};
