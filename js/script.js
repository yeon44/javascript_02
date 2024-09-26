var data_a = 23;
var data_b = 12;
console.log(data_a + data_b);
document.write(data_a + data_b, "<br/>");

var data_c = 12;
var data_d = 5;
console.log(data_c % data_d);
document.write(
  "두 수를 나눈 나머지 값은 ",
  data_c % data_d,
  " 입니다.",
  "<br/>"
);

var 올해연도 = 2024;
올해연도++;
document.write("내년은 ", 올해연도, " 입니다.", "<br/>");

var gender = 1 | 3;
gender % 2 == 0
  ? document.write("당신은 남성 입니다", "<br/>")
  : document.write("당신은 여성 입니다", "<br/>");

// 삼항조건연산자 잘 모르겠습니다...

var img = "";
img += "<img src='./img/kakao_01.jpg'>";
img += "<img src='./img/kakao_02.jpg'>";
img += "<img src='./img/kakao_03.jpg'>";
img += "<img src='./img/kakao_04.jpg'>";
document.write(img);
