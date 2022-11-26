let nav1 = document.getElementById("nav1")
let nav2 = document.getElementById("nav2")
let nav3 = document.getElementById("nav3")
let search = document.getElementById("search-nav")

let nav1Title = document.getElementById("nav1-title")
let nav2Title = document.getElementById("nav2-title")
let nav3Title = document.getElementById("nav3-title")
let searchIcon = document.getElementById("search-icon")

function clearNav() {
    nav1.classList.add("menu-closed")
    nav2.classList.add("menu-closed")
    nav3.classList.add("menu-closed")
    search.classList.add("menu-closed")

    nav1Title.classList.remove("active")
    nav2Title.classList.remove("active")
    nav3Title.classList.remove("active")
    searchIcon.classList.remove("active")

}

function toggleNav1() {

    nav1.classList.toggle("menu-closed")
    nav2.classList.add("menu-closed")
    nav3.classList.add("menu-closed")
    search.classList.add("menu-closed")

    nav1Title.classList.toggle("active")
    nav2Title.classList.remove("active")
    nav3Title.classList.remove("active")
    searchIcon.classList.remove("active")


    return false
}

function toggleNav2() {

    nav1.classList.add("menu-closed")
    nav2.classList.toggle("menu-closed")
    nav3.classList.add("menu-closed")
    search.classList.add("menu-closed")

    nav1Title.classList.remove("active")
    nav2Title.classList.toggle("active")
    nav3Title.classList.remove("active")
    searchIcon.classList.remove("active")

    return false
}

function toggleNav3() {

    nav1.classList.add("menu-closed")
    nav2.classList.add("menu-closed")
    nav3.classList.toggle("menu-closed")
    search.classList.add("menu-closed")

    nav1Title.classList.remove("active")
    nav2Title.classList.remove("active")
    nav3Title.classList.toggle("active")
    searchIcon.classList.remove("active")

    return false
}

function toggleSearch() {
    nav1.classList.add("menu-closed")
    nav2.classList.add("menu-closed")
    nav3.classList.add("menu-closed")
    search.classList.toggle("menu-closed")

    nav1Title.classList.remove("active")
    nav2Title.classList.remove("active")
    nav3Title.classList.remove("active")
    searchIcon.classList.toggle("active")

    return false
}

function toggleSideMenu(id) {

    if (id.classList[1] == "icon-closed") {

        id.classList.replace("icon-closed", "icon-open")
        id.innerHTML = "<i class='fa-solid fa-x'></i>"

        document.getElementById("side-menu").classList.remove("menu-closed")
        document.getElementById("side-menu-main").classList.remove("menu-closed")
        document.getElementById("side-menu-1").classList.add("menu-closed")
        document.getElementById("side-menu-2").classList.add("menu-closed")
        document.getElementById("side-menu-3").classList.add("menu-closed")

    } else {

        id.classList.replace("icon-open", "icon-closed")
        id.innerHTML = "<i class='fa-solid fa-bars'></i>"

        document.getElementById("side-menu").classList.add("menu-closed")

    }

}

function showSideNav1() {
    document.getElementById("side-menu-main").classList.add("menu-closed")
    document.getElementById("side-menu-1").classList.remove("menu-closed")
}

function showSideNav2() {
    document.getElementById("side-menu-main").classList.add("menu-closed")
    document.getElementById("side-menu-2").classList.remove("menu-closed")
}

function showSideNav3() {
    document.getElementById("side-menu-main").classList.add("menu-closed")
    document.getElementById("side-menu-3").classList.remove("menu-closed")
}

function showMainNav() {
    document.getElementById("side-menu-main").classList.remove("menu-closed")
    document.getElementById("side-menu-1").classList.add("menu-closed")
    document.getElementById("side-menu-2").classList.add("menu-closed")
    document.getElementById("side-menu-3").classList.add("menu-closed")

}