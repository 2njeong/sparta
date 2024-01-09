export function search() {
  const input = document.querySelector(".form-control").value.toLowerCase();
  // => 객체 하나하나 / textContent 말고 꼭 value로!!! 왜? 사용자가 뭘 입력할지 모르니까 textContet는 <p> <div> 이런거 다 포함한 거
  const nameArr = document.querySelectorAll(".card-title"); // Nodelist(리스트랑 다름)

  let movieFound = Array.from(nameArr).filter((a) => {
    // Nodelist를 리스트형태로 바꿔주고 filter
    let searchtitle = a.textContent.toLowerCase(); // input이랑 type을 맞춰주고
    let isMatch = searchtitle.includes(input);
    if (isMatch) {
      a.closest(".card").style.display = "flex"; // 가까운 부모 클래스 중 card라는 클래스에~
      // block은 여러카드가 수직으로만 배열 flex는 수직 수평 둘다가능
    } else {
      a.closest(".card").style.display = "none";
    }
    return isMatch;
  });

  if (movieFound.length === 0) {
    alert("찾으시는 영화가 없습니다");
  }
}
const searchButton = document.getElementById("button-addon2");
searchButton.addEventListener("click", search); // export만 할 게 아니라 html과 연결되도록
