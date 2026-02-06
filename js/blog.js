// Blog Posts Data - Add your own posts here!
const blogPosts = [
  {
    id: 1,
    title: "The Art of Historical Map Recreation",
    date: "March 15, 2023",
    category: "Tutorial",
    excerpt: "A deep dive into my process for recreating historical maps with modern tools and attention to detail.",
    image: "https://placehold.co/600x400/6a0dad/white?text=Historical+Maps&font=roboto",
    content: `
      <p>Historical map recreation is more than just copying old designs—it's about understanding the context, the tools available at the time, and the stories behind each boundary line.</p>
      
      <p>When I approach a historical map recreation, I start with extensive research. What were the political realities of the time? What mapping techniques were available? How accurate were the measurements?</p>
      
      <img src="https://placehold.co/800x400/cc0000/white?text=Map+Recreation+Process&font=roboto" alt="Map recreation process">
      
      <p>The tools I use have evolved significantly. While early maps were created with quill and parchment, I utilize modern GIS software alongside traditional design principles. This hybrid approach allows for both historical accuracy and visual appeal.</p>
      
      <h3>Key Steps in My Process:</h3>
      <ol>
        <li>Research historical sources and context</li>
        <li>Digitize original boundaries using GIS tools</li>
        <li>Recreate period-appropriate typography</li>
        <li>Add contextual annotations and explanations</li>
        <li>Present in both historical and modern contexts</li>
      </ol>
      
      <p>The final product should educate while engaging the viewer. A successful historical map tells multiple stories: what was, what could have been, and how our understanding of borders has evolved.</p>
    `
  },
  {
    id: 2,
    title: "Understanding European Microstates Through Maps",
    date: "February 28, 2023",
    category: "Analysis",
    excerpt: "Exploring the fascinating world of European microstates and their unique geopolitical situations.",
    image: "https://placehold.co/600x400/cc0000/white?text=European+Microstates&font=roboto",
    content: `
      <p>Europe's microstates—Vatican City, Monaco, San Marino, Liechtenstein, and Andorra—represent fascinating anomalies in the modern nation-state system. Each has its own unique story of survival and adaptation.</p>
      
      <p>Through detailed mapping, we can better understand how these tiny territories maintain their sovereignty surrounded by much larger neighbors. Their borders, though small, tell stories of diplomacy, history, and sometimes sheer luck.</p>
      
      <p>In my latest series of maps, I've focused on:</p>
      <ul>
        <li>Comparative size visualizations</li>
        <li>Historical border evolution</li>
        <li>Economic and political relationships with neighbors</li>
        <li>Population density patterns</li>
      </ul>
      
      <p>One surprising finding: despite their size, these microstates have disproportionately complex border situations. Vatican City, for instance, has the most complex border per square kilometer of any state in the world.</p>
    `
  },
  {
    id: 3,
    title: "The Future of Cartography in Social Media",
    date: "January 10, 2023",
    category: "Thoughts",
    excerpt: "How platforms like TikTok and Instagram are changing how we create and consume maps.",
    image: "https://placehold.co/600x400/6a0dad/white?text=Cartography+Evolution&font=roboto",
    content: `
      <p>The rise of short-form video platforms has revolutionized how geographic information is shared and consumed. As a cartographer active on TikTok and Instagram, I've witnessed this transformation firsthand.</p>
      
      <p>Traditional mapmaking was a slow, deliberate process. Today, we create maps that need to communicate complex ideas in seconds. This requires a different approach to design, focusing on:</p>
      
      <img src="https://placehold.co/800x400/6a0dad/white?text=Social+Media+Maps&font=roboto" alt="Social media maps">
      
      <ul>
        <li><strong>Instant readability:</strong> Viewers should understand the map's message within the first 2-3 seconds</li>
        <li><strong>Visual hierarchy:</strong> Emphasizing the most important elements through color and size</li>
        <li><strong>Storytelling:</strong> Each map should tell a complete story or raise an interesting question</li>
        <li><strong>Interactivity:</strong> Encouraging viewers to engage with the content through questions or polls</li>
      </ul>
      
      <p>The future of cartography lies in balancing accuracy with accessibility. We're not dumbing down geography—we're making it more engaging for new audiences.</p>
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
