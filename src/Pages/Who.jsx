
import "../Who.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faBookOpen,
  faNewspaper,
  faPenNib,
  faUsers,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

import {
  faLinkedin,
  faGithub,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Who() {

  const authors = [
    {
      id: 1,
      name: "سام أحمد",
      role: "مصور محترف",
      image: "/images/OIP.webp",
    },
    {
      id: 2,
      name: "محمد علي",
      role: "مصور بورتريه",
      image: "/images/author2.jpg",
    },
    {
      id: 3,
      name: "إبراهيم حسن",
      role: "مصور طبيعة",
      image: "/images/author3.jpg",
    },
    {
      id: 4,
      name: "داود خالد",
      role: "مدرب تصوير",
      image: "/images/author4.jpg",
    },
    {
      id: 5,
      name: "ليث محمود",
      role: "فنان بصري",
      image: "/images/author5.webp",
    },
    {
      id: 6,
      name: "جمال عبد الله",
      role: "مصور ومراجع تقني",
      image: "/images/author6.webp",
    },
  ];

  return (
    <div className="bg-black">

      
      <div className="who-container py-5">
        <h4 className="text-center whorow topic p-2">
          who we are
        </h4>
      </div>

      <h1 className="text-center py-2 text-white">
        مهمتنا هي{" "}
        <span className="inspiration">
          الإعلام والإلهام
        </span>
      </h1>

      <p className="text-center py-1 text-white-50 w-50 mx-auto">
        مدونة متخصصة في فن التصوير الفوتوغرافي،
        نشارك معكم أسرار المحترفين ونصائح عملية
        لتطوير مهاراتكم. نحن شغوفون بمشاركة المعرفة
        ومساعدة المصورين على تنمية مهاراتهم من خلال
        محتوى عالي الجودة.
      </p>

      
      <div className="d-flex justify-content-center flex-wrap py-2 whorow m-3 p-4">

        <div className="people m-3 border border-3 rounded-4 p-3 shadow">
          <FontAwesomeIcon icon={faBookOpen} className="people" />
          <h5>15+</h5>
          <p>تصنيف</p>
        </div>

        <div className="people m-3 border border-3 rounded-4 p-3 shadow">
          <FontAwesomeIcon icon={faPenNib} className="people" />
          <h5>50+</h5>
          <p>كاتب خبير</p>
        </div>

        <div className="people m-3 border border-3 rounded-4 p-3 shadow">
          <FontAwesomeIcon icon={faNewspaper} className="people" />
          <h5>500+</h5>
          <p>مقالة منشورة</p>
        </div>

        <div className="people m-3 border border-3 rounded-4 p-3 shadow">
          <FontAwesomeIcon icon={faUsers} className="people" />
          <h5>2+ مليون</h5>
          <p>قارئ شهرياً</p>
        </div>

      </div>

      <hr />

      <br />
      <br />
      <br />

      {/* OUR VALUES */}
      <div className="title text-center">
        <h4 className="text-white">قيمتنا</h4>
        <p>المبادئ التي توجه كل ما نقوم بإنشائه</p>
      </div>

      <div className="d-flex justify-content-center flex-wrap py-2 whorow m-3 p-4">

        <div className="people m-3 border border-3 rounded-4 p-3 shadow">
          <FontAwesomeIcon icon={faBookOpen} className="people" />
          <h5>المعرفة</h5>
          <p>مشاركة المعرفة مع الجميع</p>
        </div>

        <div className="people m-3 border border-3 rounded-4 p-3 shadow">
          <FontAwesomeIcon icon={faPenNib} className="people" />
          <h5>الإبداع</h5>
          <p>تشجيع الأفكار الجديدة</p>
        </div>

        <div className="people m-3 border border-3 rounded-4 p-3 shadow">
          <FontAwesomeIcon icon={faNewspaper} className="people" />
          <h5>الجودة</h5>
          <p>تقديم محتوى عالي الجودة</p>
        </div>

        <div className="people m-3 border border-3 rounded-4 p-3 shadow">
          <FontAwesomeIcon icon={faUsers} className="people" />
          <h5>المجتمع</h5>
          <p>بناء مجتمع من المصورين</p>
        </div>

      </div>

      <br />
      <br />
      <br />
      <hr />

      <div className="team">

        <div className="title py-5">
          <h6 className="text-center">
            فريقنا
          </h6>

          <h5 className="text-center text-white">
            تعرف على كتابنا
          </h5>

          <p className="text-center">
            فريقنا من المصورين والكتاب ذوي الخبرة
            شغوفون بمشاركة معرفتهم مع المجتمع.
          </p>
        </div>

        <div className="container pb-5">

          <div className="row g-4" dir="rtl">

            {authors.map((author) => (

              <div
                className="col-12 col-md-6 col-lg-4"
                key={author.id}
              >

                <div className="author-card">

                  
                  <div className="author-avatar-wrapper">

                    <img
                      src={author.image}
                      alt={author.name}
                      className="author-avatar"
                    />

                    <span className="author-check">
                      <FontAwesomeIcon icon={faCheck} />
                    </span>

                  </div>

                 
                  <h3 className="author-name">
                    {author.name}
                  </h3>

                  
                  <p className="author-role">
                    {author.role}
                  </p>

                  
                  <div className="author-socials">

                    <a href="#" aria-label="LinkedIn">
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>

                    <a href="#" aria-label="GitHub">
                      <FontAwesomeIcon icon={faGithub} />
                    </a>

                    <a href="#" aria-label="X">
                      <FontAwesomeIcon icon={faXTwitter} />
                    </a>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>
  );
}
