import { BackgroundBeams } from "./ui/background-beams.jsx";
const Background = () => {
  return (
    // make sure the backgroundis behind everything
    <div className="fixed inset-0 bg-dark-bg w-full h-full z-0">
        <BackgroundBeams />
    </div>
  )
}

export default Background