const checkboxes = document.querySelectorAll('.interests input[type="checkbox"]');

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', function() {
    let parent = checkbox.closest('.interest');
    let siblings = parent.querySelectorAll('.interests input[type="checkbox"]');
    let children = parent.querySelectorAll('.interests_active input[type="checkbox"]');
    
    children.forEach(child => {
      child.checked = checkbox.checked;
    });

 
    let allChecked = Array.from(siblings).every(sibling => sibling.checked);
    let allUnchecked = Array.from(siblings).every(sibling => !sibling.checked);

    if (allChecked) {
      parent.querySelector('.interest__check').checked = true;
      parent.querySelector('.interest__check').indeterminate = false;
    } else if (allUnchecked) {
      parent.querySelector('.interest__check').checked = false;
      parent.querySelector('.interest__check').indeterminate = false;
    } else {
      parent.querySelector('.interest__check').checked = false;
      parent.querySelector('.interest__check').indeterminate = true;
    }

    
    let grandparent = parent.closest('.interests_active');
    if (grandparent) {
      let siblings = grandparent.querySelectorAll('.interests input[type="checkbox"]');
      let allChecked = Array.from(siblings).every(sibling => sibling.checked);
      let allUnchecked = Array.from(siblings).every(sibling => !sibling.checked);

      if (allChecked) {
        grandparent.closest('.interest').querySelector('.interest__check').checked = true;
        grandparent.closest('.interest').querySelector('.interest__check').indeterminate = false;
      } else if (allUnchecked) {
        grandparent.closest('.interest').querySelector('.interest__check').checked = false;
        grandparent.closest('.interest').querySelector('.interest__check').indeterminate = false;
      } else {
        grandparent.closest('.interest').querySelector('.interest__check').checked = false;
        grandparent.closest('.interest').querySelector('.interest__check').indeterminate = true;
      }
    }
  });
});
