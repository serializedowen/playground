import { Observable, of, from, fromEvent } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, mapTo, flatMap, startWith, delay, withLatestFrom, tap, throttleTime , catchError, take, filter} from "rxjs/operators";




var refreshButton = document.querySelector('.refresh');
var closeButton1 = document.querySelector('.close1');
var closeButton2 = document.querySelector('.close2');
var closeButton3 = document.querySelector('.close3');

var refreshClickStream = fromEvent(refreshButton, 'click');
var close1ClickStream = fromEvent(closeButton1, 'click');
var close2ClickStream = fromEvent(closeButton2, 'click');
var close3ClickStream = fromEvent(closeButton3, 'click');

var randomStream = from([1, 2, 3, 4, 5])

var requestStream = refreshClickStream.pipe(
  startWith('startup'),
  throttleTime(200),
  map(() => {
    var randomOffset = Math.floor(Math.random() * 500);
    return 'https://api.github.com/users?since=' + randomOffset;
  }))

var responseStream = requestStream.pipe(
  flatMap(reqApi => ajax(reqApi),
))
var dataStream = responseStream.pipe(
  map(resp => {
    if (resp.status !== 200) {
      throw new Error ('err')
    }
    return resp.response;
  }))

function renderSuggestion(suggestedUser , selector) {
  var suggestionEl = document.querySelector(selector);
  if (suggestedUser === null) {
    suggestionEl.style.visibility = 'hidden';
  } else {
    suggestionEl.style.visibility = 'visible';
    var usernameEl = suggestionEl.querySelector('.username');
    usernameEl.href = suggestedUser.html_url;
    usernameEl.textContent = suggestedUser.login;
    var imgEl = suggestionEl.querySelector('img');
    imgEl.src = "";
    imgEl.src = suggestedUser.avatar_url;
  }
}

responseStream.subscribe(x => console.log(x))


// responseStream.subscribe(data => {
//   var 
// })

// requestStream.subscribe(x => console.log(x))
randomStream.subscribe(x => console.log(x))