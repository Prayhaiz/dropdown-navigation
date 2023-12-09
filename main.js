document.addEventListener("DOMContentLoaded", function() {
    const sidebar = document.getElementById('sidebar');
    const openSidebarButton =       
     document.getElementById('opensidebar');
  
    openSidebarButton.addEventListener('click', function() {
      if (sidebar.classList.contains('active')) {
        sidebar.classList.remove('active');
      } else {
        sidebar.classList.add('active');
      }
    });
  });
  