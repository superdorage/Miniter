  // <div>
  // <p class="title">Sign up to Miniter</p>
  // <p>
  //   <input class="id" type="text" placeholder="Enter ID">
  // </p>
  // <p>
  //   <input class="name" type="text" placeholder="Enter name">
  // </p>
  // <p>
  //   <input class="password" type="password" placeholder="Passcode">
  // </p>
  // <p>
  //   <input class="repass" type="password" placeholder="Re-type your passcode">
  // </p>
  // <p>
  //   <input class="profile" type="text" placeholder="Enter profile">
  // </p>
  // <p>
  //   <button class="button" type="button">Sign up</button>
  // </p>

const button = document.getElementsByClassName('button')[0];

button.addEventListener('click', passCheck);

function passCheck() {
  const pw = document.getElementsByClassName('password')[0].value;
  const rePw = document.getElementsByClassName('repass')[0].value;

  const id = document.getElementsByClassName('id')[0].value;
  const name = document.getElementsByClassName('name')[0].value;
  const profile = document.getElementsByClassName('profile')[0].value;
  
function a() {
  alert('빈 공간을 채워주세요')
}

  if (pw !== rePw) {
    alert("입력하신 암호가 일치하지 않습니다.");
    return;
  }

  if (!id || !name || !profile) {
    a();
  }
}

const keyChek = document.getElementsByClassName("repass")[0];
const reKeyChek = document.getElementsByClassName('repass')[0];
const typCheck = document.getElementsByClassName('pw-check')[0];

reKeyChek.addEventListener('keyup', keyCheckFunc);

function keyCheckFunc() {
  const pw = document.getElementsByClassName('password')[0].value;
  const typ = document.getElementsByClassName('repass')[0].value;
  
  if (pw !== typ) {
    typCheck.innerHTML = "불일치";
  } else {
    typCheck.innerHTML = "일치";
  }
}


