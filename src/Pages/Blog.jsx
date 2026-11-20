
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

import { blogs } from "../data/blogs";
import "../Blog.css";

export default function Blog() {
  return (
    <div className="bg-black min-vh-100">

    
      <div className="who-container py-5">
        <h4 className="text-center whorow topic p-2">
          مدونتنا
        </h4>
      </div>

      <h2 className="text-center text-white">
        استكشف <span className="whorow">مقالاتنا</span>
      </h2>

      <p className="text-white-50 text-center py-3">
        اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث
      </p>

      <br />
      <hr />
      <br />

      
      <div className="container pb-5" dir="rtl">
        <div className="row g-4">

          {blogs.map((blog) => (
            <div
              className="col-lg-4 col-md-6"
              key={blog.id}
            >

              <Link
                to={`/blog/${blog.id}`}
                className="blog-card-link"
              >
                <div className="blog-card">

                  <div className="blog-card-image">
                    <img
                      src={blog.image}
                      alt={blog.title}
                    />
                    <span className="blog-image-category">
                      {blog.category}
                    </span>
                  </div>

                  <div className="blog-card-content">

                    <div className="blog-card-meta">
                      <span>{blog.date}</span>
                      <span>
                        <FontAwesomeIcon icon={faClock} />
                        {" "}{blog.readingTime}
                      </span>
                    </div>

                    <h3>{blog.title}</h3>

                    <p>{blog.description}</p>

                    <div className="blog-card-footer">
                      <div className="blog-card-author">
                        <img
                          src={blog.authorImage}
                          alt={blog.author}
                        />
                        <span>{blog.author}</span>
                      </div>

                      <span className="blog-read-more">
                        اقرأ المقال
                        <FontAwesomeIcon icon={faArrowLeft} />
                      </span>
                    </div>

                  </div>

                </div>
              </Link>

            </div>
          ))}

        </div>
      </div>

    </div>
  );
}
