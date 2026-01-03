import { BackgroundBeams } from "./ui/background-beams.jsx";
const Background = () => {
  return (
    // make sure the backgroundis behind everything
    <div className="fixed bg-black inset-0 w-full h-full z-0">
        <BackgroundBeams />
    </div>
  )
}

export default Background