
const signUpForm = document.getElementById('registatrationForm')
const output = document.getElementById('handle');
const submit = document.getElementById('signUp')
let handle = document.querySelector('#handle')
let user;

document.addEventListener("DOMContentLoaded", () => {

  signUpForm.addEventListener('submit', (e) => {
    e.preventDefault()
    createNewUser()
  })
})

createNewUser = (e) => {
	var url = 'https://chitter-backend-api.herokuapp.com/users';
	var data = {
		"user": {"handle":document.getElementById('new-handle').value,
		"password":document.getElementById('new-password').value}
	};

	fetch(url, {
	  method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
        "Content-Type": "application/json; charset=utf-8",
    },
    redirect: "follow",
    referrer: "no-referrer",
    body: JSON.stringify(data),
	})
	.then(res => res.json())
	.then(json => {
    user = new User(json.handle)
    updateHandleName()
	});
};

updateHandleName = () => {
  console.log(user);
  if(user){
    return output.innerHTML = `${user.handle}`;
  } else {
    return output.innerHTML = `Stranger`
  }
}