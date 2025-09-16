export default function Hide({ hid }) {
  return (
    <div className="fixed flex flex-col gap-3 w-full p-1 top-6.5 z-0 left-26 ">
      <ul className=" gap-5 text-md lg:flex lg:flex-row hidden ">

        <li onClick={hid} className="cursor-pointer">shop - </li>
        </ul>

      <div className=" flex flex-row bg-white gap-3">
        <h1>Hoodies</h1>
        <h1>Hats</h1>
        <h1>T-shirts</h1>
        <h1>sweatshirt</h1>
        <h1>Shirts</h1>
      </div>
    </div>
  );
}
