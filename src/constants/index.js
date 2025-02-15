import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = ` Motivated and detail-oriented individual with hands-on experience in Software development,
 Skilled at absorbing new knowledge quickly and applying it effectively to deliver practical and
 innovative solutions. Eager to contribute to dynamic environments and strong problem
 solving skills to address real-world challenges. A reliable team player committed to
 continuous learning and growth to drive impactful outcomes.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "Jan 2024 - Present",
    role: "Jr. Software Developer",
    company: "Advait Business Solutions",
    description: `Maintaining web applications using JavaScript, React.js and Redux. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Html", "CSS", "Javascript", "React.js", "Redux", "Bootstrap", "Git", "Tailwind CSS"],
  },
];

export const PROJECTS = [
  {
    title: "P2P Portal",
    image: project2,
    description:
      "  The P2P (Procure to Pay) system streamlines procurement, from sourcing to payment processing,ensuring seamless workflows between purchasing andfinance.",
    technologies: ["React", "Node.js", "Redux", "MySQL"],
  },
  {
    title: "B2B Portal",
    image: project4,
    description:
      "The B2B portal facilitates seamless business interactions between customers and ministrators, offering secure workflows for inquiries, quotations, sales orders, and delivery orders.",
    technologies: ["React", "Node.js", "Redux", "MySQL"],
  },
  {
    title: "On The Sport",
    image: project1,
    description:
      "The sports website features a login page and an Admin Panel for managing sports like cricket, football, and volleyball.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MySQL"],
  },
  {
    title: "NK Proteins",
    image: project3,
    description:
      " Developed a secure B2B portal with OTP-based login, integrating SAP customer data. Features include customer and admin dashboards, sales and delivery orders, contract management, financial details (ledger, credit info), and reporting. Added a blog system for dynamic content management.",
    technologies: ["React", "Node.js", "Redux", "MySQL"],
  },
];

export const CONTACT = {
  address: "Vadodara , Gujarat , 390024",
  phoneNo: "+91 9925538865",
  email: "jashpatel073@gmail.com",
};
