import Link from "next/link";
import { useRouter } from "next/router";
import { cls } from "@libs/client/utils";

interface LayoutProps {
  children: React.ReactNode;
  hasTabBar?: boolean;
  hasHeader?: boolean;
  header?: React.ReactNode;
  title?: string;
  backBtn?: boolean;
}

export default function Layout({
  children,
  hasTabBar,
  hasHeader,
  header,
  title,
  backBtn,
}: LayoutProps) {
  const router = useRouter();

  return (
    <div>
      {hasHeader || header
        ? header || (
            <div className="bg-red-400 max-w-xl top-0 border-b px-10 w-full h-12 fixed flex items-center justify-center font-medium text-lg text-gray-800">
              {backBtn ? <></> : null}
              {title ? <span>{title}</span> : null}
            </div>
          )
        : null}
      <div
        className={cls(
          hasHeader ? (header ? "pt-20" : "pt-12") : "",
          hasTabBar ? "pb-24" : ""
        )}
      >
        {children}
      </div>
      {hasTabBar ? (
        <nav className="bg-white max-w-xl fixed text-gray-800 border-t bottom-0 w-full px-10 pt-3 flex justify-between items-center">
          <Link href="/">
            <div
              className={cls(
                "flex flex-col items-center space-y-2 text-sm",
                router.pathname === "/"
                  ? "text-red-500 font-semibold"
                  : "hover:text-gray-500 transition-colors"
              )}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                ></path>
              </svg>
              <span>홈</span>
            </div>
          </Link>
          <Link href="/calendar">
            <div
              className={cls(
                "flex flex-col items-center space-y-2 text-sm",
                router.pathname === "/calendar"
                  ? "text-red-500"
                  : "hover:text-gray-500 transition-colors"
              )}
            >
              <svg
                className="w-6 h-6"
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
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                ></path>
              </svg>
              <span>캘린더</span>
            </div>
          </Link>
          <Link href="/library">
            <div
              className={cls(
                "flex flex-col items-center space-y-2 text-sm",
                router.pathname === "/library"
                  ? "text-red-500 font-semibold"
                  : "hover:text-gray-500 transition-colors"
              )}
            >
              <svg
                className="h-6 w-6"
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
                  d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z"
                ></path>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.867 19.125h.008v.008h-.008v-.008z"
                ></path>
              </svg>
              <span>라이브러리</span>
            </div>
          </Link>
          <Link href="/myPage">
            <div
              className={cls(
                "flex flex-col items-center space-y-2 text-sm",
                router.pathname === "/myPage"
                  ? "text-red-500 font-semibold"
                  : "hover:text-gray-500 transition-colors"
              )}
            >
              <svg
                className="w-6 h-6"
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
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                ></path>
              </svg>
              <span>마이페이지</span>
            </div>
          </Link>
        </nav>
      ) : null}
    </div>
  );
}
