//#region Import lekcí
import { lessonAlgoritmy, tasksAlgoritmy } from "../Lessons/FCAlgorithms"
import { lessonFlowChart, tasksFlowChart } from "../Lessons/FCPatterns";
import { lessonEV3Intro, tasksEV3Intro } from "../Lessons/EV3Intro";
import { lessonEV3Brick, tasksEV3Brick } from "../Lessons/EV3BrickProgramming";
import { lessonEV3Conditions, tasksEV3Conditions } from "../Lessons/EV3Conditions";
import { lessonEV3Sensors, tasksEV3Sensors } from "../Lessons/EV3Sensors";
import { lessonEV3MyBlocks, tasksEV3MyBlocks } from "../Lessons/EV3MyBlocks";
import { lessonPythonIntro, tasksPythonIntro } from "../Lessons/PythonIntro";
import { lessonPythonLoops, tasksPythonLoops } from "../Lessons/PythonLoops";
import { lessonPythonClasses, tasksPythonClasses } from "../Lessons/PythonClasses";
import { lessonMicroPythonIntro, tasksMicroPythonIntro } from "../Lessons/MicroPythonIntro";
import { lessonMicroPythonControl, tasksMicroPythonControl } from "../Lessons/MicroPythonControl";


//#endregion Import lekcí

const sectionFW = ['Základy algoritmizace', 'green'];
const sectionEV3 = ['Vizuální programování EV3', 'PaleVioletRed'];
const sectionPyt = ['Programování v Python', 'lightblue'];

export const data = [
    {
      id: 1,
      title: "Algoritmy",
      image: "/images/previews/algorithm.png",
      theory: 
        lessonAlgoritmy,
      section: sectionFW,
      goals: tasksAlgoritmy
    },
    {
      id: 2,
      title: "FlowChart procvičování",
      image: "/images/previews/FlowChart.png",
      theory: lessonFlowChart,
      section: sectionFW,
      goals: tasksFlowChart
    },
    {
      id: 3,
      title: "Úvod do vizuálního programování v EV3",
      image: "/images/previews/Classroom-overview.png",      
      theory: lessonEV3Intro,
      section: sectionEV3,
      goals: tasksEV3Intro
    },
    {
      id: 4,
      title: "Programujeme s jednotkou Brick",
      image: "/images/previews/Brick.png",
      theory: lessonEV3Brick,
      section: sectionEV3,
      goals: tasksEV3Brick
    },
    {
      id: 5,
      title: "Podmíněný běh kódu a proměnné",
      image: "/images/previews/Intro-5.png",      
      theory: lessonEV3Conditions,
      section: sectionEV3,
      goals: tasksEV3Conditions
    },
     {
      id: 6,
      title: "Vlastní bloky",
      image: "/images/previews/block-custom-def.PNG",     
      theory: lessonEV3MyBlocks,
      section: sectionEV3,
      goals: tasksEV3MyBlocks
    },
    {
      id: 7,
      title: "Ovládání robota",
      image: "/images/previews/driving-base.png",      
      theory: lessonEV3Sensors,
      section: sectionEV3,
      goals: tasksEV3Sensors
    },
    {
      id: 8,
      title: "Úvod do programování v Pythonu",
      image: "/images/previews/Comparison.png",     
      theory: lessonPythonIntro,
      section: sectionPyt,
      goals: tasksPythonIntro
    },
    {
      id: 9,
      title: "Opakování a podmíněný průběh programu",
      image: "/images/previews/Repetition.png",
      theory: lessonPythonLoops,
      section: sectionPyt,
      goals: tasksPythonLoops
    },
    {
      id: 10,
      title: "Třídy a instance",
      image: "/images/previews/Class.png",
      theory: lessonPythonClasses,
      section: sectionPyt,
      goals: tasksPythonClasses
    },
    {
      id: 11,
      title: "Ovládání robota v MicroPython",
      image: "/images/previews/DrivingBase-old.png",
      theory: lessonMicroPythonIntro,      
      section: sectionPyt,
      goals: tasksMicroPythonIntro
    },
    {
      id: 12,
      title: "Komplexní úlohy s robotem",
      image: "/images/previews/Python-code.png",
      theory: lessonMicroPythonControl,      
      section: sectionPyt,
      goals: tasksMicroPythonControl
    },
    ]