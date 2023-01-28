function WorkItem({ item }) {
  return (
    <div
      className="work__card"
      key={item.id}
      data-aos="fade-up"
      data-aos-delay="300"
    >
      <img src={item.image} alt={item.title} className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      <a href={item.link} className="work__button" target={"_blank"}>
        Demo <i className="bx bxs-chevron-right work__button-icon"></i>
      </a>
    </div>
  );
}

export default WorkItem;