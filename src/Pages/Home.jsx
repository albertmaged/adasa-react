import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Home.css";
import {
  faClock,
  faFolderOpen,
  faNewspaper,
  faPenNib,
  faStar,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="text-center py-5 bg-black ">
      <h4 className="text-center py-5 text-white-50">Hello in Adasa</h4>
      <h1 className="text-center fs-1 text-bold text-white">
        اكتشف <span className="art">فن </span>
      </h1>
      <h1 className="text-center py-5 fs-1 text-white"> التصوير الفوتغرافي</h1>
      <p className="text-white-50">
        انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
      </p>
      {
       
      }
      <div className="d-flex justify-content-center py-2 align-content-center whorow g-4 m-3 p-4  ">
        <div className="people m-3 border border-3 rounded-4 p-3 shadow flex-column-reverse ">
          {" "}
          <FontAwesomeIcon icon={faPenNib} className="people" />
          <h5>2+ Million</h5>
          <p>reader monthely</p>
        </div>

        <div className="people m-3 border border-3 rounded-4 p-3 shadow flex-column-reverse   ">
          {" "}
          <FontAwesomeIcon icon={faFolderOpen} className="people  " />
          <h5>2+ Million</h5>
          <p>reader monthely</p>
        </div>

        <div className="people  m-3 border border-3 rounded-4 p-3 shadow flex-column-reverse">
          {" "}
          <FontAwesomeIcon icon={faUsers} className="people" />
          <h5>2+ Million</h5>
          <p>reader monthely</p>
        </div>

        <div className="people m-3  border border-3 rounded-4 p-3 shadow flex-column-reverse">
          {" "}
          <FontAwesomeIcon icon={faNewspaper} className="people" />
          <h5>2+ Million</h5>
          <p>reader monthely</p>
        </div>
      </div>
      <br />
      <br />
      <br />
      <hr />
      <div className="bg-black featured">
        <span className="text-end">مميز</span>
        <h1 className="text-white">مقالات مختارة</h1>
      </div>
      <div className="d-flex justify-content-between container">
        <span
          className="showall text-white p-3 rounded-3 "
          onClick={() => navigate("/blog")}
          style={{ cursor: "pointer" }}
        >
          <FontAwesomeIcon icon={faArrowLeft} className="ms-2" />
          عرض الكل
        </span>
        <div>
          <p>محتوى منتقى لبدء رحلة تعلمك</p>
        </div>
      </div>

      <div className="container py-5">
        <Link to="/blog/1" className="article-link text-decoration-none">
          <div className="featured-article">
          
            <div className="article-content" dir="rtl">
              <div className="article-top">
                <span className="article-category">إضاءة</span>

                <span className="article-time">
                  <FontAwesomeIcon icon={faClock} />8 دقائق للقراءة
                </span>
              </div>

              <h2 className="article-title">
                إتقان تصوير الساعة الذهبية: دليل شامل
              </h2>

              <p className="article-description">
                تعلم كيفية التقاط صور مذهلة خلال الساعة الذهبية مع نصائح
                احترافية حول الإضاءة والتكوين.
              </p>

              <div className="article-bottom">
                <div className="author">
                  <img
                    src="/images/OIP.webp"
                    alt="سام أحمد"
                    className="author-image"
                  />

                  <div className="author-details">
                    <h6>سام أحمد</h6>
                    <small>٥ يناير ٢٠٢٦</small>
                  </div>
                </div>

                <span className="read-article">
                  اقرأ المقال
                  <FontAwesomeIcon icon={faArrowLeft} />
                </span>
              </div>
            </div>

            
            <div className="article-image">
              <img src="/images/golden-hour.avif" alt="تصوير الساعة الذهبية" />

              <span className="featured-badge">
                <FontAwesomeIcon icon={faStar} />
                مميز
              </span>
            </div>
          </div>
        </Link>
      </div>

      <div className="container py-5">
        <Link to="/blog/2" className="article-link text-decoration-none">
          <div className="featured-article">
            
            <div className="article-content" dir="rtl">
              <div className="article-top">
                <span className="article-category">إضاءة</span>

                <span className="article-time">
                  <FontAwesomeIcon icon={faClock} />8 دقائق للقراءة
                </span>
              </div>

              <h2 className="article-title">
                إتقان تصوير الساعة الذهبية: دليل شامل
              </h2>

              <p className="article-description">
                تعلم كيفية التقاط صور مذهلة خلال الساعة الذهبية مع نصائح
                احترافية حول الإضاءة والتكوين.
              </p>

              <div className="article-bottom">
                <div className="author">
                  <img
                    src="/images/OIP.webp"
                    alt="سام أحمد"
                    className="author-image"
                  />

                  <div className="author-details">
                    <h6>سام أحمد</h6>
                    <small>٥ يناير ٢٠٢٦</small>
                  </div>
                </div>

                <span className="read-article">
                  اقرأ المقال
                  <FontAwesomeIcon icon={faArrowLeft} />
                </span>
              </div>
            </div>

           
            <div className="article-image">
              <img src="/images/golden-hour.avif" alt="تصوير الساعة الذهبية" />

              <span className="featured-badge">
                <FontAwesomeIcon icon={faStar} />
                مميز
              </span>
            </div>
          </div>
        </Link>
      </div>

      <div className="container py-5">
        <Link to="/blog/3" className="article-link text-decoration-none">
          <div className="featured-article">
            
            <div className="article-content" dir="rtl">
              <div className="article-top">
                <span className="article-category">إضاءة</span>

                <span className="article-time">
                  <FontAwesomeIcon icon={faClock} />8 دقائق للقراءة
                </span>
              </div>

              <h2 className="article-title">
                إتقان تصوير الساعة الذهبية: دليل شامل
              </h2>

              <p className="article-description">
                تعلم كيفية التقاط صور مذهلة خلال الساعة الذهبية مع نصائح
                احترافية حول الإضاءة والتكوين.
              </p>

              <div className="article-bottom">
                <div className="author">
                  <img
                    src="/images/OIP.webp"
                    alt="سام أحمد"
                    className="author-image"
                  />

                  <div className="author-details">
                    <h6>سام أحمد</h6>
                    <small>٥ يناير ٢٠٢٦</small>
                  </div>
                </div>

                <span className="read-article">
                  اقرأ المقال
                  <FontAwesomeIcon icon={faArrowLeft} />
                </span>
              </div>
            </div>

           
            <div className="article-image">
              <img src="/images/golden-hour.avif" alt="تصوير الساعة الذهبية" />

              <span className="featured-badge">
                <FontAwesomeIcon icon={faStar} />
                مميز
              </span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
