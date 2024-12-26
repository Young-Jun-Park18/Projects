// 커서 깜빡임 함수
function blink() {
  // classList 프로퍼티(속성)를 사용하면 요소에 클래스를 쉽게 추가, 제거, 토글할 수 있다.
  // toggle은 class가 있으면 제거하고, class가 없으면 추가하는 "상태반전" 기능이다.
  // 따라서 p태그를 지목하고 있는 target에 active라는 class가 없으면 만들고, 있으면 추가한다.
  target.classList.toggle("active");
}
// setInterval은 js의 내장함수로서 원하는 함수를 원하는 간격(ms)으로 반복시켜준다
// 따라서 내가 위에서 만든 blink라는 toggle을 0.5초마다 반복한다.
setInterval(blink, 500);

// 복합 선택자를 설정할 땐 querySelector가 좋지만, 속도는 get method가 더 빠름
let target = document.querySelector("#dynamic");
// 미국 기업의 슬로건 배열
let sloganArr = [
  "Instagram : Capturing and sharing the world's moments",
  "Facebook : Move Fast and Break Things",
  "Apple : Think Different",
  "Tesla : To accelerate the advent of sustainable transport",
  "SpaceX : Making Life Multiplanetary",
  "NVIDIA : The Way It's Meant to Be Played",
  "Netflix : See What’s Next",
  "Nike : Just Do It",
  "Starbucks : To inspire and nurture the human spirit",
  "Airbnb : Belong Anywhere",
];
// Math.random()은 랜덤하게 선택하는 내장 함수이다.
// * sloganArr.length는 내가 만든 배열의 index 갯수보다 random 값이 커지지 않게 해준다.
// Math.floor()는 이 랜덤값의 소수점을 다 버림하고 정수 값을 반환한다.
let selectSlogan = sloganArr[Math.floor(Math.random() * sloganArr.length)];

// 이렇게 얻은 배열을 .split("")을 통해 한글자 한글자 자른다
let selectSloganArr = selectSlogan.split("");

// [1번 순서]
// Arr 매개변수에 들어가는 인자는 결국 selectSloganArr이다.
function typingSlogan(Arr) {
  if (Arr.length > 0) {
    //Arr.shift()는 Arr에서 가장 앞의 index를 반환하고, 반환된 값은 배열에서 제외시키는 함수이다.
    //textContent가 Arr.shift()로 반환된 텍스트를 HTML target에 추가시킨다
    //따라서 실행하면 한 글자가 화면에 반환된다.
    target.textContent += Arr.shift();

    //setTimeout(function(){함수},지연시간)은 일정 시간 이후 함수를 실행하도록 하는 함수
    //뒤에 다시 typingSlogan(Arr)을 실행한다
    setTimeout(function () {
      typingSlogan(Arr);
    }, 80);
  } else {
    setTimeout(resetTyping, 3500);
  }
}

// [3번 순서]
// 우리가 처음 배열 설정하고, 배열 크기를 넘지 않는 랜덤 값을 뽑고, 문장을 자르고, 값을 반환하는 것을 함수로 정의
function randomString() {
  let sloganArr = [
    "Instagram : Capturing and sharing the world's moments",
    "Facebook : Move Fast and Break Things",
    "Apple : Think Different",
    "Tesla : To accelerate the advent of sustainable transport",
    "SpaceX : Making Life Multiplanetary",
    "NVIDIA : The Way It's Meant to Be Played",
    "Netflix : See What’s Next",
    "Nike : Just Do It",
    "Starbucks : To inspire and nurture the human spirit",
    "Airbnb : Belong Anywhere",
  ];
  let selectSlogan = sloganArr[Math.floor(Math.random() * sloganArr.length)];
  let selectSloganArr = selectSlogan.split("");

  return selectSloganArr;
}

// [2번 순서]
// 반복이 돌아가다가 Arr.length === 0이 되었을 때.
// textContent를 빈칸 "" 으로 초기화 시킨다.
// 다시 반복문이 실행되게 함수를 호출한다. 매개변수로는 randomString()을 넣는다
function resetTyping() {
  target.textContent = "";
  typingSlogan(randomString());
}

// 1번은 수동으로 실행
typingSlogan(randomString());
