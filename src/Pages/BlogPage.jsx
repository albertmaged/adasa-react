
import { useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faChevronLeft,
  faCalendar,
  faClock,
  faList,
} from "@fortawesome/free-solid-svg-icons";

import { blogs } from "../data/blogs";
import "../BlogPage.css";

export default function BlogPage() {
 const { id } = useParams();

console.log("URL ID:", id);
console.log("Blogs:", blogs);

const blog = blogs.find(
  (item) => String(item.id) === String(id)
);

console.log("Selected blog:", blog);

  // If ID does not exist
  if (!blog) {
    return (
      <div className="bg-black text-white min-vh-100 p-5 text-center">
        <h2>المقال غير موجود</h2>
        <p className="text-white-50">
          لم نتمكن من العثور على المقال المطلوب.
        </p>

        <Link to="/blog" className="text-warning">
          العودة إلى المدونة
        </Link>
      </div>
    );
  }

  return (
    <div className="blog-details-page" dir="rtl">

    
      <section
        className="details-hero"
        style={{
          backgroundImage: `
            linear-gradient(
              to bottom,
              rgba(0,0,0,0.1) 0%,
              rgba(0,0,0,0.35) 45%,
              #080808 100%
            ),
            url("${blog.image}")
          `,
        }}
      >
        <div className="container details-hero-inner">

         
          <div className="details-breadcrumb">

            <Link to="/" aria-label="الرئيسية">
              <FontAwesomeIcon icon={faHouse} />
            </Link>

            <FontAwesomeIcon
              icon={faChevronLeft}
              className="breadcrumb-arrow"
            />

            <Link to="/blog">
              المدونة
            </Link>

            <FontAwesomeIcon
              icon={faChevronLeft}
              className="breadcrumb-arrow"
            />

            <span className="breadcrumb-current">
              {blog.category}
            </span>

          </div>

    
          <div className="details-hero-text">

            <div className="details-meta">

              <span className="details-category">
                {blog.category}
              </span>

              <span>
                <FontAwesomeIcon icon={faCalendar} />
                {blog.date}
              </span>

              <span>
                <FontAwesomeIcon icon={faClock} />
                {blog.readingTime}
              </span>

            </div>

            <h1 className="details-title">
              {blog.title}
            </h1>

          
            <div className="details-author">
              <img
                src={blog.authorImage}
                alt={blog.author}
              />

              <div className="details-author-info">
                <h5>{blog.author}</h5>
                <p>مصور محترف</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      
      <section className="container details-body">

    
        <main className="details-main">

          <div className="details-intro">
            "{blog.description}"
          </div>

          <article
            className="details-article"
            id="article-content"
          >
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
          </article>

        </main>

  
        <aside className="details-sidebar">

          <div className="details-sidebar-title">

            <span className="details-list-icon">
              <FontAwesomeIcon icon={faList} />
            </span>

            <h4>محتويات المقال</h4>

          </div>

          <div className="details-sidebar-links">
            <a href="#article-content">
              {blog.title}
            </a>
          </div>

        </aside>

      </section>

    </div>
  );
}
