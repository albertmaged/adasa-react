import { Link } from "react-router-dom";
import "../Footer.css";
export default function Footer() {
  return (
    <div className="bg-black">
      <div className="row g-1 container py-3 mx-auto">
        <div className="col-3">
          <div className="top text-white">ابقي علي اطلاع</div>
          <p className="w-75">اشترك للحصول على أحدث المقالات والتحديثات.</p>
          <form role="search">
            <input
              className="form-control w-75 text-white-50 "
              type="search"
              placeholder="ادخل بريدك الالكتلروني"
              aria-label="Search"
            />
            <button
              className="btn mt-2 w-75 rounded-5 text-white"
              type="submit"
            >
              اشترك
            </button>
          </form>
        </div>

        <div className="col-3">
          <div className="top text-white">التصنيفات</div>

          <h6 className="text-white-50">اضاءة</h6>
          <h6 className="text-white-50">بورترية</h6>
          <h6 className="text-white-50">مناظر طبيعية</h6>
          <h6 className="text-white-50">تقنيات</h6>
        </div>

        <div className="col-3 text-decoration-none">
          <div className="top text-white">أستكشف</div>

          <Link to="/" className="text-decoration-none text-white-50">
            Home
          </Link>
          <br />

          <Link to="/who" className="text-decoration-none text-white-50">
            Who We Are
          </Link>
          <br />

          <Link to="/blog" className="text-decoration-none text-white-50">
            Blog
          </Link>
        </div>

        <div className="col-3">
          <div className=" d-flex justify-content-end align-align-items-center gap-4">
            <h3>عدسة</h3>
            <span className="text-white rounded-3 border-3 spanfooter p-3">
              ع
            </span>
          </div>
          <p className="">
            مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين
            ونصائح عملية لتطوير مهاراتكم.
          </p>
        </div>
      </div>
      <br />
      <hr />
      
    </div>
  );
}
