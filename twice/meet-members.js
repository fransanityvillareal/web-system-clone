
document.addEventListener('DOMContentLoaded', function () {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const memberProfiles = document.querySelectorAll('.member-profile');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      filterBtns.forEach(b => b.classList.remove('active'));

      this.classList.add('active');

      const filter = this.getAttribute('data-filter');

      memberProfiles.forEach(profile => {
        if (filter === 'all') {
          profile.style.display = 'block';
        } else {
          const positions = profile.getAttribute('data-position').split(',');
          if (positions.includes(filter)) {
            profile.style.display = 'block';
          } else {
            profile.style.display = 'none';
          }
        }

        if (profile.style.display === 'block') {
          profile.style.animation = 'fadeIn 0.5s ease';
        }
      });
    });
  });

  memberProfiles.forEach(profile => {
    profile.addEventListener('mouseenter', () => {
      profile.style.transform = 'translateY(-10px)';
    });
    profile.addEventListener('mouseleave', () => {
      profile.style.transform = 'translateY(0)';
    });
  });

  const style = document.createElement('style');
  style.innerHTML = `
            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
            }
`;
  document.head.appendChild(style);
});
