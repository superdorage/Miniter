//#!/usr/bin/env node
let myName = 'Dan Abramov';

let data = {
    "result": [{
      "contents": "Name It, and They Will Come",
      "date": "20190327",
      "user": "Dan Abramov"
    },{
      "contents": "첫 트윗",
      "date": "20190327",
      "user": "Yeri Kim"
    },{
      "contents": "Landed in SF. Gonna be here until Friday. ",
      "date": "20190324",
      "user": "Dan Abramov"
    },{
      "contents": "I love React and Vue and don't like framework wars ",
      "date": "20190323",
      "user": "Ali Spittel"
    },{
      "contents": "Y’all have been phenomenal. Thank you for sharing your earnest thoughts. I’m so grateful. Much to chew on. ",
      "date": "20190323",
      "user": "Dan Abramov"
    },{
      "contents": "roughly 2 years as an indie dev now, it's hard not to give up sometimes, I'm not even close to where I'd like to be, but seeing other indie developers succeed is still motivating—the potential for complete freedom over your time is too enticing",
      "date": "20190322",
      "user": "TJ Holowaychuk"
    },{
      "contents": "Huh",
      "date": "20190321",
      "user": "Dan Abramov"
    },{
      "contents": "They’re gonna have a problem hiring for this role.",
      "date": "20190320",
      "user": "Dan Abramov"
    },{
      "contents": "오늘의 신기한 경험 일본어/영어로된 README 에 대한 한국어  PR 을 보냈는데 owner 가 일본인이라 일본어로 리뷰 달아줌. 일본어를 1도 몰라 번역기 돌려서 대충 알아듣고 수정함. owner 는 한국어를 몰라 자기 트위터 친구한테 물어보고 merge 해줬다함. ㅎㅎㅎㅎ",
      "date": "20190306",
      "user": "Insanehong"
    },{
      "contents": "오늘의 신기한 경험 일본어/영어로된 README 에 대한 한국어  PR 을 보냈는데 owner 가 일본인이라 일본어로 리뷰 달아줌. 일본어를 1도 몰라 번역기 돌려서 대충 알아듣고 수정함. owner 는 한국어를 몰라 자기 트위터 친구한테 물어보고 merge 해줬다함. ㅎㅎㅎㅎ",
      "date": "20190306",
      "user": "Insanehong"
    }]
  }

console.log(data['result'][0]);

function updateTitle() {
  let title = document.getElementById('h1-title');
    
  title.innerHTML = '바뀐 제목!!!';
    
 // return title;
 // return 0;
}
  
// 주석을 풀고 실행해보세요.
//updateTitle();
  
function addClass(name) {
  let title = document.getElementsByTagName('h1')[0];
    
  title.innerHTML = "wecode.com/img.png";
}
// 주석을 풀고 실행해보세요.
//addClass('title');

  
function addElement() {
  let listWrap = document.createElement('ul');
  console.log('listWrap', listWrap);
  let list = document.createElement('li');
  console.log('list', list);
  let listContent = document.createElement('span');
  console.log('listContent', listContent);

  listContent.innerHTML = "목록이다";
  list.appendChild(listContent);
  listWrap.appendChild(list);
  
  document.body.appendChild(listWrap);
}
// 주석을 풀고 실행해보세요.
//addElement();
  
function a() {
  let dom = document.createElement('p');
  let h1Element = document.createElement('h1');
  dom.className = 'dom';
  dom.innerHTML = "DOM";
  h1Element.appendChild(dom);
  document.body.appendChild(h1Element);
}
//a();

function tweetMapping() {

  let tweetBody = document.getElementsByClassName('tweet-list')[0];

  for (let i = 0; i < data.result.length; i++) {
    let tweetList = document.createElement('li');
    tweetList.className = "tweet-list-item";

    let userName = document.createElement('p');
    userName.className = "user-name-in-list";

    let userTweetContent = document.createElement('p');
    userTweetContent.className = "user-tweet-in-list";
    
    userName.innerHTML = data.result[i]['user'];
    userTweetContent.innerHTML = data.result[i]['contents'];

    tweetList.appendChild(userName);
    tweetList.appendChild(userTweetContent);

    tweetBody.appendChild(tweetList);
  }
}

tweetMapping();

function myNameMapping() {
  let myname = document.getElementsByClassName('myname')[0];
  myname.innerHTML = "Dan Abramov";
}

myNameMapping();


function myTweetCount() {
  let numOfMyTweets = document.getElementsByClassName('num-of-my-tweets')[0];
  let num = 0;

  for (let i = 0; i < data.result.length; i++) {
    if (data.result[i]['user'] === 'Dan Abramov') {
      num += 1;
    }
  }
  numOfMyTweets.innerHTML = num;
}

myTweetCount();