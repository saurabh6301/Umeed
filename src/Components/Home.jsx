import { useState } from "react";
import { guidance } from "../data/guidance";
import Result from "./Result";

export default function Home() {
  const [job, setJob] = useState("");
  const [advice, setAdvice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    searchAdvice(job);
  };

  const searchAdvice = (value) => {

    const found = guidance.find(
      (g) => g.job.toLowerCase() === value.trim().toLowerCase()
    );
    setJob(value); // Input me bhi show kare
    setAdvice(found ? found.advice : "Is kaam ke liye data nahi mila.");
  };

  return (
    <div className="flex flex-col md:flex-row p-6 max-w-6xl mx-auto">
      {/* Story section at the very top */}
      <div className="w-full mb-6 bg-yellow-100 p-4 rounded shadow">
        <h1 className="text-xl font-bold mb-2">Umeed Project — Kahani har us ladke ki jo sapne dekhte hain</h1>
        <p className="text-gray-700">
          Gaon ke kai ladke 15 se 18 saal ke umar mein, ghar ki paresaniyo ke chalte school ya padhai chhod dete hain.
          Kahi baap sharab ke nasha mein ghar todta hai, to kahi gareebi unhe majboor karti hai chhoti naukri karne ke liye.
          Par iska matlab ye nahi ki unmein potential nahi hai. Ye website unhi ke liye hai —
          jahan wo apne kaam ke through career advice paayein aur janiye ki chhoti shuruaat se bhi top tak ka safar tay kiya ja sakta hai.
        </p>
      </div>

      {/* Left side: Buttons */}
      <div className="md:w-1/3 w-full md:pr-6 mb-6 md:mb-0">
        <h2 className="font-bold mb-2">Job List (Click to Guide):</h2>
        <div className="h-[400px] overflow-y-auto space-y-2">
          {guidance.map((g, i) => (
            <button
              key={i}
              onClick={() => searchAdvice(g.job)}
              className="w-full text-left bg-gray-100 hover:bg-blue-100 px-3 py-2 rounded"
            >
              {g.job}
            </button>
          ))}
        </div>
      </div>

      {/* Right side: Form & Result */}
      <div className="md:w-2/3 w-full">
        <h1 className="text-2xl font-bold mb-4">
          Umeed — Apne Kaam Mein Top Tak Pahuncho
        </h1>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            value={job}
            onChange={(e) => setJob(e.target.value)}
            placeholder="Apna kaam likho (e.g. delivery, helper)"
            className="border w-full p-2"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white w-full p-2 rounded"
          >
            Guide Do
          </button>
        </form>

        {advice && <Result text={advice} />}
      </div>
    </div>
  );
}
