

import './App.css'
import React, { useState, useEffect } from 'react';

function App() {
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    function startTime() {
      const today = new Date();
      const d = today.getDate();
      const mo = today.getMonth() + 1;
      const y = today.getFullYear() + 543;
      const monn = checday(mo);
      let h = today.getHours();
      let m = today.getMinutes();
      let s = today.getSeconds();
      m = checkTime(m);
      s = checkTime(s);
      setTime(`${h}:${m}:${s}`);
      setDate(`${d} ${monn} ${y}`);
      setTimeout(startTime, 500);
    }

    startTime();

    return () => clearTimeout(startTime); // Cleanup timeout on unmount
  }, []);

  function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  function checday(mon) {
    let cout = "";
    switch (mon) {
      case 1: cout = "มกราคม"; break;
      case 2: cout = "กุมภาพันธ์"; break;
      case 3: cout = "มีนาคม"; break;
      case 4: cout = "เมษายน"; break;
      case 5: cout = "พฤษภาคม"; break;
      case 6: cout = "มิถุนายน"; break;
      case 7: cout = "กรกฎาคม"; break;
      case 8: cout = "สิงหาคม"; break;
      case 9: cout = "กันยายน"; break;
      case 10: cout = "ตุลาคม"; break;
      case 11: cout = "พฤศจิกายน"; break;
      case 12: cout = "ธันวาคม"; break;
      default: cout = "";
    }
    return cout;
  }

  return (
    <div className='con' >Version 2
    <div >
        <div className="p" align="center">
          <font className="c sss" id="txt">{time}</font>
        </div>
        <div className="p2" align="center">
          <font className="c2 sss" id="txt2">{date}</font>
        </div>
    </div> </div>
  );
}

export default App;
