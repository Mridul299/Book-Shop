import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { bookId,bookName, image, review, author, tags, category } = book;
  return (
    <Link to={`/books/${bookId}`}>
      <div className="card bg-base-100  shadow-xl p-6">
        <figure className="bg-blue-200 py-8 rounded-2xl">
          <img className="h-[166px]" src={image} alt={bookName} />
        </figure>
        <div className="card-body">
          <div className="flex gap-2 ">
            {tags.map((tag) => (
              <button className="btn btn-xs text-green-600 font-bold">
                {tag}
              </button>
            ))}
          </div>
          <h2 className="card-title">
            {bookName}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>{author}</p>
          <div className="divider"></div>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">{category}</div>

            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-300"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-200"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-100"
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
