const btn1 = document.querySelector("#purple");

const btn2 = document.querySelector("#red");

const likes = document.querySelector(".like_count");


let likesOverall = 3; // has to change once i figure out how to add likes from all users
let likeCount = 0;
likes.innerHTML = "Likes: " + likesOverall;
btn1.addEventListener("click", function () {
  if (btn2.classList.contains("red")) {
    btn2.classList.remove("red");
  }
  this.classList.toggle("purple");
  if (likeCount < 1) {
    likeCount += 1;
    //btn1.innerHTML = likeCount;
    likes.innerHTML = "Likes: " + (likeCount + likesOverall);
  }
});


btn2.addEventListener("click", function () {
  if (btn1.classList.contains("purple")) {
    btn1.classList.remove("purple");
  }
  this.classList.toggle("red");
  if (likeCount > 0) {
    likeCount -= 1;
    likes.innerHTML = "Likes: " + (likeCount + likesOverall);
  }
});
