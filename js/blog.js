// Blog Posts Data - Add your own posts here!
const blogPosts = [
  {
    id: 1,
    title: "January wrapped",
    date: "February 6th, 2026",
    category: "Exclusives",
    excerpt: "My Statistics for January 2026 and what surprises it gave us.",
    image: "https://placehold.co/600x400/6a0dad/white?text=January+Wrapped&font=roboto",
    content: `
      <p>I was meaning to share these statistics with you all, do not fear, because this will become a monthly tradition for me.</p>
      <h2>The Statistics </h2>
      
      <p>ReghinGeo had 11.7K followers on TikTok at the end of December 2025, and we finished January with over 12.8K! That's 1100 new followers in a month! Crazy stats for me.</p>
      <p>With this support, I am 100% sure that we'll reach 13K this month (not because I need 100 more followers lmao). February is a challenging month, as it has 28 days, and I have no idea how to achieve at least 1,000 followers in 28 days, since 1,000 followers is my goal.</p>
      <p>I am looking forward to writing more blogs to inform literally no one.</p>
    `
  },
  {
    id: 2,
    title: "2026 Road Map",
    date: "February 6th, 2026",
    category: "Analysis",
    excerpt: "The 2026 Road Map and things to expect.",
    image: "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGF0YSUyMGFuYWx5c2lzfGVufDB8fDB8fHww",
    content: `
      <p>2026 will definitely be a better year than 2025, I hope so... </p>
      <p>ReghinGeo has, as of Feb. 6th 2026, a total of 22.2K followers, and we expect at least 15.0K and 10.0K on TikTok and instagram respectively, by the end of March. </p>
      <p>In March, I would like to create some sort of series, i dont even have the idea planned, but if it does well and gets me followers, views, and likes, it will survive, and possibly be renewed for a season 2 perhaps. However, as we've seen from 3 FAILED series, this will most likely fail aswell.</p>
      <p>ReghinGeo will DEFINITELY hop on trends, seen from the success of "Question for Romanians", which made 60K views and 67 new followers (shut up) </p>
      <p>On the other side, to balance the views between TikTok and Instagram, I will post maps that do well on Instagram, which usually do badly on TikTok, but who knows, maybe it blows up on both platforms.</p>
      <p>The long term goal is to reach 50.000 followers on TikTok, because of Bulletin Boards, which require atleast 50.000 followers, quite a stupid requirement in my opinion, I hope they lower it.</p>
      <p>Thank you for reading this silly lil blog, see you in the next one!</p>
    `
  },
  {
    id: 3,
    title: "The Launch",
    date: "February 6th, 2026",
    category: "Launch",
    excerpt: "The launch of the ReghinGeo Blog.",
    image: "https://placehold.co/600x400/6a0dad/white?text=Cartography+Evolution&font=roboto",
    content: `
      <p>Welcome to the official ReghinGeo Blog, where I will share experiences, tutorials, analytics, and many more fun stuff!</p>
      <p>Have fun reading!!! :D</p>
    `
  },
  {
    id: 4,
    title: "Mapping Linguistic Boundaries in Transylvania",
    date: "December 5, 2022",
    category: "Regional",
    excerpt: "A detailed look at the complex linguistic landscape of Transylvania and how it's changed over time.",
    image: "https://placehold.co/600x400/cc0000/white?text=Transylvania+Linguistics&font=roboto",
    content: `
      <p>Transylvania represents one of Europe's most fascinating linguistic mosaics. Romanian, Hungarian, German, Romani, and other languages have coexisted and influenced each other for centuries.</p>
      
      <p>My mapping project focused on documenting how these linguistic boundaries have shifted from the 19th century to the present day. The results reveal patterns of migration, assimilation, and cultural preservation.</p>
      
      <h3>Key Findings:</h3>
      <ol>
        <li>Urban areas show much faster linguistic change than rural regions</li>
        <li>Educational policies have had a significant impact on language preservation</li>
        <li>Some communities maintain language islands despite being surrounded by different linguistic groups</li>
        <li>The Hungarian-speaking areas show remarkable resilience along historical patterns</li>
      </ol>
      
      <p>These maps aren't just academic exercises—they help communities understand their own history and policymakers make informed decisions about language education and preservation.</p>
      
      <p>The most challenging aspect was obtaining accurate contemporary data, as official statistics don't always reflect the complex reality of multilingual households and code-switching communities.</p>
    `
  }
];

// Generate blog posts on page load
document.addEventListener("DOMContentLoaded", function() {
  const blogGrid = document.querySelector(".blog-grid");
  const viewAllBtn = document.getElementById("viewAllBlogs");
  
  // Function to render blog posts
  function renderBlogPosts(posts) {
    blogGrid.innerHTML = '';
    
    posts.forEach(post => {
      const postElement = document.createElement("article");
      postElement.className = "blog-post fade-in";
      postElement.innerHTML = `
        <img src="${post.image}" alt="${post.title}" class="blog-image">
        <div class="blog-content">
          <div class="blog-meta">
            <span class="blog-date">${post.date}</span>
            <span class="blog-category">${post.category}</span>
          </div>
          <h3>${post.title}</h3>
          <p class="blog-excerpt">${post.excerpt}</p>
          <a href="#" class="read-more" data-id="${post.id}">
            Read Full Post <i class="fas fa-arrow-right"></i>
          </a>
        </div>
      `;
      blogGrid.appendChild(postElement);
    });
    
    // Add click events to "Read More" links
    document.querySelectorAll(".read-more").forEach(link => {
      link.addEventListener("click", function(e) {
        e.preventDefault();
        const postId = parseInt(this.getAttribute("data-id"));
        openBlogPost(postId);
      });
    });
  }
  
  // Initially show 3 posts
  renderBlogPosts(blogPosts.slice(0, 3));
  
  // "View All" button functionality
  if (viewAllBtn) {
    viewAllBtn.addEventListener("click", function() {
      renderBlogPosts(blogPosts);
      viewAllBtn.style.display = "none";
    });
  }
  
  // Modal elements
  const modal = document.getElementById("blogModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalDate = document.getElementById("modalDate");
  const modalCategory = document.getElementById("modalCategory");
  const modalContent = document.getElementById("modalContent");
  const modalClose = document.querySelector(".modal-close");
  
  // Function to open blog post in modal
  function openBlogPost(id) {
    const post = blogPosts.find(p => p.id === id);
    if (!post) return;
    
    modalTitle.textContent = post.title;
    modalDate.textContent = post.date;
    modalCategory.textContent = post.category;
    modalContent.innerHTML = post.content;
    
    // Show modal
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
  }
  
  // Close modal when clicking X or outside
  modalClose.addEventListener("click", closeModal);
  modal.addEventListener("click", function(e) {
    if (e.target === modal) {
      closeModal();
    }
  });
  
  // Close modal with Escape key
  document.addEventListener("keydown", function(e) {
    if (e.key === "Escape" && modal.style.display === "flex") {
      closeModal();
    }
  });
  
  function closeModal() {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
  
  // Initialize fade-in animations for blog posts
  const blogObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("appear");
      }
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll(".blog-post").forEach(post => {
    blogObserver.observe(post);
  });
});

