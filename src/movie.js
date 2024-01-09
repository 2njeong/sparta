export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMjY4NWNhYTNiNWMxYzY3Y2MzYjQ2NWZjMTQ1ZGFjOSIsInN1YiI6IjY1OTgxMDZlNWNjMTFkNzgzZDdkYTMxNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._PJB77UWCNeryilusC77GwqCXQ6x3YskopkHgk2azok"
  }
};
export function showAlert(movieid) {
  alert(`영화 id :${movieid}`);
}
fetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1", options)
  .then((response) => response.json())
  .then((data) => {
    let resultsArr = data.results;

    resultsArr.forEach((a) => {
      let imageSrc;
      if (a.poster_path) {
        imageSrc = `http://image.tmdb.org/t/p/w500/${a.poster_path}`;
      } else {
        imageSrc = "https://item.kakaocdn.net/do/3ffb06de8031cef3cf76f39e8230ff648f324a0b9c48f77dbce3a43bd11ce785.jpg";
      }

      let movietitle = a.title; // arr
      let moviecontent = a.overview;
      let movieaverage = a.vote_average;
      let movieid = a.id;

      let temp_html = `
                    <button class="card h-100" id="moviebtn" data-id="${movieid}"> 
                        <img id='image' src=${imageSrc} class="card-img-top" alt="...">
                         <div class="card-body">
                            <h5 id="title" class="card-title">${movietitle}</h5>
                            <div id="content" class="card-text">${moviecontent}</div>
                         </div>
                         <div class="card-footer">
                            <small id="average" class="text-body-secondary">${movieaverage}</small>
                         </div>
                       </div>
                    </button>`;
      const row = document.getElementById("row");
      row.innerHTML += temp_html;
    });

    // showAlert 함수가 전역객체에서 실행되는 함수였어서 module을 나누면 실행 안됨
    // html에 showAlert를 호출하는 id, class 없고 이 파일에 있으니 여기 id/class 로 연결해줘야 함
    const moviebtns = document.querySelectorAll(".card"); // queryselector로 하면 첫번째 요소만 되니까 All로
    moviebtns.forEach((a) => {
      const id = a.dataset.id;
      a.addEventListener("click", () => showAlert(id));
    });
  })
  .catch((err) => console.error(err));
