$(document).ready(() => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  // Check device OS
  if (/android/i.test(userAgent)) {
    // Android
    window.location.replace(
      'https://play.google.com/store/apps/details?id=com.tewnapp'
    );
  } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    // iOS
    window.location.replace('https://testflight.apple.com/join/B1CkaFWh');
  } else {
    window.location.replace('https://www.tewnapp.com/');
  }
});
