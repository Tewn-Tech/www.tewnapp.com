$(document).ready(function () {
  $('.btn-early-access').click(function () {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Check device OS
    if (/android/i.test(userAgent)) {
      // Android
      window.location.replace(
        'https://play.google.com/store/apps/details?id=com.tewnapp'
      );
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      // iOS
      window.location.replace('https://apps.apple.com/app/tewn/id1540455151');
    } else {
      $(this).html('Available on iOS and Android!');
    }
  });
});
