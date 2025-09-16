export default function MyButton({close}){

  return(
  
            <div className="bg-white w-full fixed left-0 top-24 flex flex-row items-center justify-between p-1">
              <div className="flex flex-row items-center gap-2 pl-3">
              <img className="w-6 cursor-pointer" src="/icons8-search (1).svg"/>
              <input type="text" placeholder="search" className="text-[16px] w-full  lg:w-[1200px] outline-0"></input>
              </div>
              <button  className="text-lg outline-0 pr-3" onClick={close}>X</button>

            </div>
  )

}