let closingCross = document.querySelector('.closing-cross');
let sidebarRight = document.querySelector('.sidebar-right');
let content = document.querySelector('.content');

closingCross.addEventListener('click', () => {
	sidebarRight.style.display = 'none'
	content.style.gridTemplateColumns = '310px auto'
})