import { useEffect, useState } from "react";

// useEffect
const Effect = () => {
  let [text, setText] = useState('');
  // let [display, setDisplay] = useState('');
  let [user, setUser] = useState({});
  let [seconds, setSeconds] = useState(0)

  useEffect(() => {
    console.log('get API');

    // setDisplay(() => localStorage.getItem('text'))

    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(res => res.json())
      // .then(res => setUser(usr => {
      //   return {
      //     ...usr,
      //     res
      //   }
      // }))
      // Atau kita bisa langsung isi datanya
      .then(res => setUser(res))
  }, []);

  useEffect(() => {
    localStorage.setItem('text', text);
    console.log('sinkronisasi');
  }, [text])

  useEffect(() => {
    let intervalId = setInterval (() => {
      setSeconds(s => s + 1);
    }, 1000)

    return () => {
      clearInterval(intervalId);
    }
    
  }, [])

  return (
    <div>
      <textarea cols="30" rows="10" onChange={(e) => setText(e.target.value)}/>
      <p>{user.name}</p>
      <div> Waktu: {Math.floor(seconds / 60)} Menit {seconds % 60} Detik</div>
      {/* <p>{display}</p> */}
    </div>
  )
}
export default Effect;
// useEffect mempunyai 2 parameter, adalah fungsi/callback dan dependency