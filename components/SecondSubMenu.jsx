import React, {useState} from 'react'
import Link from 'next/link';

const SecondSubMenu = ({ item }) => {
    const [secondSubNav, setSecondSubNav] = useState(false);
    const showSecondSubNav = () => setSecondSubNav(!secondSubNav);
  return (
    <div>SecondSubMenu</div>
  )
}

export default SecondSubMenu