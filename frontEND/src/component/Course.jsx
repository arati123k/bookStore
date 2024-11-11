import Cards from "./Cards";
import list from "../../src/assets/list.json";
import { Link } from "react-router-dom";

function Course() {
  return (
    <>
      <div className="max-w-screen-2xl container max-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl ">
            We are delighted to have you{" "}
            <span className="text-pink-500">Here!</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Accusantium fugit, autem in nam blanditiis ducimus facilis quasi
            omnis, aspernatur error quas praesentium consequuntur nobis quis.
            Accusantium repudiandae dicta inventore, recusandae distinctio
            dolorem! Veniam quis velit voluptate, in autem quisquam. Pariatur
            aspernatur ipsum maiores qui eligendi dolore? Iure eaque ratione
            quibusdam. Ut sequi odit repellendus commodi placeat voluptas vero
            magnam iusto pariatur repudiandae, quam deleniti debitis! Maxime
            illum ea libero eum error blanditiis! Assumenda corporis distinctio
            molestiae animi. Doloremque error corporis culpa nesciunt ab odit
            libero vitae nobis tenetur! Ipsa recusandae rem at aliquid illo
            corrupti soluta odio deleniti libero sunt!
          </p>
          <Link to="/">
            <button
              className=" mt-6 bg-pink-500 text-white px-4 py-2 rounded-md
             hover:bg-pink-700 duration-700"
            >
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3">
          {list.map((item, index) => (
            <Cards key={`${item.id}-${index}`} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
