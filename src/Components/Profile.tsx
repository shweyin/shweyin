import { useState } from "react";
import Sprite from "../Assets/sprite.png";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "./UI/Card";
import { Link } from "react-router-dom";
import ArrowDownward from "@mui/icons-material/ArrowDownward";

const Profile = () => {
  const charInfo = [
    { label: "Name", value: "Shweyin Than" },
    {
      label: "Age",
      value:
        new Date() > new Date(new Date().getFullYear(), 5, 18)
          ? new Date().getFullYear() - 1998
          : new Date().getFullYear() - 1998 - 1,
    },
    { label: "Spawn Point", value: "Canada" },
    {
      label: "Class",
      value: "Software Developer",
    },
    { label: "Equipped Weapon", value: "Umbrella" },
    { label: "Languages", value: "English, Japanese" },
    {
      label: "Hobbies",
      value: "Video Games, Motorcycles, Guitar",
    },
    { label: "Favourite Food", value: "Ramen at 12am" },
  ];

  const skills = [
    { title: "Frontend", value: 80, color: "#3a3ae1", id: "frontend" },
    { title: "Backend", value: 70, color: "#3e8c3e", id: "backend" },
    { title: "Wordpress", value: 65, color: "#ff2f2f", id: "wordpress" },
  ];

  const [skillDowns, setSkillDowns] = useState({
    frontend: {
      skills: "React, Javascript, HTML, SCSS, TailwindCSS",
      show: false,
    },
    backend: { skills: "C++, Python, Java, Firebase, SQL", show: false },
    wordpress: { skills: "Oxygen", show: false },
  });

  return (
    <div className="flex flex-col gap-5 p-10">
      <div className="flex md:flex-row flex-col gap-5">
        <Card className="md:self-start">
          <div className="flex flex-col">
            <div className="flex gap-1 items-center">
              <span className="bg-stone-500 rounded-md px-2 py-1 text-black">
                Lv.
                {new Date() > new Date(new Date().getFullYear(), 5, 18)
                  ? new Date().getFullYear() - 1998
                  : new Date().getFullYear() - 1998 - 1}
              </span>
              Software Developer
            </div>
            <img
              className="max-w-full max-h-[600px] h-auto object-contain"
              src={Sprite}
              alt="Shweyin Than Character Sprite"
            />
            <div className="grid grid-cols-[auto_1fr] gap-x-5 gap-y-3">
              HP:
              <span className="flex grow rounded-sm justify-center bg-red-500">
                100 / 100
              </span>
              MP:
              <span className="flex grow rounded-sm justify-center bg-blue-500">
                100 / 100
              </span>
            </div>
          </div>
        </Card>

        <Card className={`flex flex-col gap-5 grow`}>
          <div className="text-2xl pb-3">Stats</div>
          <form className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-5">
            {charInfo.map((item, index) => (
              <div
                className="flex flex-col gap-3"
                key={`${item.label}-${index}`}
              >
                <label>{item.label}</label>
                <input
                  className="rounded-sm px-3 py-1 bg-zinc-800"
                  disabled
                  value={item.value}
                />
              </div>
            ))}
          </form>

          <div className="flex flex-col gap-5 pt-5">
            <div className="text-2xl pb-3">Skills</div>
            <div className="flex flex-col max-md:gap-5 md:flex-row">
              <div className="grow">
                {skills.map((item, index) => (
                  <div
                    className="flex flex-col gap-3 grow"
                    key={`${item.title}-${index}`}
                  >
                    <label className="flex gap-2">
                      {item.title}
                      <button
                        onClick={() =>
                          setSkillDowns({
                            ...skillDowns,
                            [item.id]: {
                              ...skillDowns[item.id],
                              show: !skillDowns[item.id].show,
                            },
                          })
                        }
                      >
                        {skillDowns[item.id].show ? (
                          <FontAwesomeIcon icon={faCaretUp} />
                        ) : (
                          <FontAwesomeIcon icon={faCaretDown} />
                        )}
                      </button>
                    </label>

                    <AnimatePresence exitBeforeEnter>
                      {skillDowns[item.id].show && (
                        <motion.div
                          key={item.id}
                          initial={{ scaleY: 0 }}
                          animate={{ scaleY: 1 }}
                          exit={{ scaleY: 0 }}
                          style={{ originY: 0 }}
                          transition={{
                            duration: 0.1,
                            type: "tween",
                            ease: "linear",
                          }}
                        >
                          {skillDowns[item.id].skills}
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div
                      className="flex mx-0 mb-3"
                      style={{
                        width: `${item.value}%`,
                      }}
                    >
                      <span
                        className="flex justify-center h-2 w-full"
                        style={{
                          backgroundColor: item.color,
                        }}
                      ></span>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                to="/projects"
                className="flex self-end gap-1 items-center animate-bounce hover:opacity-80 transition-opacity duration-75"
              >
                View My Projects
                <ArrowDownward />
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Profile;
