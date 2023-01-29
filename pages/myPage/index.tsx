import Layout from "@components/layout";
import { NextPage } from "next";

const MyPage: NextPage = () => {
  return (
    <Layout hasHeader hasTabBar title="마이페이지">
      <div className="pt-10 flex items-center justify-around">
        <div className="flex flex-col items-center space-y-2">
          <div className="w-20 h-20 bg-red-300 rounded-full flex items-center justify-center text-lg font-medium italic">
            3일전
          </div>
          <span>최근운동</span>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <div className="w-20 h-20 bg-red-300 rounded-full flex items-center justify-center text-lg font-medium italic">
            하체
          </div>
          <span>최다운동</span>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <div className="w-20 h-20 bg-red-300 rounded-full flex items-center justify-center text-lg font-medium italic">
            12일
          </div>
          <span>이번달 운동로그</span>
        </div>
      </div>
    </Layout>
  );
};

export default MyPage;
