import React, { useState, useEffect } from 'react';
import { 
  RefreshCw, 
  Check, 
  Heart, 
  Settings, 
  Share2,
  Plus,
  Minus,
  ChevronRight,
  MoreHorizontal,
  User,
  Activity,
  Pill,
  Bone,
  Clock,
  Watch,
  Menu
} from 'lucide-react';

const HealthDashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedTab, setSelectedTab] = useState('Tracker');
  const [caloriesGoal, setCaloriesGoal] = useState(20000);
  const [workoutProgress, setWorkoutProgress] = useState(139);
  const [breathLevel, setBreathLevel] = useState(89);
  const [dateRange, setDateRange] = useState('Sep 02 - Sep 09');
  const [timeFrame, setTimeFrame] = useState('24h');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const generateActivityData = () => {
    return Array(18).fill(0).map(() => ({
      value: Math.floor(Math.random() * 100),
      month: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'][Math.floor(Math.random() * 7)]
    }));
  };

  const [activityData, setActivityData] = useState(generateActivityData());

  const refreshData = () => {
    setActivityData(generateActivityData());
  };

  const increaseCalories = () => {
    setCaloriesGoal(prev => prev + 100);
  };

  const decreaseCalories = () => {
    setCaloriesGoal(prev => Math.max(0, prev - 100));
  };

  const tabs = ['Tracker', 'MedicalAnalytics', 'FitnessMetrics', 'PatientInsights', 'AI Healthcare'];

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6">
      {/* Title Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8 gap-4">
        <div>
          <h1 className="text-gray-400 text-xl sm:text-2xl mb-1">Health Records</h1>
          <div className="flex items-center">
            <h2 className="text-2xl sm:text-3xl font-bold">Dashboard</h2>
            <div className="ml-2 bg-[#E2FF7D] p-2 rounded-full">*</div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <select 
            className="w-full sm:w-auto bg-gray-100 rounded-full px-4 py-2 focus:outline-none"
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
          >
            <option>Sep 02 - Sep 09</option>
            <option>Sep 09 - Sep 16</option>
            <option>Sep 16 - Sep 23</option>
          </select>
          <select 
            className="w-full sm:w-auto bg-gray-100 rounded-full px-4 py-2 focus:outline-none"
            value={timeFrame}
            onChange={(e) => setTimeFrame(e.target.value)}
          >
            <option>24h</option>
            <option>48h</option>
            <option>72h</option>
          </select>
          <button className="w-full sm:w-auto bg-black text-white rounded-full px-6 py-2 flex items-center justify-center hover:bg-gray-800 transition-colors">
            Weekly
            <ChevronRight className="ml-2 w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Mobile Sidebar Toggle */}
        <button 
          className="lg:hidden fixed bottom-4 right-4 z-50 bg-[#E2FF7D] p-3 rounded-full shadow-lg"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* Left Sidebar */}
        <div className={`fixed lg:relative lg:col-span-1 z-40 transition-all duration-300 ${
          isSidebarOpen ? 'left-0' : '-left-full'
        } lg:left-0`}>
          <div className="hidden md:flex lg:block space-x-4 lg:space-x-0 lg:space-y-6 bg-white lg:bg-transparent p-4 lg:p-0 rounded-r-xl lg:rounded-none shadow-lg lg:shadow-none">
            <button className="w-12 lg:w-full bg-[#E2FF7D] p-3 rounded-full text-center hover:bg-[#d6ff4d] transition-colors">
              <Activity className="w-4 h-4 mx-auto" />
            </button>
            {[Pill, Bone, Heart, Clock, Watch].map((Icon, index) => (
              <button key={index} className="w-12 lg:w-full p-3 text-center hover:bg-gray-100 rounded-full transition-colors">
                <Icon className="w-4 h-4 mx-auto" />
              </button>
            ))}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="lg:col-span-11">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Wellness Section */}
            <div className="lg:col-span-4 bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-[#E2FF7D] w-3 h-3 rounded-full"></div>
                <span>Wellness</span>
              </div>
              <div className="mb-6">
                <div className="text-3xl sm:text-4xl font-bold mb-1">{(caloriesGoal * 0.96825).toFixed(2)}</div>
                <div className="text-sm text-gray-500">KCAL Today</div>
                <div className="text-green-500 text-sm">+16%</div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <div className="font-bold text-xl sm:text-2xl">265</div>
                  <div className="text-sm text-gray-500">KCAL</div>
                  <div className="text-sm">Calories Burned</div>
                </div>
                <div>
                  <div className="font-bold text-xl sm:text-2xl">8</div>
                  <div className="text-sm text-gray-500">2d</div>
                  <div className="text-sm">Workouts Completed</div>
                </div>
              </div>
              <div className="mt-4 flex justify-between">
                <button onClick={increaseCalories} className="hover:bg-gray-100 p-2 rounded-full transition-colors">
                  <Plus className="w-6 h-6" />
                </button>
                <button onClick={decreaseCalories} className="hover:bg-gray-100 p-2 rounded-full transition-colors">
                  <Minus className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Analytics Section */}
            <div className="lg:col-span-8 bg-white rounded-xl p-4 sm:p-6 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-[#E2FF7D] w-3 h-3 rounded-full"></div>
                  <span>Analytics</span>
                </div>
                <div className="text-2xl sm:text-3xl font-bold">
                  {currentTime.toLocaleTimeString('en-US', { 
                    hour: '2-digit', 
                    minute: '2-digit',
                    hour12: true 
                  })}
                </div>
                <div className="text-2xl sm:text-3xl font-bold">98.57°</div>
              </div>
              
              {/* Chart */}
              <div className="h-32 sm:h-48 flex items-end space-x-1">
                {activityData.map((data, i) => (
                  <div
                    key={i}
                    style={{
                      height: `${data.value}%`,
                      backgroundColor: i === 6 ? '#E2FF7D' : '#E5E7EB'
                    }}
                    className="flex-1 rounded-t-lg transition-all duration-300"
                  />
                ))}
              </div>

              {/* Navigation Pills */}
              <div className="flex space-x-4 mt-6 overflow-x-auto pb-2">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setSelectedTab(tab)}
                    className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                      selectedTab === tab ? 'bg-[#E2FF7D]' : 'hover:bg-gray-100'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Bottom Section */}
            <div className="lg:col-span-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Get More Exposure */}
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Get more exposure<br />and monitor<br />with precision</h3>
                  <p className="text-sm text-gray-600 mb-6">
                    Experience a new era of healthcare with our AI-powered blockchain platform. 
                    Keep a watchful eye on your heart's BPM like never before.
                  </p>
                  <div className="flex space-x-4">
                    <button className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors">
                      Get App
                    </button>
                    <button className="text-gray-600 hover:text-gray-800 transition-colors">
                      Learn more
                    </button>
                  </div>
                </div>

                {/* Breath Monitor */}
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-xl font-bold mb-4">TAKE A<br />BREATH NOW</h3>
                  <div className="flex items-center space-x-4">
                    <div className="bg-[#E2FF7D] rounded-full p-6 sm:p-8 flex items-center justify-center">
                      <span className="text-2xl sm:text-3xl font-bold">{breathLevel}</span>
                      <span className="text-sm">bpm</span>
                    </div>
                    <div className="flex flex-col space-y-2">
                      <span className="text-sm">Breath Level is Normal now: 12</span>
                      <div className="flex space-x-2">
                        <div className="w-2 h-2 rounded-full bg-[#E2FF7D]"></div>
                        <div className="w-2 h-2 rounded-full bg-gray-200"></div>
                        <div className="w-2 h-2 rounded-full bg-gray-200"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Workout Section */}
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
                    <div className="bg-[#E2FF7D] w-3 h-3 rounded-full"></div>
                    <span>Workout</span>
                    <span className="text-gray-400">Time Tracking</span>
                    <span className="text-green-500">+18%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <img 
                      src="https://res.cloudinary.com/peloton-cycle/image/fetch/f_auto,c_limit,w_1200,q_90/https://images.ctfassets.net/6ilvqec50fal/6tlnfSc4xZL51Xtm0R1bq4/a9d3d6230b8d31c069a0f65f0c540210/manrunningoutside.jpg" 
                      alt="Exercise demonstration" 
                      className="rounded-xl w-24 h-24 object-cover"
                    />
                    <div className="text-3xl sm:text-4xl font-bold">
                      {workoutProgress}<span className="text-sm text-gray-400">/150h</span>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-between items-center flex-wrap gap-4">
                    <div>
                      <span className="text-xl sm:text-2xl font-bold">97.5%</span>
                      <div className="text-sm text-gray-500">Oxygen</div>
                    </div>
                    <div>
                      <span className="text-xl sm:text-2xl font-bold">89<span className="text-sm">bpm</span></span>
                      <div className="text-sm text-gray-500">+7% from last week</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthDashboard;