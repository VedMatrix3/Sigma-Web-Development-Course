function createCard(title, views, monthsOld, duration, thumbnail) {
let v = "0 M Views"; 
    let y = "0 years ago";
    if (views<1000) {
        v = `${views} Views`;
    } else if (views < 100000) { 
 v = `${(views/1000).toFixed(2)} K Views`;
    }
    else if (views < 10000000) { 
 v = `${(views/100000).toFixed(2)} M Views`;
    }
    else if (views < 10000000000) { 
 v = `${(views/10000000).toFixed(2)} Cr Views`;
    }

if(monthsOld<12){
        y=`${monthsOld} months ago`
    }else {
        y=`${(monthsOld/12).toFixed(1)} years ago`
    }

    let cards = `
    <div class="cards">
    <div class="left">
      <img
        src="${thumbnail}"
        alt="Image Error!">
      <span class="time">${duration}</span>
    </div>
    <div class="right">
      <div class="title">${title}</div>
      <div class="vay">
        <div class="view">
          ${v}
        </div>
        <div class="year">
          ${y}
        </div>
      </div>
    </div>
    </div>`;

    document.querySelector(".container").insertAdjacentHTML("beforeend", cards);

}

createCard(
    "JavaScript Tutorial for Beginners | Sigma Web Dev Course Video #13",
    580000,
    4,
    "31:20",
    "https://i.ytimg.com/vi/CyRlWlaJnTY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB1R2PKIPQMWoH2j-NKBuRSlJjFRw"
)
createCard(
    "JavaScript Tutorial for Beginners | Sigma Web Dev Course Video #13",
    58000000,
    45,
    "51:20",
    "https://i.ytimg.com/vi/CyRlWlaJnTY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB1R2PKIPQMWoH2j-NKBuRSlJjFRw"
)




// function v(views) {
//     let v = "0 M Views"; 
//     let y = "0 years ago";
//     if (views<1000) {
//         v = `${views} Views`;
//     } else if (views < 100000) { 
//  v = `${(views/1000).toFixed(2)} K Views`;
//     }
//     else if (views < 10000000) { 
//  v = `${(views/100000).toFixed(2)} M Views`;
//     }
//     else if (views < 10000000000) { 
//  v = `${(views/10000000).toFixed(2)} Cr Views`;
//     }
// return v;
// }
// function y(year) {
//     let v = "0 M Views"; 
//     let y = "0 years ago";
//     if(year<12){
//         y=`${year} months ago`
//     }else {
//         y=`${(year/12).toFixed(1)} years ago`
//     }
// return y;
// }

// console.log(v(999999999));
// console.log(y(13));