const mongoose = require("mongoose");
const dotenv = require("dotenv");
const User = require("./models/User");
const Project = require("./models/Project");
const Skill = require("./models/Skill");
const connectDB = require("./config/db");

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await User.deleteMany();
    await Project.deleteMany();
    await Skill.deleteMany();

    const adminUser = await User.create({
      username: "admin",
      email: "samarpansarkar209@gmail.com",
      password: "password123", // Change this in production!
    });

    console.log("Admin User Created");

    const projects = [
      {
        name: "Portfolio",
        image: "/icons/portfolio.png",
        stack: ["React", "Tailwind CSS"],
        category: "Web",
        githubLink: "https://github.com/samarpansarkar/portfolio",
        liveLink: "https://portfolio-samarpan.vercel.app/",
      },
      {
        name: "RecipeApp",
        image: "/icons/recipeApp.png",
        stack: ["MERN stack"],
        category: "Full Stack",
        githubLink: "https://github.com/samarpansarkar/MERN-recipe-app",
        liveLink: "https://mern-recipe-app-silk.vercel.app/",
      },
      {
        name: "FoodOrderApp",
        image: "/icons/SpaNFood.png",
        stack: ["MERN stack"],
        category: "Full Stack",
        githubLink: "https://github.com/samarpansarkar/MERN-foodApp",
        liveLink: "https://mern-food-app-one.vercel.app/",
      },
      {
        name: "BookMyStay",
        image: "/icons/BookMyStay.jpg",
        stack: ["MERN stack"],
        category: "Full Stack",
        githubLink: "https://github.com/samarpansarkar/BookMyStay",
        liveLink: "https://book-my-stay-samarpan-sarkars-projects.vercel.app/",
      },
    ];

    await Project.insertMany(projects);
    console.log("Projects Imported");

    const skills = [
      {
        name: "React",
        icon: "https://skillicons.dev/icons?i=react",
        category: "Web Development",
      },
      {
        name: "Next.js",
        icon: "https://skillicons.dev/icons?i=next",
        category: "Web Development",
      },
      {
        name: "Tailwind",
        icon: "/icons/tailwind.svg",
        category: "Web Development",
      },
      {
        name: "MongoDB",
        icon: "/icons/mongodb.svg",
        category: "Web Development",
      },
      {
        name: "HTML",
        icon: "https://skillicons.dev/icons?i=html",
        category: "Web Development",
      },
      {
        name: "Node.js",
        icon: "https://skillicons.dev/icons?i=nodejs",
        category: "Web Development",
      },
      {
        name: "JavaScript",
        icon: "https://skillicons.dev/icons?i=js",
        category: "Web Development",
      },
      {
        name: "MySQL",
        icon: "https://skillicons.dev/icons?i=mysql",
        category: "Web Development",
      },
      {
        name: "C",
        icon: "https://skillicons.dev/icons?i=c",
        category: "Languages",
      },
      {
        name: "Python",
        icon: "https://skillicons.dev/icons?i=python&theme=dark",
        category: "Languages",
      },
      {
        name: "Java",
        icon: "https://skillicons.dev/icons?i=java&theme=light",
        category: "Languages",
      },
      {
        name: "Git",
        icon: "https://skillicons.dev/icons?i=git",
        category: "Tools & Others",
      },
      {
        name: "GitHub",
        icon: "https://skillicons.dev/icons?i=github",
        category: "Tools & Others",
      },
    ];

    await Skill.insertMany(skills);
    console.log("Skills Imported");

    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

importData();
