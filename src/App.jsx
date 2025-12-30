import { ScrollTrigger, SplitText } from "gsap/all"
import gsap from "gsap";
// global registering for plugins. 
gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <div>
        <h1 className="text-3xl text-indigo-300">Hello!</h1>
    </div>
  )
}

export default App