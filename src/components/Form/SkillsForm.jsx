import React, { useState, useEffect } from "react";
import { useResumeContext } from "../../context/ResumeContext";

const SkillsForm = () => {
  const { resumeData, updateSkills } = useResumeContext();
  const { skills } = resumeData;

  const [skillsInput, setSkillsInput] = useState("");

  // Update the input field when skills change
  useEffect(() => {
    setSkillsInput(skills.join(", "));
  }, [skills]);

  const handleSkillsChange = (e) => {
    setSkillsInput(e.target.value);

    // Convert comma-separated string to array, trim whitespace
    const newSkills = e.target.value
      .split(",")
      .map((skill) => skill.trim())
      .filter((skill) => skill !== "");

    updateSkills(newSkills);
  };

  const removeSkill = (skillToRemove) => {
    const newSkills = skills.filter((skill) => skill !== skillToRemove);
    updateSkills(newSkills);
  };

  return (
    <div className="p-4 bg-white rounded-b-lg shadow">
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Skills (comma separated)
        </label>
        <textarea
          className="w-full p-2 border rounded h-24"
          value={skillsInput}
          onChange={handleSkillsChange}
          placeholder="e.g., JavaScript, React, Teamwork, Communication"
        ></textarea>
      </div>

      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Your Skills:
        </label>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-200 px-3 py-1 rounded-full text-sm flex items-center gap-1"
            >
              <span>{skill}</span>
              <button
                onClick={() => removeSkill(skill)}
                className="text-gray-500 hover:text-gray-700 font-bold text-xs"
                aria-label={`Remove ${skill}`}
              >
                ×
              </button>
            </div>
          ))}
          {skills.length === 0 && (
            <p className="text-gray-500 text-sm">No skills added yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SkillsForm;
