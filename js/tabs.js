const tabs = Array.from(document.getElementsByClassName("tab"))

function expandTab(id, n) {
    if (window.innerWidth < 1024) {
        if (id.classList.contains("active")) {
            id.classList.toggle("active")
        } else {
            var activeTab = document.querySelector(".tab.active")
            if (activeTab) {
                activeTab.classList.remove("active")
            }
            id.classList.add("active")
        }

    } else {
        tabs.forEach(e => {
            e.classList.remove("active")
        });
        var tabExpanded = document.querySelector(".secondary-col-tab.tab-expanded")
        if (tabExpanded) {
            tabExpanded.classList.remove("tab-expanded")
        }
        document.querySelector("#secondary-col-state-"+n).classList.add("tab-expanded")
        id.classList.add("active")
    }
}