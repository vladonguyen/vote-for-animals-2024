
const allPledgeTitles = document.querySelectorAll(".title-pledges");
const allPledgeContent = document.querySelectorAll(".toggle-content");

//attach eventListeners to pledge titles
for (const title of allPledgeTitles) {
    title.addEventListener('click', toggle)
}

//toggle function
//TODO toggle smooth transition
function toggle(event) {
    event.preventDefault();

    const currentUrlHash = (event.target.hash).slice(1);

    for (let content of allPledgeContent) {
        let contentId = content.id;
        if (contentId != currentUrlHash && !content.classList.contains('hidden-pledge')) {
            content.classList.add('hidden-pledge');
        } else if (contentId == currentUrlHash && content.classList.contains('hidden-pledge')) {
            content.classList.remove('hidden-pledge');
        } else if (contentId == currentUrlHash && !content.classList.contains('hidden-pledge')) {
            content.classList.add('hidden-pledge');
        }
    }

}
