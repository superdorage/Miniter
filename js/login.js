// id password
const identity = document.getElementsByTagName('button')[0];

identity.addEventListener('click', loginMessege);

function loginMessege() {
  const idField = document.getElementsByTagName('input')[0].value;
  const pwField = document.getElementsByClassName('password')[0].value;

  if (!idField && !pwField) {
    alert('ID 와 Passcode 를 입력하십시오.');
    return;
  }

  if (!idField) {
    alert("ID 를 입력하십시오");
    return;
  } 
  
  if (!pwField) {
    alert('Passcode 를 입력하십시오');
    return;
  }

  if (idField === pwField) {
    alert('아이디와 패스워드가 같으면 안됩니다.');
    return;
  }
}

