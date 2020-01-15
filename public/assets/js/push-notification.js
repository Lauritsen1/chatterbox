// Notification.requestPermission(function (status) {
// 	console.log('Notification permission status:', status);
// });

// function displayNotification(msg) {
// 	if (Notification.permission == 'granted') {
// 		navigator.serviceWorker.getRegistration().then(function (reg) {
// 			var options = {
// 				body: msg.msg,
// 				icon: '/assets/images/pepe-bask.gif',
// 				vibrate: [100, 50, 100],
// 				data: {
// 					dateOfArrival: Date.now(),
// 					primaryKey: 1
// 				}
// 			};
// 			reg.showNotification(msg.username, options);
// 		});
// 	}
// }