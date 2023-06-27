import { Outlet, Link } from "react-router-dom";

export default function Root() {
  return (
    <div className="flex flex-col">
      <div>01</div>
      <div>02</div>
      <div>03</div>
    </div>
  );
}

// <div className="flex flex-row">
// <div id="sidebar">
//   <nav>
//     <ul>
//       <li>
//         <Link to={`contacts/1`}>Your Name</Link>
//       </li>
//       <li>
//         <Link to={`contacts/2`}>Your Friend</Link>
//       </li>
//     </ul>
//   </nav>
// </div>
// <div id="detail">
//   <Outlet />
// </div>
// </div>
