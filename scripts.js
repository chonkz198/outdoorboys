 function animateButtonClick() {
  const button = document.querySelector('.buy-button');
  button.classList.add('clicked');
  setTimeout(() => {
    button.classList.remove('clicked');
  }, 500);
}
document.querySelector('.buy-button').addEventListener('click', function() {
  animateButtonClick();
});

document.addEventListener('DOMContentLoaded', function () {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', function () {
            const tabName = button.getAttribute('data-tab');

            // Hide all tab contents and deactivate all tab buttons
            tabContents.forEach(content => {
                content.classList.remove('active');
            });

            tabButtons.forEach(btn => {
                btn.classList.remove('active');
            });

            // Show the selected tab content and activate the clicked tab button
            const selectedTabContent = document.getElementById(tabName);
            if (selectedTabContent) {
                selectedTabContent.classList.add('active');
                button.classList.add('active');
            }
        });
    });
});


const carousel = document.getElementById('carousel');
const scrollRightBtn = document.getElementById('scroll-right');
const scrollLeftBtn = document.getElementById('scroll-left');

carousel.addEventListener('mouseenter', function () {
  scrollLeftBtn.style.display = 'block';
  scrollRightBtn.style.display = 'block';
});

carousel.addEventListener('mouseleave', function () {
  scrollLeftBtn.style.display = 'none';
  scrollRightBtn.style.display = 'none';
});

document.getElementById('scroll-right').addEventListener('click', function () {
  carousel.scrollBy({
    left: 200,
    behavior: 'smooth',
  });
});

document.getElementById('scroll-left').addEventListener('click', function () {
  carousel.scrollBy({
    left: -200,
    behavior: 'smooth',
  });
});
document.addEventListener('DOMContentLoaded', function () {
  const videoWrappers = document.querySelectorAll('.vid-wrapper');

  videoWrappers.forEach(wrapper => {
    wrapper.addEventListener('mouseenter', function () {
      wrapper.querySelector('video').classList.add('video-controls');
    });

    wrapper.addEventListener('mouseleave', function () {
      wrapper.querySelector('video').classList.remove('video-controls');
    });
  });
});