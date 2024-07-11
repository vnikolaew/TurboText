document.addEventListener(`DOMContentLoaded`, () => {
   let clientId = crypto.randomUUID();

   const socket = new WebSocket("ws://localhost:5002");

   socket.addEventListener(`error`, console.error);
   socket.addEventListener(`open`, console.log);

   socket.addEventListener(`message`, message => {
      const parsed = JSON.parse(message.data)
      console.log(`New message: `, { data: parsed  });

      if(parsed.initial === true) {
         clientId = parsed.clientId;
         return
      }

      const messages = document.getElementById(`messages`);
      messages.innerHTML += `<span>${message.data}</span>`;
   });

   const sendButton = document.getElementById(`send`);

   sendButton.addEventListener(`click`, () => {
      const input = document.getElementById(`input`);

      if (!input.value) return;

      const message = {
         clientId,
         channelName: `chat`,
         messageName: `message`,
         messageType: `SEND`,
         timestamp: new Date().getTime(),
         extras: {},
         data: { text: input.value },
      };
      socket.send(
         JSON.stringify(message),
      );
      input.value = ``;
   });


   const unsubButton = document.getElementById(`unsubscribe`);

   unsubButton.addEventListener(`click`, () => {
      const message = {
         clientId,
         channelName: `chat`,
         messageName: `message`,
         messageType: `UNSUBSCRIBE`,
         timestamp: new Date().getTime(),
         extras: { },
         data: { },
      };
      socket.send(
         JSON.stringify(message),
      );
      input.value = ``;

      const messages = document.getElementById(`messages`);
      messages.innerHTML = ``;
   });
});