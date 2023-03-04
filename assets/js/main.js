const markAllReadBtn = document.querySelector(".mark-all-read-btn");
const unreadItems = document.querySelectorAll(".unread");
const notificationNumber = document.querySelector(".notif-count");

markAllReadBtn.addEventListener("click", function () {
    unreadItems.forEach((item) => {
        item.classList.remove("unread");
    });
    notificationNumber.innerHTML = "0";
});