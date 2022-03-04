const navItems = document.getElementsByClassName('nav-item');
for (var i = 0; i < navItems.length; i++) {
  navItems[i].addEventListener('click', function () {
    var current = document.querySelector('.active_page');
    if (current) {
      current.classList.remove('active_page');
    }
    this.classList.add('active_page');
  });
}

// Form validation

const form = document.getElementById('form');
const comment = document.getElementById('comment');
const err_comment = document.querySelector('.custom__comment__box');
const message = document.querySelector('.err__msg');

//Event Listeners
form.addEventListener('submit', function (e) {
  //   e.preventDefault();
  if (comment.value.length < 1) {
    message.textContent = 'Comment Box Cannot be Empty';
    err_comment.classList.add('empty');
    e.preventDefault();
  } else {
    message.textContent = '';
    err_comment.classList.remove('empty');
  }
});
