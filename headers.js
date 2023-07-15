console.log("HEH")
const sidebar = document.getElementById("sidebar");
const dropdown = document.getElementById("dropdown");
const closebtn = document.getElementById("close-btn");
const Dropdown = () => {
  dropdown.classList.add("active");
};
const DropdownHide = () => {
  dropdown.classList.remove("active");
};
const SideBar = () => {
  sidebar.classList.remove("close");
  sidebar.classList.add("active");
  closebtn.classList.add("active");
};
const CloseSidebar = () => {
  sidebar.classList.remove("active");
  sidebar.classList.add("close");
  closebtn.classList.remove("active");
};