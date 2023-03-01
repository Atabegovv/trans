const all_tabs = document.querySelectorAll('.tab');
    const all_contents = document.querySelectorAll('.tab_content');

    all_tabs.forEach((tab, index) => {
      tab.addEventListener('click', ()=> {
        all_tabs.forEach(tab => {tab.classList.remove('active')});
        tab.classList.add('active');

        all_contents.forEach(tab_content => {tab_content.classList.remove('active')});
        all_contents[index].classList.add('active');
      });
    });