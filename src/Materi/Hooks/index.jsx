// import Counter from "./pembahasan/Counter"
// import Effect from "./pembahasan/Effect"
// import Identity from "./pembahasan/Identity";
import { useState } from "react";
import { useToggle } from "./pembahasan/hook/useToggle";

const Hooks = () => {
  let [label, setLabel] = useState('OFF');
  let [lampu, setLampu] = useToggle();

  const style = {
    background: lampu ? 'yellow' : 'red',
    textAlign: 'center',
    height: '400px'
  }

  const saklar = () => {
    setLampu(!lampu);

    setLabel(e => {
      if(e === 'ON') {
        return 'OFF'
      }
      return 'ON'
    })
  }
  
  return (
    <div style={style}>
      {/* <Counter /> */}
      {/* <Effect /> */}
      {/* <Identity /> */}
      <button onClick={saklar}>{label}</button>
    </div>
  )
}

export default Hooks;