$("#slider1").BloggerDynamicSlider({
    blogURL: "https://ilaingarindia.blogspot.com/", // Your Blog URL. example: "http://imagesliderforblogger.blogspot.com"; Only need to specify when fetching slider content from another blog
    labelName: "", // Show posts from specific Label. Specify a 'Label', or leave it empty to fetch from all recent posts
    maxItem: 6, // Max number of Slider Posts to show
    showPostTitle: true, // Show post title as Caption ? (true/false)
    postTitleStyle: "default", // Select post title/caption style "default, "overlayDark" or "overlayLight"
    imageWidth: 544, // Image width in px value
    imageHeight: 280, // Image height in px value
    animation: "fade", // Select your animation type, "fade" or "slide"
    controlNav: true, // Navigation for paging control of each slide? (true/false)
    directionNav: true, // Previous/next navigation? (true/false)
    pauseOnHover: false, // Pause slideshow when hovering over slider, then resume when no longer hovering (true/false)
    slideshowSpeed: 7000, // Set the speed of the slideshow cycling, in milliseconds
    animationSpeed: 600, // Set the speed of animations, in milliseconds
    animationLoop: true, // Should the animation loop? (true/false)
});
