import { NavBar } from '../../components/Home/Header/NavBar'
import { Section1 } from '../../components/Home/Main/section1/Section1'
import { Section2 } from '../../components/Home/Main/section2/Section2'
import CopyRight from '../../components/Home/CopyRight/CopyRight'

function Home() {
 

  return (
    <div >
      <NavBar />
      <Section1 />
      <Section2 />
      <CopyRight />
    </div>
  );
}

export { Home };

