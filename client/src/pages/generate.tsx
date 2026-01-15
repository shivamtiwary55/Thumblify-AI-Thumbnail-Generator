import { useState } from "react";
import { useParams } from "react-router-dom";
import type { IThumbnail } from "../assets/assets";
import SoftBackdrop from "../components/SoftBackdrop";

const Generate = () => {
  const { id } = useParams();

  // 1:01:10 - 1:11:00: Instructor adds these 5 main state variables
  const [title, setTitle] = useState("");
  const [additionalDetails, setAdditionalDetails] = useState("");
  const [aspectRatio, setAspectRatio] = useState("16:9");
  const [style, setStyle] = useState("Digital Art");
  const [colorScheme, setColorScheme] = useState("Vibrant");

  const [thumbnail, setThumbnail] = useState<IThumbnail | null>(null);
  const [loading, setLoading] = useState(false);

  return (
    <>
      <SoftBackdrop />
      <div className="pt-24 min-h-screen">
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-28 lg:pb-8">
          
          {/* 1:06:10 - Grid layout with 400px left column */}
          <div className="grid lg:grid-cols-[400px_1fr] gap-8">
            
            {/* LEFT PANEL: Inputs (Form) */}
            <div className={`space-y-6 ${id && 'pointer-events-none'}`}>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/12 shadow-xl space-y-6 backdrop-blur-sm">
                <div>
                  <h2 className="text-xl font-semibold text-white">Create Your Thumbnail</h2>
                  <p className="text-sm text-gray-400">Describe your vision and let AI bring it to life</p>
                </div>

                <div className="space-y-4">
                  {/* Topic/Title Input */}
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Topic or Title</label>
                    <input 
                      type="text" 
                      placeholder="e.g. How to build a React App"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="w-full bg-white/5 border border-white/12 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-pink-500 outline-none transition placeholder:text-white/20"
                    />
                  </div>

                  {/* 1:07:15 - Aspect Ratio & Style Selectors */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Aspect Ratio</label>
                      <select 
                        value={aspectRatio}
                        onChange={(e) => setAspectRatio(e.target.value)}
                        className="w-full bg-white/5 border border-white/12 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-pink-500 outline-none transition [&>option]:bg-[#1a1a1a]"
                      >
                        <option value="16:9">16:9</option>
                        <option value="4:3">4:3</option>
                        <option value="1:1">1:1</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Style</label>
                      <select 
                        value={style}
                        onChange={(e) => setStyle(e.target.value)}
                        className="w-full bg-white/5 border border-white/12 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-pink-500 outline-none transition [&>option]:bg-[#1a1a1a]"
                      >
                        <option value="Digital Art">Digital Art</option>
                        <option value="Realistic">Realistic</option>
                        <option value="Cinematic">Cinematic</option>
                        <option value="Anime">Anime</option>
                      </select>
                    </div>
                  </div>

                  {/* 1:10:45 - Color Scheme Selector Added */}
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Color Scheme</label>
                    <select 
                      value={colorScheme}
                      onChange={(e) => setColorScheme(e.target.value)}
                      className="w-full bg-white/5 border border-white/12 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-pink-500 outline-none transition [&>option]:bg-[#1a1a1a]"
                    >
                      <option value="Vibrant">Vibrant</option>
                      <option value="Dark">Dark</option>
                      <option value="Pastel">Pastel</option>
                      <option value="Monochrome">Monochrome</option>
                    </select>
                  </div>

                  {/* Additional Prompt (Textarea) */}
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Additional Prompt (Optional)</label>
                    <textarea 
                      placeholder="e.g. Add a 3D robot holding a sign"
                      value={additionalDetails}
                      onChange={(e) => setAdditionalDetails(e.target.value)}
                      className="w-full bg-white/5 border border-white/12 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-pink-500 outline-none transition resize-none h-28 placeholder:text-white/20"
                    />
                  </div>

                  {/* 1:12:45 - Button with loading state */}
                  <button 
                    disabled={loading}
                    className="w-full bg-pink-600 hover:bg-pink-700 disabled:opacity-50 text-white font-semibold py-4 rounded-xl transition-all active:scale-[0.98] shadow-lg shadow-pink-500/20"
                  >
                    {loading ? "Generating..." : "Generate Thumbnail"}
                  </button>
                </div>
              </div>
            </div>

            {/* 1:13:30 - RIGHT PANEL: Preview Placeholder */}
            <div className="relative group">
               <div className="bg-white/5 border border-white/12 rounded-3xl p-4 md:p-8 flex flex-col items-center justify-center min-h-[450px] backdrop-blur-sm overflow-hidden">
                  {thumbnail ? (
                    <img src={thumbnail.imageUrl} alt="Generated" className="w-full h-auto rounded-xl shadow-2xl" />
                  ) : (
                    <div className="text-center space-y-4">
                      <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto border border-white/10 text-gray-500">
                        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                        </svg>
                      </div>
                      <p className="text-gray-500 text-sm max-w-[200px]">Your generated thumbnail will appear here</p>
                    </div>
                  )}
               </div>
            </div>

          </div>
        </main>
      </div>
    </>
  );
};

export default Generate;