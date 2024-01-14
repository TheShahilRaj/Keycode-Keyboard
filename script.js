document.addEventListener('keydown', (event) => {
    const pressedKeyElement = document.getElementById('pressed-key');
    const keyCodeElement = document.getElementById('key-code');
  
    // Display pressed key
    pressedKeyElement.textContent = `You Pressed: ${event.key}`;
  
    // Display key code
    keyCodeElement.textContent = `${event.keyCode}`;
  
    // Optional: Log key history
    logKeyHistory(event);
  });
  
  function logKeyHistory(event) {
    const keyHistory = JSON.parse(localStorage.getItem('keyHistory')) || [];
  
    const keyInfo = {
      key: event.key,
      keyCode: event.keyCode,
      timestamp: new Date().toLocaleString(),
    };
  
    keyHistory.push(keyInfo);
  
    // Store key history in local storage
    localStorage.setItem('keyHistory', JSON.stringify(keyHistory));
  }