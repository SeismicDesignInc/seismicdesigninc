import Link from "next/link";
import Image from "next/image"
export default function BlogLists({ data }) {
  const excerpt = (str, length, ellipsis = '...') => {
    if (typeof str !== 'string' || str.length === 0) {
      return '';
    }
    if (str.length <= length) {
      return str;
    }
    return str.slice(0, length) + ellipsis;
  };

  const stripHTMLTags = (html) => {
    const tempElement = document.createElement('div');
    tempElement.innerHTML = html;
    return tempElement.innerText;
  };
  const renderedItems = data.map((data, index) => (
    <div key={index} className="col-12 col-md-6 col-lg-3 pb-5 mb-5">
      <article className="position-relative" style={{
        width: "auto", height: 300
      }}>
        <Link href={"/blogs/" + data.slug}>
          <a href={"/blogs/" + data.slug}>
            <img src={"/blogs/" + data.image} alt={data.title} className="rounded h-100 w-100 img-fluid" style={{ objectFit: "cover" }} />
            <h5 className="text-center pt-3">{data.title}</h5>
          </a>
        </Link>
      </article>

    </div >
  ));

  return (
    <div className="container my-5">
      <div className="row">
        {renderedItems}
      </div>
    </div>
  )
}
