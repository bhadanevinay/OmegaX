const disableRightClickAndZoom = () => {
    // Disable Right Click
    document.addEventListener("contextmenu", (event) => event.preventDefault());
  
    // Disable Keyboard Zoom (Ctrl +, Ctrl -, Ctrl + Mouse Wheel)
    document.addEventListener("keydown", (event) => {
      if (
        (event.ctrlKey && event.key === "+") || // Ctrl +
        (event.ctrlKey && event.key === "-") || // Ctrl -
        (event.ctrlKey && event.key === "0") || // Ctrl 0
        (event.ctrlKey && event.key === "Shift") || // Ctrl + Shift
        event.key === "F12" // Disable DevTools (F12)
      ) {
        event.preventDefault();
      }
    });
  
    // Disable Pinch Zoom on Mobile
    document.addEventListener("wheel", (event) => {
      if (event.ctrlKey) {
        event.preventDefault();
      }
    });
  
    document.addEventListener(
      "gesturestart",
      function (event) {
        event.preventDefault();
      },
      { passive: false }
    );
  };
  
  export default disableRightClickAndZoom;
  