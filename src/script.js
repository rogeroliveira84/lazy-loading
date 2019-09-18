document.addEventListener("DOMContentLoaded", () => {

    if ("IntersectionObserver" in window) {

        var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

        let lazyImageObserver = new IntersectionObserver((entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {
                    console.log('image loaded')
                    let lazyImage = entry.target;
                    lazyImage.src = lazyImage.dataset.src;
                    lazyImage.classList.remove("lazy");
                    lazyImageObserver.unobserve(lazyImage);
                }
            });
        });

        lazyImages.forEach(lazyImage => {
            lazyImageObserver.observe(lazyImage);
        });

    } else {

        // Intersection Observer is not support, so load the images straightaway
        var lazyImages = document.getElementsByClassName("lazy");
        [].forEach.call(lazyImages, function (lazyImage) {
            lazyImage.src = lazyImage.dataset.src;
            lazyImage.classList.remove("lazy");
            lazyImage.height = 'auto';
        });
    }

});
