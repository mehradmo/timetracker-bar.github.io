function share() {
      document.querySelector('.share').classList.toggle('active');
      document.querySelector('.button').classList.toggle('active2');
      document.querySelector('.span').style.display = 'block';
}

function span(){
      document.querySelector('.share').classList.remove('active');
      document.querySelector('.button').classList.remove('active2');
      document.querySelector('.span').style.display = 'none';
}