import { useEffect, useState } from "react";
import Page from "./component/page";
import PostList from "./container/post-list";

function App() {
  // // const [isHiden, setHiden] =
  // useEffect(() =>{
  //   setTimeout(() => setHiden(true), 5000);
  // },[])

  // return (
  //   <Page>
  //     {isHiden !== true && <PostList />};
  //   </Page>
  // );
  // return (
  //   <Page>
  //     {isHiden !== true && <PostList />};
  //   </Page>
  // );
  //=================================
// const [count, setCount] = useState(0);
// MISTAKE!!!!!!!!
//   useEffect(() =>{
//     setCount(count + 1);
//   },[])
  //=================================
// // обработка вождения кружка
//   const [position, setPosition] = useState({x: 0, y: 0});
//   useEffect(() => {
//     function handleMove(e) {
//       setPosition({ x: e.clientX, y: e.clientY });
//     }
//     window.addEventListener('pointermove', handleМove);
//     return () => {
//       window.removeEventListener('pointermove', handleЬove)
//     }
//   })
  //=================================
// // // обработка вождения кружка 2 see post-list
// const [position, setPosition] = useState({x: 0, y: 0});
// useWindowListener('pointermove', (e) => {
//   setPosition({ x: e.clientX, y: e.clientY });
// });
  //=================================
const [location, setlocation] = useState(null);

useEffect(() => {
  if('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setlocation({ latitude, longitude })
      },
      (error) => {
        console.log('Помилка отримання геолокації', error.message);
      }
    );
  } else {
    console.error('Геолокація не підтримується в цьому браузері');
  }
}, []);


  return (
    <Page>
     <PostList />
      {/*  <div
        style={{
          position: "absolute",
          backgroundColor: "pink",
          borderRadius: "50%",
          opacity: 0.6,
          transform: `translate(${position.x}px, ${position.y}px)`,
          pointerEvents: "none",
          left: -20,
          top: -20,
          width: 40,
          height: 40,
        }}
      >

      </div> */}
    </Page>
  );
}



export default App;
