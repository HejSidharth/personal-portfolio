import CustomCard from "@/components/project-card";
import { Link} from "react-router-dom";


export default function Projects() {
  return (
    <>
<div className="px-10 hidden sm:block fixed">
  <Link 
    className="text-white p-2  mr-4 font-newsreader italic flex gap-2"
    to={"/"}
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-undo-2"><path d="M9 14 4 9l5-5"/><path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"/></svg>
    Home
  </Link>
</div>
    <div className="lg:w-1/2 max-w-[600px] justify-center mx-auto px-10 sm:px-0 md:px-0">
      
      <div className="flex gap-4 flex-col">
        <div>
          
          <button className="font-bold border-b-2 text-lg hover:border-neutral-600 inline-block font-inter">
            My Projects
          </button>
        </div>
        <div>
          <p className="font-inter text-base">
            These are some of the projects I have made when bored, or when I have faced an annoying problem that I needed a quick fix for :)
          </p>
        </div>
        <button className="font-newsreader italic font-medium mt-10 border-b-2 w-max hover:border-neutral-600">
          Project List
        </button>
        <div className="flex flex-col gap-6 md:grid md:grid-cols-3 mb-10">
          <CustomCard
            title="Student Queue"
            description="A website created to queue students during tutoring classes."
            href="/projects/student-queue"
          />
          <CustomCard
            title="Trackalack"
            description="A website created to track homework assignments for fellow students"
            href="/projects/trackalack"
          />
          <CustomCard
            title="Notemon"
            description="A website created to save code snippits for later use"
            href="/projects/notemon"
          />
          <CustomCard
            title="Taskmon"
            description="A website created to store tasks with a cool aesthetic"
            href="/projects/taskmon"
          />
          <CustomCard
            title="AI Weather App"
            description="An AI weather app that reccomends what to wear given the weather"
            href="https://github.com/HejSidharth/HonestWeather"
          />
        </div>
        
      </div>
    </div>
    </>
  );
}
