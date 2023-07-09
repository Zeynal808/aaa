const firebaseConfig = {
  apiKey: "AIzaSyDQE7m0xnaW4wrFIHz0yVfgAxc_aILhm54",
  authDomain: "entiqegozellezetli.firebaseapp.com",
  databaseURL: "https://entiqegozellezetli-default-rtdb.firebaseio.com",
  projectId: "entiqegozellezetli",
  storageBucket: "entiqegozellezetli.appspot.com",
  messagingSenderId: "497357263802",
  appId: "1:497357263802:web:75d2b644977556e2084383"
};
firebase.initializeApp(firebaseConfig)
var db = firebase.database()
$('button').on('click', function () {
  var yazi = $('input').val()
  db.ref().set({
    mesaj: yazi
  })

})
db.ref().on('value', function (snapshot) {
  var x = snapshot.val()
  var p = $('<p>').text(x.mesaj)
  $('.message-box').append(p)
})