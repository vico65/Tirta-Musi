let buttonListSidebar = document.getElementById('button_list_sidebar')
let sidebar = document.getElementById('sidebar')
let iconListSidebar = document.getElementById('icon_list_sidebar')
let toggleDarkMode = document.querySelector('.toggle-dark-mode')
let toggleDarkModeChild = document.querySelector('.toggle-dark-mode div')
let htmlTag = document.querySelector('html')
let iconTerang = document.querySelector('.icon-terang')
let iconGelap = document.querySelector('.icon-gelap')

let closeSidebar = () => {
    sidebar.classList.toggle('-ml-96')
    iconListSidebar.classList.toggle('text-sky-500')
    iconListSidebar.classList.toggle('dark:text-sky-500')
}

buttonListSidebar.addEventListener('click', closeSidebar)

toggleDarkMode.addEventListener('click', () => {
    toggleDarkModeChild.classList.toggle('ml-auto')
    htmlTag.classList.toggle('dark')
    iconTerang.classList.toggle('text-yellow-500')
    iconTerang.classList.toggle('text-slate-400')
    iconGelap.classList.toggle('text-sky-500')
    iconGelap.classList.toggle('text-slate-400')
})
