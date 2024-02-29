import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineDashboard, MdAccountCircle, MdLogout } from 'react-icons/md';
import { CgInsertAfterR } from "react-icons/cg";
import { BsChatLeftText } from 'react-icons/bs';
import { MdOutlineDomainAdd } from "react-icons/md";
import { FaUserCheck } from "react-icons/fa";

const Menus = [
    { title: 'หน้าหลัก', link: '/MainPage', icon: <MdOutlineDashboard /> },
    { title: 'ตารางสอน', icon: <BsChatLeftText />, link: '/SubjectTable' },
    { title: 'นำเข้าหลักสูตร', icon: <CgInsertAfterR />, link: '/ImportSubject' },
    { title: 'นำเข้าชั้นเรียน', icon: <MdOutlineDomainAdd />, link: '/ImportRoom' },
    { title: 'ข้อมูลผู้ใช้งาน', icon: <FaUserCheck />, link: '/UserAll' },
];

const Menuslogout = [
  { title: 'ออกจากระบบ', icon: <MdLogout />, link: '/logout' },
];

function Slidebar() {
    return (
        <div className="w-60 bg-red-900">
          <div className="justify-center mt-3 w-60">
            <h1 className="text-white font-medium font-IBM text-2xl text-center">
              <div className="flex justify-center items-center">
                <Link to = '/Profile'><MdAccountCircle size={90} /></Link>
              </div>
            </h1>
          </div>
          <ul className="pt-7">
            {Menus.map((menu, index) => (
              <li key={index}>
                <Link
                  to={menu.link}
                  className=" font-IBM flex items-center rounded-md p-4 cursor-pointer text-zinc-300 text-sm gap-x-4 hover:bg-slate-50 hover:text-red-900"
                >
                  {menu.icon}
                  {menu.title}
                </Link>
              </li>
            ))}
            <div className='bg-red-900 h-full'></div>
            <li>
              <Link
                to={Menuslogout[0].link}
                className=" font-IBM flex items-center rounded-md p-4 cursor-pointer text-zinc-300 text-sm gap-x-4 hover:bg-slate-50 hover:text-red-900"
              >
                {Menuslogout[0].icon}
                {Menuslogout[0].title}
              </Link>
            </li>
          </ul>
        </div>
      );
    };
export default Slidebar