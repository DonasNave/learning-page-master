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

export const data = [
    {
      id: 1,
      title: "Algoritmy",
      image: "/images/previews/Algorithms.png",
      theory: 
        lessonAlgoritmy,
      tips: [
        "Do X",
        "Do Y"
      ],
      goals: tasksAlgoritmy
    },
    {
      id: 2,
      title: "FlowChart procvičování",
      image: "/images/previews/FlowChart.png",
      description: 
      "Soubor porkočilých ú.",
      theory: lessonFlowChart,
      tips: [
        "Do X",
        "Do Y"
      ],
      goals: tasksFlowChart
    },
    {
      id: 3,
      title: "Úvod do vizuálního programování v EV3",
      image: "/images/previews/Classroom-overview.png",
      description: "",
      theory: lessonEV3Intro,
      tips: [
        "",
        ""
      ],
      goals: tasksEV3Intro
    },
    {
      id: 4,
      title: "Programujeme s jednotkou Brick",
      image: "/images/previews/Brick.png",
      description: "",
      theory: lessonEV3Brick,
      tips: [
        "TestTip",
        ""
      ],
      goals: tasksEV3Brick
    },
    {
      id: 5,
      title: "Podmíněný běh kódu a proměnné",
      image: "/images/previews/TrueFalseDec.png",
      description: "",
      theory: lessonEV3Conditions,
      tips: [
        "",
        ""
      ],
      goals: tasksEV3Conditions
    },
     {
      id: 6,
      title: "Vlastní bloky",
      image: "/images/robot/contact-sensor.png",
      description: "",
      theory: lessonEV3MyBlocks,
      tips: [
        "",
        ""
      ],
      goals: tasksEV3MyBlocks
    },
    {
      id: 7,
      title: "Ovládání robota",
      image: "/images/previews/driving-base.png",
      description: "",
      theory: lessonEV3Sensors,
      tips: [
        "",
        ""
      ],
      goals: tasksEV3Sensors
    },
    {
      id: 8,
      title: "Úvod do programování v Pythonu",
      image: "/images/previews/Comparison.png",
      description: "",
      theory: lessonPythonIntro,
      tips: [
        "",
        ""
      ],
      goals: tasksPythonIntro
    },
    {
      id: 9,
      title: "Opakování a podmíněný průběh programu",
      image: "/images/previews/Repetition.png",
      description: "",
      theory: lessonPythonLoops,
      tips: [
        "",
        ""
      ],
      goals: tasksPythonLoops
    },
    {
      id: 10,
      title: "Třídy a instance",
      image: "/images/previews/Class.png",
      description: "",
      theory: lessonPythonClasses,
      tips: [
        "",
        ""
      ],
      goals: tasksPythonClasses
    },
    {
      id: 11,
      title: "Ovládání robota v MicroPython",
      image: "/images/previews/DrivingBase-old.png",
      description: "",
      theory: lessonMicroPythonIntro,
      tips: [
        "",
        ""
      ],
      goals: tasksMicroPythonIntro
    },
    {
      id: 12,
      title: "Komplexní úlohy s robotem",
      image: "/images/previews/Python-code.png",
      description: "",
      theory: lessonMicroPythonControl,
      tips: [
        "",
        ""
      ],
      goals: tasksMicroPythonControl
    },
    ]