import type { NextPage } from "next";
import Layout from "../components/layout";

const HomeHeader = () => {
  return <div className="w-full h-20 bg-green-100 fixed">home pinned area</div>;
};

const Home: NextPage = () => {
  return (
    <Layout hasTabBar hasHeader header={<HomeHeader />}>
      <div className="grid grid-cols-2 gap-2 px-3">
        {[1, 1, 1, 1, 1].map((_, i) => (
          <div className="pt-2" key={i}>
            <div className="flex bg-red-100 border rounded-xl p-3 justify-between">
              <div className="flex space-x-2">
                <div className="w-[40px] h-[40px] bg-slate-400 rounded-full"></div>
                <div className="flex flex-col space-y-4">
                  <h3 className="text-4xl font-medium text-gray-900">Legs</h3>
                  <span className="text-sm font-medium">3일전</span>
                </div>
              </div>
              <div className="flex items-center justify-end">
                <button className="w-5 h-5">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="pt-3 px-3">
        <button className="bg-red-500 w-full border border-transparent rounded-md h-10 text-white text-md font-medium shadow-sm hover:bg-red-600 focus:ring-2 focus:ring-offset-2 focus:ring-red-500 focus:outline-none">
          + 운동 추가하기
        </button>
      </div>
    </Layout>
  );
};

export default Home;
