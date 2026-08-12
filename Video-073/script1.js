function createCard(title, cName, views, monthsOld, duration, thumbnail)
{
    let viewString;
    if (views >= 1000000)
    {
        // toFixed is used to round the decimals to the specifed digit and convert it into a string i.e 1,100,000 -> 1.1m
        viewString = (views / 1000000).toFixed(1) + "m";
    }
    else if (views >= 1000)
    {
        viewString = Math.floor(views / 1000) + "k";
    }
    else {
        viewString = views;
    }

    let publishTime;
    if (monthsOld >= 12)
    {
        publishTime = Math.floor(monthsOld / 12);
        if (publishTime > 1)
        {
            publishTime += " years ago";
        }
        else
        {
            publishTime += " year ago";
        }
    }
    else 
    {
        publishTime = monthsOld;
        if (publishTime > 1)
        {
            publishTime += " months ago";
        }
        else
        {
            publishTime += " month ago";
        }
    }

    let cardHTML = `
        <div class = "card">
            <div class = "thumbnail-box">
                <img src = "${thumbnail}" alt = "Video Thumbnail">
                <span class = "duration">${duration}</span>
            </div>
            <div class = "card-content">
                <h2>${title}</h2>
                <div class = "card-metadata">
                    <span>${cName}</span>
                    <span>•</span>
                    <span>${viewString} views</span>
                    <span>•</span>
                    <span>${publishTime}</span>
                </div>
            </div>
        </div>
        `;

    document.querySelector(".container").insertAdjacentHTML("beforeend", cardHTML);
}

createCard(
    "JavaScript Tutorial for Beginners | Sigma Web Dev Course Video #13",
    "CodeWithHarry",
    560000,
    4, 
    "31:20",
    "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg"
)

createCard(
    "How to Master Flexbox & CSS Grid Automatically", 
    "CodeWithHarry", 
    1200000, 
    25, 
    "18:45", 
    "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg"
);

createCard(
    "How to Master Flexbox & CSS Grid Automatically", 
    "CodeWithHarry", 
    1200000, 
    25, 
    "18:45", 
    "https://i.ytimg.com/vi/kJEsTjH5mVg/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLBYghRBiZcZs-xVJKq92lAM8h3BOg"
);
