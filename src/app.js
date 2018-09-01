import { Observable, of, from, fromEvent } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, mapTo, flatMap, startWith, delay, withLatestFrom, tap, throttleTime , combineLatest, merge} from "rxjs/operators";



const data = [
    {
      "login": "nz",
      "id": 430,
      "node_id": "MDQ6VXNlcjQzMA==",
      "avatar_url": "https://avatars1.githubusercontent.com/u/430?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/nz",
      "html_url": "https://github.com/nz",
      "followers_url": "https://api.github.com/users/nz/followers",
      "following_url": "https://api.github.com/users/nz/following{/other_user}",
      "gists_url": "https://api.github.com/users/nz/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/nz/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/nz/subscriptions",
      "organizations_url": "https://api.github.com/users/nz/orgs",
      "repos_url": "https://api.github.com/users/nz/repos",
      "events_url": "https://api.github.com/users/nz/events{/privacy}",
      "received_events_url": "https://api.github.com/users/nz/received_events",
      "type": "User",
      "site_admin": false
    },
    {
      "login": "tynino",
      "id": 431,
      "node_id": "MDQ6VXNlcjQzMQ==",
      "avatar_url": "https://avatars1.githubusercontent.com/u/431?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/tynino",
      "html_url": "https://github.com/tynino",
      "followers_url": "https://api.github.com/users/tynino/followers",
      "following_url": "https://api.github.com/users/tynino/following{/other_user}",
      "gists_url": "https://api.github.com/users/tynino/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/tynino/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/tynino/subscriptions",
      "organizations_url": "https://api.github.com/users/tynino/orgs",
      "repos_url": "https://api.github.com/users/tynino/repos",
      "events_url": "https://api.github.com/users/tynino/events{/privacy}",
      "received_events_url": "https://api.github.com/users/tynino/received_events",
      "type": "User",
      "site_admin": false
    },
    {
      "login": "allan",
      "id": 432,
      "node_id": "MDQ6VXNlcjQzMg==",
      "avatar_url": "https://avatars1.githubusercontent.com/u/432?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/allan",
      "html_url": "https://github.com/allan",
      "followers_url": "https://api.github.com/users/allan/followers",
      "following_url": "https://api.github.com/users/allan/following{/other_user}",
      "gists_url": "https://api.github.com/users/allan/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/allan/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/allan/subscriptions",
      "organizations_url": "https://api.github.com/users/allan/orgs",
      "repos_url": "https://api.github.com/users/allan/repos",
      "events_url": "https://api.github.com/users/allan/events{/privacy}",
      "received_events_url": "https://api.github.com/users/allan/received_events",
      "type": "User",
      "site_admin": false
    },
    {
      "login": "bscofield",
      "id": 433,
      "node_id": "MDQ6VXNlcjQzMw==",
      "avatar_url": "https://avatars1.githubusercontent.com/u/433?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/bscofield",
      "html_url": "https://github.com/bscofield",
      "followers_url": "https://api.github.com/users/bscofield/followers",
      "following_url": "https://api.github.com/users/bscofield/following{/other_user}",
      "gists_url": "https://api.github.com/users/bscofield/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/bscofield/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/bscofield/subscriptions",
      "organizations_url": "https://api.github.com/users/bscofield/orgs",
      "repos_url": "https://api.github.com/users/bscofield/repos",
      "events_url": "https://api.github.com/users/bscofield/events{/privacy}",
      "received_events_url": "https://api.github.com/users/bscofield/received_events",
      "type": "User",
      "site_admin": false
    },
    {
      "login": "tkofol",
      "id": 434,
      "node_id": "MDQ6VXNlcjQzNA==",
      "avatar_url": "https://avatars1.githubusercontent.com/u/434?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/tkofol",
      "html_url": "https://github.com/tkofol",
      "followers_url": "https://api.github.com/users/tkofol/followers",
      "following_url": "https://api.github.com/users/tkofol/following{/other_user}",
      "gists_url": "https://api.github.com/users/tkofol/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/tkofol/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/tkofol/subscriptions",
      "organizations_url": "https://api.github.com/users/tkofol/orgs",
      "repos_url": "https://api.github.com/users/tkofol/repos",
      "events_url": "https://api.github.com/users/tkofol/events{/privacy}",
      "received_events_url": "https://api.github.com/users/tkofol/received_events",
      "type": "User",
      "site_admin": false
    },
    {
      "login": "trey",
      "id": 435,
      "node_id": "MDQ6VXNlcjQzNQ==",
      "avatar_url": "https://avatars1.githubusercontent.com/u/435?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/trey",
      "html_url": "https://github.com/trey",
      "followers_url": "https://api.github.com/users/trey/followers",
      "following_url": "https://api.github.com/users/trey/following{/other_user}",
      "gists_url": "https://api.github.com/users/trey/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/trey/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/trey/subscriptions",
      "organizations_url": "https://api.github.com/users/trey/orgs",
      "repos_url": "https://api.github.com/users/trey/repos",
      "events_url": "https://api.github.com/users/trey/events{/privacy}",
      "received_events_url": "https://api.github.com/users/trey/received_events",
      "type": "User",
      "site_admin": false
    },
    {
      "login": "jimmy",
      "id": 436,
      "node_id": "MDQ6VXNlcjQzNg==",
      "avatar_url": "https://avatars1.githubusercontent.com/u/436?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/jimmy",
      "html_url": "https://github.com/jimmy",
      "followers_url": "https://api.github.com/users/jimmy/followers",
      "following_url": "https://api.github.com/users/jimmy/following{/other_user}",
      "gists_url": "https://api.github.com/users/jimmy/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/jimmy/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/jimmy/subscriptions",
      "organizations_url": "https://api.github.com/users/jimmy/orgs",
      "repos_url": "https://api.github.com/users/jimmy/repos",
      "events_url": "https://api.github.com/users/jimmy/events{/privacy}",
      "received_events_url": "https://api.github.com/users/jimmy/received_events",
      "type": "User",
      "site_admin": false
    },
    {
      "login": "foca",
      "id": 437,
      "node_id": "MDQ6VXNlcjQzNw==",
      "avatar_url": "https://avatars1.githubusercontent.com/u/437?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/foca",
      "html_url": "https://github.com/foca",
      "followers_url": "https://api.github.com/users/foca/followers",
      "following_url": "https://api.github.com/users/foca/following{/other_user}",
      "gists_url": "https://api.github.com/users/foca/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/foca/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/foca/subscriptions",
      "organizations_url": "https://api.github.com/users/foca/orgs",
      "repos_url": "https://api.github.com/users/foca/repos",
      "events_url": "https://api.github.com/users/foca/events{/privacy}",
      "received_events_url": "https://api.github.com/users/foca/received_events",
      "type": "User",
      "site_admin": false
    },
    {
      "login": "mathie",
      "id": 438,
      "node_id": "MDQ6VXNlcjQzOA==",
      "avatar_url": "https://avatars0.githubusercontent.com/u/438?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/mathie",
      "html_url": "https://github.com/mathie",
      "followers_url": "https://api.github.com/users/mathie/followers",
      "following_url": "https://api.github.com/users/mathie/following{/other_user}",
      "gists_url": "https://api.github.com/users/mathie/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/mathie/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/mathie/subscriptions",
      "organizations_url": "https://api.github.com/users/mathie/orgs",
      "repos_url": "https://api.github.com/users/mathie/repos",
      "events_url": "https://api.github.com/users/mathie/events{/privacy}",
      "received_events_url": "https://api.github.com/users/mathie/received_events",
      "type": "User",
      "site_admin": false
    },
    {
      "login": "jarkko",
      "id": 439,
      "node_id": "MDQ6VXNlcjQzOQ==",
      "avatar_url": "https://avatars0.githubusercontent.com/u/439?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/jarkko",
      "html_url": "https://github.com/jarkko",
      "followers_url": "https://api.github.com/users/jarkko/followers",
      "following_url": "https://api.github.com/users/jarkko/following{/other_user}",
      "gists_url": "https://api.github.com/users/jarkko/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/jarkko/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/jarkko/subscriptions",
      "organizations_url": "https://api.github.com/users/jarkko/orgs",
      "repos_url": "https://api.github.com/users/jarkko/repos",
      "events_url": "https://api.github.com/users/jarkko/events{/privacy}",
      "received_events_url": "https://api.github.com/users/jarkko/received_events",
      "type": "User",
      "site_admin": false
    },
    {
      "login": "norbert",
      "id": 440,
      "node_id": "MDQ6VXNlcjQ0MA==",
      "avatar_url": "https://avatars1.githubusercontent.com/u/440?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/norbert",
      "html_url": "https://github.com/norbert",
      "followers_url": "https://api.github.com/users/norbert/followers",
      "following_url": "https://api.github.com/users/norbert/following{/other_user}",
      "gists_url": "https://api.github.com/users/norbert/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/norbert/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/norbert/subscriptions",
      "organizations_url": "https://api.github.com/users/norbert/orgs",
      "repos_url": "https://api.github.com/users/norbert/repos",
      "events_url": "https://api.github.com/users/norbert/events{/privacy}",
      "received_events_url": "https://api.github.com/users/norbert/received_events",
      "type": "User",
      "site_admin": false
    },
    {
      "login": "jduff",
      "id": 441,
      "node_id": "MDQ6VXNlcjQ0MQ==",
      "avatar_url": "https://avatars1.githubusercontent.com/u/441?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/jduff",
      "html_url": "https://github.com/jduff",
      "followers_url": "https://api.github.com/users/jduff/followers",
      "following_url": "https://api.github.com/users/jduff/following{/other_user}",
      "gists_url": "https://api.github.com/users/jduff/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/jduff/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/jduff/subscriptions",
      "organizations_url": "https://api.github.com/users/jduff/orgs",
      "repos_url": "https://api.github.com/users/jduff/repos",
      "events_url": "https://api.github.com/users/jduff/events{/privacy}",
      "received_events_url": "https://api.github.com/users/jduff/received_events",
      "type": "User",
      "site_admin": false
    },
    {
      "login": "gpaul",
      "id": 442,
      "node_id": "MDQ6VXNlcjQ0Mg==",
      "avatar_url": "https://avatars1.githubusercontent.com/u/442?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/gpaul",
      "html_url": "https://github.com/gpaul",
      "followers_url": "https://api.github.com/users/gpaul/followers",
      "following_url": "https://api.github.com/users/gpaul/following{/other_user}",
      "gists_url": "https://api.github.com/users/gpaul/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/gpaul/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/gpaul/subscriptions",
      "organizations_url": "https://api.github.com/users/gpaul/orgs",
      "repos_url": "https://api.github.com/users/gpaul/repos",
      "events_url": "https://api.github.com/users/gpaul/events{/privacy}",
      "received_events_url": "https://api.github.com/users/gpaul/received_events",
      "type": "User",
      "site_admin": false
    },
    {
      "login": "pablete",
      "id": 443,
      "node_id": "MDQ6VXNlcjQ0Mw==",
      "avatar_url": "https://avatars1.githubusercontent.com/u/443?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/pablete",
      "html_url": "https://github.com/pablete",
      "followers_url": "https://api.github.com/users/pablete/followers",
      "following_url": "https://api.github.com/users/pablete/following{/other_user}",
      "gists_url": "https://api.github.com/users/pablete/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/pablete/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/pablete/subscriptions",
      "organizations_url": "https://api.github.com/users/pablete/orgs",
      "repos_url": "https://api.github.com/users/pablete/repos",
      "events_url": "https://api.github.com/users/pablete/events{/privacy}",
      "received_events_url": "https://api.github.com/users/pablete/received_events",
      "type": "User",
      "site_admin": false
    },
    {
      "login": "mokolabs",
      "id": 444,
      "node_id": "MDQ6VXNlcjQ0NA==",
      "avatar_url": "https://avatars1.githubusercontent.com/u/444?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/mokolabs",
      "html_url": "https://github.com/mokolabs",
      "followers_url": "https://api.github.com/users/mokolabs/followers",
      "following_url": "https://api.github.com/users/mokolabs/following{/other_user}",
      "gists_url": "https://api.github.com/users/mokolabs/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/mokolabs/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/mokolabs/subscriptions",
      "organizations_url": "https://api.github.com/users/mokolabs/orgs",
      "repos_url": "https://api.github.com/users/mokolabs/repos",
      "events_url": "https://api.github.com/users/mokolabs/events{/privacy}",
      "received_events_url": "https://api.github.com/users/mokolabs/received_events",
      "type": "User",
      "site_admin": false
    },
    {
      "login": "awilliam",
      "id": 445,
      "node_id": "MDQ6VXNlcjQ0NQ==",
      "avatar_url": "https://avatars1.githubusercontent.com/u/445?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/awilliam",
      "html_url": "https://github.com/awilliam",
      "followers_url": "https://api.github.com/users/awilliam/followers",
      "following_url": "https://api.github.com/users/awilliam/following{/other_user}",
      "gists_url": "https://api.github.com/users/awilliam/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/awilliam/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/awilliam/subscriptions",
      "organizations_url": "https://api.github.com/users/awilliam/orgs",
      "repos_url": "https://api.github.com/users/awilliam/repos",
      "events_url": "https://api.github.com/users/awilliam/events{/privacy}",
      "received_events_url": "https://api.github.com/users/awilliam/received_events",
      "type": "User",
      "site_admin": false
    },
    {
      "login": "dysinger",
      "id": 447,
      "node_id": "MDQ6VXNlcjQ0Nw==",
      "avatar_url": "https://avatars1.githubusercontent.com/u/447?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/dysinger",
      "html_url": "https://github.com/dysinger",
      "followers_url": "https://api.github.com/users/dysinger/followers",
      "following_url": "https://api.github.com/users/dysinger/following{/other_user}",
      "gists_url": "https://api.github.com/users/dysinger/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/dysinger/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/dysinger/subscriptions",
      "organizations_url": "https://api.github.com/users/dysinger/orgs",
      "repos_url": "https://api.github.com/users/dysinger/repos",
      "events_url": "https://api.github.com/users/dysinger/events{/privacy}",
      "received_events_url": "https://api.github.com/users/dysinger/received_events",
      "type": "User",
      "site_admin": false
    },
    {
      "login": "intabulas",
      "id": 448,
      "node_id": "MDQ6VXNlcjQ0OA==",
      "avatar_url": "https://avatars0.githubusercontent.com/u/448?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/intabulas",
      "html_url": "https://github.com/intabulas",
      "followers_url": "https://api.github.com/users/intabulas/followers",
      "following_url": "https://api.github.com/users/intabulas/following{/other_user}",
      "gists_url": "https://api.github.com/users/intabulas/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/intabulas/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/intabulas/subscriptions",
      "organizations_url": "https://api.github.com/users/intabulas/orgs",
      "repos_url": "https://api.github.com/users/intabulas/repos",
      "events_url": "https://api.github.com/users/intabulas/events{/privacy}",
      "received_events_url": "https://api.github.com/users/intabulas/received_events",
      "type": "User",
      "site_admin": false
    },
    {
      "login": "avalade",
      "id": 449,
      "node_id": "MDQ6VXNlcjQ0OQ==",
      "avatar_url": "https://avatars0.githubusercontent.com/u/449?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/avalade",
      "html_url": "https://github.com/avalade",
      "followers_url": "https://api.github.com/users/avalade/followers",
      "following_url": "https://api.github.com/users/avalade/following{/other_user}",
      "gists_url": "https://api.github.com/users/avalade/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/avalade/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/avalade/subscriptions",
      "organizations_url": "https://api.github.com/users/avalade/orgs",
      "repos_url": "https://api.github.com/users/avalade/repos",
      "events_url": "https://api.github.com/users/avalade/events{/privacy}",
      "received_events_url": "https://api.github.com/users/avalade/received_events",
      "type": "User",
      "site_admin": false
    },
    {
      "login": "ljsc",
      "id": 450,
      "node_id": "MDQ6VXNlcjQ1MA==",
      "avatar_url": "https://avatars0.githubusercontent.com/u/450?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/ljsc",
      "html_url": "https://github.com/ljsc",
      "followers_url": "https://api.github.com/users/ljsc/followers",
      "following_url": "https://api.github.com/users/ljsc/following{/other_user}",
      "gists_url": "https://api.github.com/users/ljsc/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/ljsc/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/ljsc/subscriptions",
      "organizations_url": "https://api.github.com/users/ljsc/orgs",
      "repos_url": "https://api.github.com/users/ljsc/repos",
      "events_url": "https://api.github.com/users/ljsc/events{/privacy}",
      "received_events_url": "https://api.github.com/users/ljsc/received_events",
      "type": "User",
      "site_admin": false
    },
    {
      "login": "djdarkbeat",
      "id": 451,
      "node_id": "MDQ6VXNlcjQ1MQ==",
      "avatar_url": "https://avatars0.githubusercontent.com/u/451?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/djdarkbeat",
      "html_url": "https://github.com/djdarkbeat",
      "followers_url": "https://api.github.com/users/djdarkbeat/followers",
      "following_url": "https://api.github.com/users/djdarkbeat/following{/other_user}",
      "gists_url": "https://api.github.com/users/djdarkbeat/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/djdarkbeat/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/djdarkbeat/subscriptions",
      "organizations_url": "https://api.github.com/users/djdarkbeat/orgs",
      "repos_url": "https://api.github.com/users/djdarkbeat/repos",
      "events_url": "https://api.github.com/users/djdarkbeat/events{/privacy}",
      "received_events_url": "https://api.github.com/users/djdarkbeat/received_events",
      "type": "User",
      "site_admin": false
    },
    {
      "login": "yrashk",
      "id": 452,
      "node_id": "MDQ6VXNlcjQ1Mg==",
      "avatar_url": "https://avatars0.githubusercontent.com/u/452?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/yrashk",
      "html_url": "https://github.com/yrashk",
      "followers_url": "https://api.github.com/users/yrashk/followers",
      "following_url": "https://api.github.com/users/yrashk/following{/other_user}",
      "gists_url": "https://api.github.com/users/yrashk/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/yrashk/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/yrashk/subscriptions",
      "organizations_url": "https://api.github.com/users/yrashk/orgs",
      "repos_url": "https://api.github.com/users/yrashk/repos",
      "events_url": "https://api.github.com/users/yrashk/events{/privacy}",
      "received_events_url": "https://api.github.com/users/yrashk/received_events",
      "type": "User",
      "site_admin": false
    },
    {
      "login": "famulus",
      "id": 453,
      "node_id": "MDQ6VXNlcjQ1Mw==",
      "avatar_url": "https://avatars0.githubusercontent.com/u/453?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/famulus",
      "html_url": "https://github.com/famulus",
      "followers_url": "https://api.github.com/users/famulus/followers",
      "following_url": "https://api.github.com/users/famulus/following{/other_user}",
      "gists_url": "https://api.github.com/users/famulus/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/famulus/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/famulus/subscriptions",
      "organizations_url": "https://api.github.com/users/famulus/orgs",
      "repos_url": "https://api.github.com/users/famulus/repos",
      "events_url": "https://api.github.com/users/famulus/events{/privacy}",
      "received_events_url": "https://api.github.com/users/famulus/received_events",
      "type": "User",
      "site_admin": false
    },
    {
      "login": "rks",
      "id": 454,
      "node_id": "MDQ6VXNlcjQ1NA==",
      "avatar_url": "https://avatars0.githubusercontent.com/u/454?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/rks",
      "html_url": "https://github.com/rks",
      "followers_url": "https://api.github.com/users/rks/followers",
      "following_url": "https://api.github.com/users/rks/following{/other_user}",
      "gists_url": "https://api.github.com/users/rks/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/rks/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/rks/subscriptions",
      "organizations_url": "https://api.github.com/users/rks/orgs",
      "repos_url": "https://api.github.com/users/rks/repos",
      "events_url": "https://api.github.com/users/rks/events{/privacy}",
      "received_events_url": "https://api.github.com/users/rks/received_events",
      "type": "User",
      "site_admin": false
    },
    {
      "login": "chriskaukis",
      "id": 455,
      "node_id": "MDQ6VXNlcjQ1NQ==",
      "avatar_url": "https://avatars0.githubusercontent.com/u/455?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/chriskaukis",
      "html_url": "https://github.com/chriskaukis",
      "followers_url": "https://api.github.com/users/chriskaukis/followers",
      "following_url": "https://api.github.com/users/chriskaukis/following{/other_user}",
      "gists_url": "https://api.github.com/users/chriskaukis/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/chriskaukis/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/chriskaukis/subscriptions",
      "organizations_url": "https://api.github.com/users/chriskaukis/orgs",
      "repos_url": "https://api.github.com/users/chriskaukis/repos",
      "events_url": "https://api.github.com/users/chriskaukis/events{/privacy}",
      "received_events_url": "https://api.github.com/users/chriskaukis/received_events",
      "type": "User",
      "site_admin": false
    },
    {
      "login": "caffo",
      "id": 456,
      "node_id": "MDQ6VXNlcjQ1Ng==",
      "avatar_url": "https://avatars0.githubusercontent.com/u/456?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/caffo",
      "html_url": "https://github.com/caffo",
      "followers_url": "https://api.github.com/users/caffo/followers",
      "following_url": "https://api.github.com/users/caffo/following{/other_user}",
      "gists_url": "https://api.github.com/users/caffo/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/caffo/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/caffo/subscriptions",
      "organizations_url": "https://api.github.com/users/caffo/orgs",
      "repos_url": "https://api.github.com/users/caffo/repos",
      "events_url": "https://api.github.com/users/caffo/events{/privacy}",
      "received_events_url": "https://api.github.com/users/caffo/received_events",
      "type": "User",
      "site_admin": false
    },
    {
      "login": "timperrett",
      "id": 458,
      "node_id": "MDQ6VXNlcjQ1OA==",
      "avatar_url": "https://avatars1.githubusercontent.com/u/458?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/timperrett",
      "html_url": "https://github.com/timperrett",
      "followers_url": "https://api.github.com/users/timperrett/followers",
      "following_url": "https://api.github.com/users/timperrett/following{/other_user}",
      "gists_url": "https://api.github.com/users/timperrett/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/timperrett/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/timperrett/subscriptions",
      "organizations_url": "https://api.github.com/users/timperrett/orgs",
      "repos_url": "https://api.github.com/users/timperrett/repos",
      "events_url": "https://api.github.com/users/timperrett/events{/privacy}",
      "received_events_url": "https://api.github.com/users/timperrett/received_events",
      "type": "User",
      "site_admin": false
    },
    {
      "login": "voodootikigod",
      "id": 459,
      "node_id": "MDQ6VXNlcjQ1OQ==",
      "avatar_url": "https://avatars1.githubusercontent.com/u/459?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/voodootikigod",
      "html_url": "https://github.com/voodootikigod",
      "followers_url": "https://api.github.com/users/voodootikigod/followers",
      "following_url": "https://api.github.com/users/voodootikigod/following{/other_user}",
      "gists_url": "https://api.github.com/users/voodootikigod/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/voodootikigod/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/voodootikigod/subscriptions",
      "organizations_url": "https://api.github.com/users/voodootikigod/orgs",
      "repos_url": "https://api.github.com/users/voodootikigod/repos",
      "events_url": "https://api.github.com/users/voodootikigod/events{/privacy}",
      "received_events_url": "https://api.github.com/users/voodootikigod/received_events",
      "type": "User",
      "site_admin": false
    },
    {
      "login": "kwe",
      "id": 460,
      "node_id": "MDQ6VXNlcjQ2MA==",
      "avatar_url": "https://avatars2.githubusercontent.com/u/460?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/kwe",
      "html_url": "https://github.com/kwe",
      "followers_url": "https://api.github.com/users/kwe/followers",
      "following_url": "https://api.github.com/users/kwe/following{/other_user}",
      "gists_url": "https://api.github.com/users/kwe/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/kwe/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/kwe/subscriptions",
      "organizations_url": "https://api.github.com/users/kwe/orgs",
      "repos_url": "https://api.github.com/users/kwe/repos",
      "events_url": "https://api.github.com/users/kwe/events{/privacy}",
      "received_events_url": "https://api.github.com/users/kwe/received_events",
      "type": "User",
      "site_admin": false
    },
    {
      "login": "bernd",
      "id": 461,
      "node_id": "MDQ6VXNlcjQ2MQ==",
      "avatar_url": "https://avatars2.githubusercontent.com/u/461?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/bernd",
      "html_url": "https://github.com/bernd",
      "followers_url": "https://api.github.com/users/bernd/followers",
      "following_url": "https://api.github.com/users/bernd/following{/other_user}",
      "gists_url": "https://api.github.com/users/bernd/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/bernd/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/bernd/subscriptions",
      "organizations_url": "https://api.github.com/users/bernd/orgs",
      "repos_url": "https://api.github.com/users/bernd/repos",
      "events_url": "https://api.github.com/users/bernd/events{/privacy}",
      "received_events_url": "https://api.github.com/users/bernd/received_events",
      "type": "User",
      "site_admin": false
    }
  ]


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

  


// var responseStream = requestStream.pipe(
//   flatMap(reqApi => ajax(reqApi)),
// )

// var dataStream = responseStream.pipe(
//   map(resp => {
//     if (resp.status !== 200) {
//       throw new Error ('err')
//     }
//     return resp.response;
//   }))


var responseStream = requestStream.pipe(
    delay(500),
    mapTo(data)
  )
  
var dataStream = responseStream
  


function subscribeNRender(clickStream, selector){
    clickStream.pipe(
        startWith('a'),
        combineLatest(dataStream,             
            function(click, listUsers) {
                return listUsers[Math.floor(Math.random()*listUsers.length)];
            }),
        merge(refreshClickStream.pipe(map(() => null))),
    ).subscribe((suggestedUser) => renderSuggestion(suggestedUser, selector))
}



subscribeNRender(close1ClickStream, '.suggestion1' )
subscribeNRender(close2ClickStream, '.suggestion2' )
subscribeNRender(close3ClickStream, '.suggestion3' )




function renderSuggestion(suggestedUser , selector) {
  var suggestionEl = document.querySelector(selector);
  console.log(suggestedUser)
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
