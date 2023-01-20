let rateAgain = function (e) {
    // location.reload()
    let html = `
        <div class="container ratingContainer">
            <div class="star-wrapper">
                <img class="star" src="./src/img/icon-star.svg" alt="" width="20" aria-label="hidden">
            </div>
            <h1 class="title">How did we do?</h1>
            <p class="offering-text"> Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
            <div class="rating">
                <span class="ratingitem">1</span>
                <span class="ratingitem">2</span>
                <span class="ratingitem">3</span>
                <span class="ratingitem">4</span>
                <span class="ratingitem">5</span>
            </div>
            <button class="btn btn-submit">SUBMIT</button>
        </div>
        `
    mainContent.innerHTML = html;
};



