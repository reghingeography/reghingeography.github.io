// Sample blog data - you can expand this with your actual blog posts
const blogPosts = [
  {
    id: 1,
    title: "Modern Cartographic Techniques for Digital Mapping",
    excerpt: "Exploring the tools and methodologies behind creating detailed geopolitical maps using GIS software, QGIS, and Adobe Illustrator for professional cartographic visualization.",
    category: "Tutorial",
    date: "March 15, 2024",
    readTime: "8 min read",
    image: "https://placehold.co/600x400/0d47a1/ffffff?text=Mapping+Techniques",
    link: "#"
  },
];

// Function to display blog posts
function displayBlogPosts(posts) {
  const blogGrid = document.querySelector('.blog-grid');
  if (!blogGrid) return;
  
  blogGrid.innerHTML = posts.map(post => `
    <article class="blog-card fade-in">
      <div class="blog-image">
        <img src="${post.image}" alt="${post.title}">
      </div>
      <div class="blog-content">
        <div class="blog-meta">
          <span class="blog-category">${post.category}</span>
          <span class="blog-date">${post.date} • ${post.readTime}</span>
        </div>
        <h3 class="blog-title">${post.title}</h3>
        <p class="blog-excerpt">${post.excerpt}</p>
        <a href="${post.link}" class="blog-link">Read Analysis <i class="fas fa-arrow-right"></i></a>
      </div>
    </article>
  `).join('');
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  displayBlogPosts(blogPosts);
});