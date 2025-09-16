"use client"
import MyButton from "./buttton";
import Slider from "./slider";
import { useState } from "react";
import Ham from "./hamburger";
import Hide from "./hide";

export default function Main(){
  const [toggle ,setToggle] = useState(false)
  const [menu  ,setMenu] = useState(false)
  const [pc, setPc] =useState(false)

  function openSearch (){
    setToggle (true)
  }
  function closeSearch (){
    setToggle (false)
  }
 
   function openMenu (){
    setMenu (true)
   }
   function closeMenu (){
    setMenu (false)
   }
   function openPc (){
    setPc (true)
   }
   function closePc (){
    setPc (false)
   } 
 
    return(
           <main>
              <nav className="flex  flex-row justify-between items-center pl-2 pr-2 pb-3 sticky top-0 z-90 bg-white">
        <div className="flex flex-row items-center gap-20">
          <img
            className="w-20 cursor-pointer animate-bounce pt-2"
            src="https://www.zttw.store/cdn/shop/files/ZTTW_NEW_LOGO_PNG.png?v=1719231773&width=140"
          />
          <div className="lg:block">
            <ul className=" gap-5 text-md lg:flex lg:flex-row hidden z-90">
              {pc === true ? (
        <Hide hid={closePc}/> 
      ) : (<li onClick={openPc} className="cursor-pointer">shop+ </li> )}
               
              <li className="cursor-pointer">ALL PRODUCTS </li>
              <li className="cursor-pointer">COLLECTION </li>
              <li className="cursor-pointer">LOOK BOOK </li>
              <li className="cursor-pointer">ABOUT </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-row items-center gap-2 ">

          <img onClick={openMenu} className="w-6 lg:hidden" src="/icons8-menu.svg" />
          {menu && (
            <Ham build={closeMenu} />
            
          )}

          <img onClick={openSearch} className="w-6 cursor-pointer" src="/icons8-search (1).svg" />
          {toggle && (
            <MyButton close={closeSearch}/>
          )}
          <img
            className="w-6 h-6 cursor-pointer"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACmUlEQVR4nO2ZT4hNURzHPywMYxaisDXjz4YhIskUYzNi1pQ/CxJrigXNjClWhCWGWFFsGaWkKWPLFJN/ZcpKM/7n+TN5OnVufbuNe+85d+acl96nTq/eud/v73vfu+93z7kP6vxfbAEuAy+Ab3YMA5fsXM3SDAwA1ZzxAFhMjbEB+FggfDLGgI3UCEtS4SvAOWAdMBtoBNba9ypy3CjQEjv8NOChhBoBlmccvwJ4l7qcorIp9clnhU9oBX6Irp2IXJUg5hIpygXRXSQizyWIuc6Lsl50wwRiJdBv+/pEnaXJHvfBoRuZ8cXqZsh7X4G79nKbFLYBv3OCJLiEz9OamlvLhp9b8FOdihOo2nY7p8wJ7BWzV8CifxR0JUvbDLyW+T0l8nNajHocQuSRp+2ReZPBm+titM8xRBZ52v0yf40S3BejjtRcsjQwr67kaTukrskwKb0+3dZO2ZZnXl3J07ZK3WeU4LMYmY4UinlS95OvSZOYfCf8QrEywY3SiWViYNpaaN5I/aU+Bu1iYHZboRmQ+pt9DHaLwQ3Cc1Pq7/IxOCYGZwjPWal/1MdA1+2HCc8RqX/ex+C2GOwgPDul/i0fg8di0EZ42qT+Ix+DETEwK8TQtEj9t67i6cBPK/4DzCQ8s+QEftlMhVmQ2lTEYkxyzHcRrhbhEPEYkhyrXITbRWg287G4JznM3rwwB0XYRzyuSI4DLsKTIuwlHr0ZW9pM+kRovo1YHJIc5j+GwvSLsJN4dEqOOy7CpyI0HSkWayTHExfhqAjNPSEWCyXHexdhcheu2jtiLBolh3ks77WdOw40EJ4G4ITkeOki1idjtTK6XE7ALN4GayB01Y5BnwWlufa77ROJ8Qihx+0D5a7Iv8M6deowhfwF+BC2GOS0rI0AAAAASUVORK5CYII="
            alt="shopping-bag--v1"
          />
        </div>
      </nav>

      <Slider/>

      <div className="grid grid-cols-2 gap-4 mt-10 lg:grid-cols-4 pl-4 pr-4">
        <div className="text-[12px] block lg:text-[15px] group overflow-hidden">
          <img
            className="block group-hover:hidden"
            src="https://www.zttw.store/cdn/shop/files/zttw_25_e8dda1fe-2172-4fa1-bb4f-f8f65465a062.jpg?v=1741957997&width=2000"
          />
          <img
            className="hidden group-hover:block"
            src="https://www.zttw.store/cdn/shop/files/zttw_27_3b703b5c-908e-4803-9beb-386166d1e7d5.jpg?v=1741957973&width=2000"
          />
          HERO ARMLESS TEE-WHITE
          <br /> ₦240,000.00
        </div>
        <div className="text-[12px] block lg:text-[15px] group overflow-hidden">
          <img
            className="block group-hover:hidden"
            src="https://www.zttw.store/cdn/shop/files/zttw_23_b15d8b3e-37fc-4c78-ad28-e44359be49a5.jpg?v=1741958067&width=2000"
          />
          <img
            className="hidden group-hover:block"
            src="https://www.zttw.store/cdn/shop/files/zttw_24_5a0067c7-19bc-4693-b59c-6dc9a41c34f7.jpg?v=1741958067&width=2000"
          />
          GREEN KNIT LONGSLEEVE
          <br /> ₦400,000.00
        </div>
        <div className="text-[12px] block lg:text-[15px] group overflow-hidden">
          <img
            className="block group-hover:hidden"
            src="https://www.zttw.store/cdn/shop/files/z1.png?v=1754318216&width=2000"
          />
          <img
            className="hidden group-hover:block"
            src="https://www.zttw.store/cdn/shop/files/z2.png?v=1754318216&width=2000"
          />
          ZTTW VARSITY-WHITE
          <br />
          ₦720,000.00
        </div>
        <div className="text-[12px] block lg:text-[15px] group overflow-hidden">
          <img
            className="block group-hover:hidden"
            src="https://www.zttw.store/cdn/shop/files/z_3.png?v=1754318540&width=2000"
          />
          <img
            className="hidden group-hover:block"
            src="https://www.zttw.store/cdn/shop/files/z_4.png?v=1754318525&width=2000"
          />
          ZTTW VARSITY-WHITE
          <br />
          ₦720,000.00
        </div>
        <div className="text-[12px] block lg:text-[15px] group overflow-hidden">
          <img
            className="block group-hover:hidden"
            src="https://www.zttw.store/cdn/shop/files/z31.png?v=1754323272&width=2000"
          />
          <img
            className="hidden group-hover:block"
            src="https://www.zttw.store/cdn/shop/files/z32.png?v=1754323433&width=2000"
          />
          Zttw pipping tracksuit - Top
          <br /> ₦480,000.00
        </div>
        <div className="text-[12px] block lg:text-[15px] group overflow-hidden">
          <img
            className="block group-hover:hidden"
            src="https://www.zttw.store/cdn/shop/files/z_29.png?v=1754318451&width=2000"
          />
          <img
            className="hidden group-hover:block"
            src="https://www.zttw.store/cdn/shop/files/z_30.png?v=1754318448&width=2000"
          />
          Zttw pipping tracksuit - pants
          <br /> ₦320,000.00
        </div>
        <div className="text-[12px] block lg:text-[15px] group overflow-hidden">
          <img
            className="block group-hover:hidden"
            src="https://www.zttw.store/cdn/shop/files/z_15_3da34f47-67ba-4106-baf6-af323b977519.png?v=1754326690&width=2000"
          />
          <img
            className="hidden group-hover:block"
            src="https://www.zttw.store/cdn/shop/files/z_16_f79f3341-4160-4c2f-91e0-1688633bec1a.png?v=1754326689&width=2000"
          />
          Zttw wax denim pants - brown
          <br />
          ₦400,000.00
        </div>
        <div className="text-[12px] block lg:text-[15px] group overflow-hidden">
          <img
            className="block group-hover:hidden"
            src="https://www.zttw.store/cdn/shop/files/z41.png?v=1754332004&width=2000"
          />
          <img
            className="hidden group-hover:block"
            src="https://www.zttw.store/cdn/shop/files/z42.png?v=1754332003&width=2000"
          />
          Zttw wax denim pants - black
          <br />
          ₦400,000.00
        </div>
        <div className="text-[12px] block lg:text-[15px] group overflow-hidden">
          <img
            className="block group-hover:hidden"
            src="https://www.zttw.store/cdn/shop/files/zttw_13_267df2cb-be95-4bee-b400-2a0bb9037e51.jpg?v=1741957991&width=2000"
          />
          <img
            className="hidden group-hover:block"
            src="https://www.zttw.store/cdn/shop/files/zttw_14_9076e80a-a8c1-4660-a483-6beddbda60ad.jpg?v=1741957991&width=2000"
          />
          Black camo puffer shorts
          <br /> ₦320,000.00
        </div>
        <div className="text-[12px] block lg:text-[15px] group overflow-hidden">
          <img
            className="block group-hover:hidden"
            src="https://www.zttw.store/cdn/shop/files/zttw_51_10e04cd8-4da8-459c-a614-58272cddb652.jpg?v=1741958010&width=2000"
          />
          <img
            className="hidden group-hover:block"
            src="https://www.zttw.store/cdn/shop/files/zttw_52_e1714ce7-3a34-4281-aa1a-d8de4ac01df6.jpg?v=1741958007&width=2000"
          />
          Black Pattern-cut top
          <br /> ₦320,000.00
        </div>
        <div className="text-[12px] block lg:text-[15px] group overflow-hidden">
          <img
            className="block group-hover:hidden"
            src="https://www.zttw.store/cdn/shop/files/zttw_53_8e95ed70-7bd8-46eb-b431-47c1067f51a3.jpg?v=1741957993&width=2000"
          />
          <img
            className="hidden group-hover:block"
            src="https://www.zttw.store/cdn/shop/files/zttw_54.jpg?v=1741957991&width=2000"
          />
          Black Pattern-cut shorts
          <br />
          ₦240,000.00
        </div>
        <div className="text-[12px] block lg:text-[15px] group overflow-hidden">
          <img
            className="block group-hover:hidden"
            src="https://www.zttw.store/cdn/shop/files/zttw_47_97d7e5d7-d71d-40b4-bb5b-86ab83a29cf0.jpg?v=1741958037&width=2000"
          />
          <img
            className="hidden group-hover:block"
            src="https://www.zttw.store/cdn/shop/files/zttw_48_9ced794f-cfb5-4a53-9bbc-c605e9e7dda3.jpg?v=1741958033&width=2000"
          />
          Brown Pattern cut top
          <br />
          ₦320,000.00
        </div>
        <div className="text-[12px] block lg:text-[15px] group overflow-hidden">
          <img
            className="block group-hover:hidden"
            src="https://www.zttw.store/cdn/shop/files/zttw_49_fd0c8527-624e-40b1-a5d5-429a6f667a58.jpg?v=1741958007&width=2000"
          />
          <img
            className="hidden group-hover:block"
            src="https://www.zttw.store/cdn/shop/files/zttw_50_57ea7a2a-9206-4a3c-864c-9851f29779c5.jpg?v=1741958007&width=2000"
          />
          Brown Pattern cut shorts
          <br /> ₦240,000.00
        </div>
        <div className="text-[12px] block lg:text-[15px] group overflow-hidden">
          <img
            className="block group-hover:hidden"
            src="https://www.zttw.store/cdn/shop/files/zttw_15_76f52be9-6898-456d-9a4b-ba0271cf234f.jpg?v=1741958055&width=2000"
          />
          <img
            className="hidden group-hover:block"
            src="https://www.zttw.store/cdn/shop/files/zttw_16_ff2c4719-9b32-4776-a8f4-beaa2c993683.jpg?v=1741958048&width=2000"
          />
          Red Leather vest
          <br /> ₦400,000.00
        </div>
        <div className="text-[12px] block lg:text-[15px] group overflow-hidden">
          <img
            className="block group-hover:hidden"
            src="https://www.zttw.store/cdn/shop/files/zttw_17_461f8102-3c5a-4067-83cd-275b35dba60b.jpg?v=1741958033&width=2000"
          />
          <img
            className="hidden group-hover:block"
            src="https://www.zttw.store/cdn/shop/files/zttw_18_b56945db-39bb-49d1-a51e-8b78bb1ca4f3.jpg?v=1741958008&width=2000"
          />
          Black Leather vest
          <br /> ₦400,000.00
        </div>
        <div className="text-[12px] block lg:text-[15px] group overflow-hidden">
          <img
            className="block group-hover:hidden"
            src="https://www.zttw.store/cdn/shop/files/zttw_31.jpg?v=1733571781&width=2000"
          />
          <img
            className="hidden group-hover:block"
            src="https://www.zttw.store/cdn/shop/files/zttw_32.jpg?v=1733846510&width=2000"
          />
          Crewneck sweatshirt - Black ₦480,000.00
        </div>
      </div>

      <div className="flex justify-end pr-5 cursor-pointer">
        <a href="https://www.zttw.store/collections/ambition">
          <h1 className=" border-b-2 py-1">View all →</h1>
        </a>
      </div>

      <div className="p-1 lg:flex lg:items-center lg:justify-between mt-3">
        <div>
          <h1 className="font-bold">JOIN THE COMMINUTY.</h1>

          <p>You Will Recieve All The Information Regarding The Next Drops.</p>
        </div>

        <div className="lg:flex lg:flex-row justify-end ">
          <input
            type="email"
            placeholder="Email Address"
            className="border-b-2  outline-none border-black w-full lg:w-64 pt-6
         placeholder:text-black "
          />

          <button className="bg-black py-1 w-28 text-white mt-2 cursor-pointer">
            SUBSCRIBE →
          </button>
        </div>
      </div>

      <div className="mt-8 p-1">
        <h1>FOLLOW US</h1>

        <div className="flex flex-row gap-4 pt-2 cursor-pointer">
          <a href="#">
            <img className="w-5" src="/icons8-instagram (3).svg" />
          </a>
          <a href="#">
            <img className="w-5" src="/icons8-whatsapp.svg" />
          </a>
        </div>
      </div>

      <h1 className="text-[12px] mt-10 mb-10 p-1">©2025, ZTTW.</h1>
      </main>
    )
}