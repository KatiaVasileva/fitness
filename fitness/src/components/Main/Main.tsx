function Main() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-row mt-16 h-30 gap-4">
        <div className="h-30 basis-3/4">
          <h1 className="text-5xl/15 font-semibold text-black">
            Начните заниматься спортом и улучшите качество жизни
          </h1>
        </div>
        <div className="h-25 basis-1/4 relative">
          <div className="bg-green text-3xl p-5 w-72 h-25 rounded mb-12 text-black">
            Измени своё тело за полгода!
          </div>
          <img className="absolute top-[100px] left-[120px] z-10" src="/img/triangle.png" />
        </div>
      </div>

      <div className="flex flex-row flex-wrap gap-10 mb-8">
        <div className="flex flex-col gap-7 bg-white rounded-3xl relative">
          <img className="w-full" src="/img/workout_1.png" />
          <img className="absolute top-4 right-4" src="/img/circle.png" />
          <div className="mx-7">
            <h3 className="text-3xl font-semibold pb-6 text-black">Йога</h3>
            <div className="flex flex-row flex-wrap gap-1 mb-2">
              <div className="flex flex-row flex-wrap gap-2 w-28 h-9 bg-light-gray rounded-3xl items-center pl-2.5">
                <img className="h-4 w-4" src="./img/calendar.png"></img>
                <p className="text-black">25 дней</p>
              </div>
              <div className="flex flex-row gap-2 w-44 h-9 bg-light-gray rounded-3xl items-center pl-2.5">
                <img className="h-4 w-4" src="./img/time.png"></img>
                <p className="text-black">20-50 мин/день</p>
              </div>
            </div>
            <div className="flex flex-row gap-2 w-32 h-9 bg-light-gray rounded-3xl items-center pl-2.5 mb-2">
              <img className="h-4 w-4" src="./img/difficulty.png"></img>
              <p className="text-black">Сложность</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-7 bg-white rounded-3xl relative">
          <img className="w-full" src="/img/workout_2.png"></img>
          <img className="absolute top-4 right-4" src="/img/circle.png" />
          <div className="mx-7">
            <h3 className="text-3xl font-semibold pb-6 text-black">
              Стретчинг
            </h3>
            <div className="flex flex-row flex-wrap gap-1 mb-2">
              <div className="flex flex-row flex-wrap gap-2 w-28 h-9 bg-light-gray rounded-3xl items-center pl-2.5">
                <img className="h-4 w-4" src="./img/calendar.png"></img>
                <p className="text-black">25 дней</p>
              </div>
              <div className="flex flex-row gap-2 w-44 h-9 bg-light-gray rounded-3xl items-center pl-2.5">
                <img className="h-4 w-4" src="./img/time.png"></img>
                <p className="text-black">20-50 мин/день</p>
              </div>
            </div>
            <div className="flex flex-row gap-2 w-32 h-9 bg-light-gray rounded-3xl items-center pl-2.5 mb-2">
              <img className="h-4 w-4" src="./img/difficulty.png"></img>
              <p className="text-black">Сложность</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-7 bg-white rounded-3xl relative">
          <img className="w-full" src="/img/workout_3.png" />
          <img className="absolute top-4 right-4" src="/img/circle.png" />
          <div className="mx-7">
            <h3 className="text-3xl font-semibold pb-6 text-black">Зумба</h3>
            <div className="flex flex-row flex-wrap gap-1 mb-2">
              <div className="flex flex-row flex-wrap gap-2 w-28 h-9 bg-light-gray rounded-3xl items-center pl-2.5">
                <img className="h-4 w-4" src="./img/calendar.png"></img>
                <p className="text-black">25 дней</p>
              </div>
              <div className="flex flex-row gap-2 w-44 h-9 bg-light-gray rounded-3xl items-center pl-2.5">
                <img className="h-4 w-4" src="./img/time.png"></img>
                <p className="text-black">20-50 мин/день</p>
              </div>
            </div>
            <div className="flex flex-row gap-2 w-32 h-9 bg-light-gray rounded-3xl items-center pl-2.5 mb-2">
              <img className="h-4 w-4" src="./img/difficulty.png"></img>
              <p className="text-black">Сложность</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-7 bg-white rounded-3xl relative">
          <img className="w-full" src="/img/workout_4.png" />
          <img className="absolute top-4 right-4" src="/img/circle.png" />
          <div className="mx-7">
            <h3 className="text-3xl font-semibold pb-6 text-black">
              Степ-аэробика
            </h3>
            <div className="flex flex-row flex-wrap gap-1 mb-2">
              <div className="flex flex-row flex-wrap gap-2 w-28 h-9 bg-light-gray rounded-3xl items-center pl-2.5">
                <img className="h-4 w-4" src="./img/calendar.png"></img>
                <p className="text-black">25 дней</p>
              </div>
              <div className="flex flex-row gap-2 w-44 h-9 bg-light-gray rounded-3xl items-center pl-2.5">
                <img className="h-4 w-4" src="./img/time.png"></img>
                <p className="text-black">20-50 мин/день</p>
              </div>
            </div>
            <div className="flex flex-row gap-2 w-32 h-9 bg-light-gray rounded-3xl items-center pl-2.5 mb-2">
              <img className="h-4 w-4" src="./img/difficulty.png"></img>
              <p className="text-black">Сложность</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-7 bg-white rounded-3xl relative">
          <img className="w-full" src="/img/workout_5.png" />
          <img className="absolute top-4 right-4" src="/img/circle.png" />
          <div className="mx-7">
            <h3 className="text-3xl font-semibold pb-6 text-black">
              Боди-рефлекс
            </h3>
            <div className="flex flex-row flex-wrap gap-1 mb-2">
              <div className="flex flex-row flex-wrap gap-2 w-28 h-9 bg-light-gray rounded-3xl items-center pl-2.5">
                <img className="h-4 w-4" src="./img/calendar.png"></img>
                <p className="text-black">25 дней</p>
              </div>
              <div className="flex flex-row gap-2 w-44 h-9 bg-light-gray rounded-3xl items-center pl-2.5">
                <img className="h-4 w-4" src="./img/time.png"></img>
                <p className="text-black">20-50 мин/день</p>
              </div>
            </div>
            <div className="flex flex-row gap-2 w-32 h-9 bg-light-gray rounded-3xl items-center pl-2.5 mb-2">
              <img className="h-4 w-4" src="./img/difficulty.png"></img>
              <p className="text-black">Сложность</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <button className="text-black w-32 hover:bg-light-green">
          <a href="#top">Наверх ↑</a>
        </button>
      </div>
    </div>
  );
}

export default Main;
