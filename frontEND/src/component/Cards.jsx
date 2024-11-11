function Cards({ item }) {
  return (
    <>
      <div
        className="card mt-4 bg-base-100 w-96 shadow-xl hover:scale-95 duration-300
       dark:bg-slate-900 dark:text-white dark:border"
      >
        <figure>
          <img src={item.image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary"> {item.category} </div>
          </h2>
          <p> {item.title} </p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">{item.price}</div>
            <div className=" cursor-pointer rounded-full border-[2px] hover:bg-pink-500 hover:text-white px-2 py-1 duration-200">
              Buy Now
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
