
  function changeTab(tabId) {
    var tabs = document.querySelectorAll('.tabs-item');
    tabs.forEach(function(tab) {
      tab.classList.remove('active');
    });
    var selectedTab = document.getElementById(tabId);
    selectedTab.classList.add('active');
  }