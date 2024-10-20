import { cards } from "../../lib/data";
import Card from "../Card/Card";

function Main() {
  // Здесь должен быть запрос к базе данных на полученние данных о тренировках 
  // const courses = ...
  // или получить данные из контекста const {courses} = useCourseContext();
  // или передать из MainPage через пропс, а данные получить из базы данных через useEffect

  return (
    <div className="container">
      <div className="flex flex-row mt-16 h-30 gap-4">
        <div className="h-30 basis-3/4">
          <h1 className="">
            Начните заниматься спортом и улучшите качество жизни
          </h1>
        </div>
        <div className="invisible md:visible h-25 basis-1/4 relative">
          <div className="bg-green text-3xl p-5 w-72 h-25 rounded mb-12 text-black">
            Измени своё тело за полгода!
          </div>
          <img
            className="absolute top-[100px] left-[120px] z-10"
            src="/img/triangle.png"
          />
        </div>
      </div>

      <div className="flex flex-row flex-wrap gap-9 mb-8">
        {cards.map((course) => (
          <Card course={course} key={course.id}/>
        ))}
      </div>

      <div className="flex justify-center">
        <button className="btn-primary w-32">
          <a href="#top">Наверх ↑</a>
        </button>
      </div>
    </div>
  );
}

export default Main;
