import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/BIT logo.jpeg"; // Make sure path is correct

const sidebarData = [
  {
    section: null,
    links: [
      { name: "Main page", path: "/" },
      { name: "Hand Book", path: "/handbook" },
      { name: "Academics and Curriculum", path: "/academics" },
      { name: "Student Guidelines and Instructions", path: "/guidelines" },
      { name: "Student Support Desk", path: "/support" },
      { name: "Appeal for Reward Point", path: "/appeal" },
      { name: "Controller of Examinations (CoE) Activities", path: "/coe" },
    ],
  },
  {
    section: "Mentors",
    links: [
      { name: "Student Action Plan(SSIG)", path: "/student-plan" },
      { name: "II Year Mentors", path: "/mentors-ii" },
      { name: "III Year Mentors", path: "/mentors-iii" },
      { name: "IV Year Mentors", path: "/mentors-iv" },
    ],
  },
  {
    section: "Faculty",
    links: [
      { name: "Faculty Action Plan(FAP)", path: "/faculty-plan" },
      { name: "Special Interest Group(SIG)", path: "/sig" },
      { name: "Faculty General Forms & Links", path: "/faculty-forms" },
    ],
  },
  {
    section: "Skill development",
    links: [
      { name: "Special Labs", path: "/labs" },
      { name: "Centre of Excellence (COE)", path: "/coe-centre" },
      { name: "World Skills", path: "/world-skills" },
      { name: "Startup Park", path: "/startup" },
      { name: "Startup Park", path: "/startup-park" },
      { name: "Special Labs Action Plan", path: "/special-labs-action-plan" },
      ],
    },
    {
      section: "Laboratory facilities",
      links: [
        { name: "IIPC", path: "/iipc" },
        { name: "R & D", path: "/r-and-d" },
      ],
    },
    {
      section: "Resource facilities",
      links: [
        { name: "Resources", path: "/resources" },
      ],
    },
    {
      section: "News and bulletins",
      links: [
        { name: "Daily News", path: "/daily-news" },
        { name: "R&D Newsletter", path: "/r-and-d-newsletter" },
        { name: "Special Lab Bulletins", path: "/special-lab-bulletins" },
        { name: "BIT Monthly Newsletter", path: "/bit-monthly-newsletter" },
        { name: "Mentor Bulletins", path: "/mentor-bulletins" },
        { name: "Innovation & StartUp Newsletter", path: "/innovation-startup-newsletter" },
        { name: "Buddies Newsletter", path: "/buddies-newsletter" },
        { name: "IIPC Newsletter", path: "/iipc-newsletter" },
        { name: "Sports Newsletter", path: "/sports-newsletter" },
      ],
    },
    {
      section: "Languages",
      links: [
        { name: "English Language and Communication Cell (ELCC)", path: "/elcc" },
        { name: "Word of the day", path: "/word-of-the-day" },
        { name: "Other Languages", path: "/other-languages" },
      ],
    },
    {
      section: null,
      links: [
        { name: "Careers Home", path: "/careers-home" },
        { name: "Training & Placement Grouping", path: "/training-placement" },
      ],
    },
    {
      section: "Associations @ BIT",
      links: [
        { name: "Clubs and Society", path: "/clubs-society" },
      ],
    },
    {
      section: "Information Corner",
      links: [
        { name: "BIT Community Radio", path: "/bit-community-radio" },
      ],
    },
    {
      section: "IT Facilities and Services",
      links: [
        { name: "IT Facilities and Services", path: "/it-facilities" },
      ],
    },
    {
      section: "IT Policies and Guidelines",
      links: [
        { name: "Video Conferencing Etiquettes", path: "/video-conferencing" },
        { name: "Google Account Storage Guidelines", path: "/google-storage" },
      ],
    },
    {
      section: "Tools",
      links: [
        { name: "What links here", path: "/what-links-here" },
        { name: "Related changes", path: "/related-changes" },
        { name: "Special pages", path: "/special-pages" },
        { name: "Printable version", path: "/printable-version" },
        { name: "Permanent link", path: "/permanent-link" },
        { name: "Page information", path: "/page-information" },
      ],
    },
  ];

const Sidebar = () => {
  return (
    <aside className="w-64 min-h-screen bg-white shadow-lg p-4 border-r overflow-y-auto">
      {/* Logo */}
      <div className="flex justify-center mb-4">
        <img src={logo} alt="BIT Logo" className="h-24 object-contain" />
      </div>

      <ul className="space-y-1 text-sm">
        {sidebarData.map((group, idx) => (
          <div key={idx}>
            {group.section && (
              <h2 className="text-md font-semibold text-gray-700 mt-4 mb-1 border-b pb-1">
                {group.section}
              </h2>
            )}
            {group.links.map((link, i) => (
              <li key={i}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `block px-2 py-1 rounded transition-all 
                    ${isActive ? "text-purple-700 font-semibold underline" : "text-blue-800"} 
                    hover:underline hover:text-purple-700`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </div>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
