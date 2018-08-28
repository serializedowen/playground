import { Observable , fromPromise, of, fromEvent } from 'rxjs';
import { map , mapTo , flatMap, startWith} from "rxjs/operators";




var refreshButton = document.querySelector('.refresh');
var closeButton1 = document.querySelector('.close1');
var closeButton2 = document.querySelector('.close2');
var closeButton3 = document.querySelector('.close3');



var refreshClickStream = fromEvent(refreshButton, 'click');
var close1ClickStream = fromEvent(closeButton1, 'click');
var close2ClickStream = fromEvent(closeButton2, 'click');
var close3ClickStream = fromEvent(closeButton3, 'click');


close3ClickStream.pipe()

var requestStream = refreshClickStream.pipe(
    startWith('cc'),
    map(() => {
        var randomOffset = Math.floor(Math.random() * 500);
        return 'https://api.github.com/users?since=' + randomOffset;
    }))
requestStream.subscribe()