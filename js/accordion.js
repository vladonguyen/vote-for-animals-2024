
const allPledgeTitles = document.querySelectorAll(".title-pledges");
const allPledgeContent = document.querySelectorAll(".toggle-content");

//attach eventListeners to pledge titles
for (const title of allPledgeTitles) {
    title.addEventListener('click', toggle)
}

//toggle function

function toggle(event) {
    event.preventDefault();

    const currentUrlHash = (event.target.hash).slice(1);

    for (let content of allPledgeContent) {
        let contentId = content.id;

        if (contentId != currentUrlHash && content.classList.contains('active')) {
            content.classList.remove('active');
            content.style.maxHeight = 0;
        } else if (contentId == currentUrlHash) {
            if (!content.classList.contains('active')) {
                content.classList.add('active');
            }

            if (content.classList.contains('first-pledge')) {
                content.classList.remove('first-pledge');
                content.classList.add('hidden-pledge');
                content.style.maxHeight = null;
            } else if (content.style.maxHeight == 0 || content.style.maxHeight == '0px') {
                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                content.style.maxHeight = null;
            }

        }


    }

}
