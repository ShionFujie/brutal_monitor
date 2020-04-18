function fromPortMessages(portName) {
  return Rx.fromEventPattern(
    handler => {
      chrome.runtime.onConnect.addListener(({ name, onMessage }) => {
        if (name == portName) onMessage.addListener(handler);
      });
    },
    undefined,
    (message, _) => message
  );
}
