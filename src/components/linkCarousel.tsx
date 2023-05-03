import Link from "next/link";

// Params: links which is an array of objects with title and link
// reverse is a boolean that when true will change the carosel scroll direction to left to right

function LinkCarousel({ links, reverse = false }: any) {
  console.log("links", links);
  return (
    <div className="link-carousel">
      <div className={reverse ? "link-carousel-right" : "link-carousel-left"}>
        {links?.map((item: any, index: number) => (
          <div key={"link-carousel-item" + item?.title + index}>
            <Link href={item?.link ?? "/"}>
              <h1>{item?.title}</h1>
            </Link>
          </div>
        ))}
        {/* Clone of Carosel data to create infinite loop illusion */}
        {links &&
          links?.map((item: any, index: number) => (
            <div key={"clone-link-carosel-item" + item?.title + index}>
              <Link href={item?.link ?? "/"}>
                <h1>{item?.title}</h1>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}

export default LinkCarousel;
