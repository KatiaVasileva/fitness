const list = [
  "Давно хотели попробовать йогу, но не решались начать",
  "Хотите укрепить позвоночник, избавиться от болей в спине и суставах",
  "Ищете активность, полезную для тела и души",
];

const courseList = [
  "Йога для новичков",
  "Кундалини-йога",
  "Хатха-йога",
  "Классическая йога",
  "Йогатерапия",
  "Аштанга-йога",
];

const benefitList = [
  "проработка всех групп мышц",
  "тренировка суставов",
  "улучшение циркуляции крови",
  "упражнения заряжают бодростью",
  "помогают противостоять стрессам",
];

function Course() {
  return (
    <div className="container">
      <div>
        <img src="/img/skill_card_1.png" className="mt-14 mb-14" />
      </div>
      <div>
        <p className="text-[40px]/[44px] font-semibold mb-14">
          Подойдет для вас, если:
        </p>
      </div>
      <div className="flex flex-row gap-3 mb-14">
        {list.map((item, index) => (
          <div className="flex flex-row items-center w-[368px] h-36 bg-dark-gray basis-1/3 rounded-3xl py-4 px-5 gap-7">
            <img src={`/img/${index + 1}.png`} className="h-16" />
            <p className="text-white text-2xl font-normal">{item}</p>
          </div>
        ))}
      </div>
      <div>
        <p className="text-[40px]/[44px] font-semibold mb-14">Направления:</p>
      </div>
      <div className="h-36 bg-green rounded-3xl flex flex-row row-gap-1.5 gap-x-16 flex-wrap px-6 py-7 justify-between content-between">
        {courseList.map((item) => (
          <div className="flex flex-row items-center">
            <img src="/img/sparkle.png" />
            <div className="w-72 h-7 text-2xl font-normal">{item}</div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-3xl h-[486px] mt-24 relative">
        <div className="absolute h-[406px] w-[437px] top-10 left-10">
          <p className="font-medium text-6xl mb-5">
            Начните путь к новому телу
          </p>
          <ul className="list-disc mb-5">
            {benefitList.map((item) => (
              <li className="font-normal text-2xl leading-normal text-gray list-disc list-inside">
                {item}
              </li>
            ))}
          </ul>
          <button className="btn-primary w-full h-14">
            <a>Войдите, чтобы добавить курс</a>
          </button>
        </div>
        <img
          src="/img/man.png"
          className="absolute -rotate-3 left-[576px] -top-24 z-10"
        />
        <img
          src="/img/green-line.png"
          className="absolute rotate-3 left-[476px] top-[84px]"
        />
      </div>
    </div>
  );
}

export default Course;
