import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AgeSelection = () => {
  const navigate = useNavigate();
  const [ageGroup, setAgeGroup] = useState('');

  const handleAgeSelection = (e) => {
    const selectedAge = e.target.value;
    setAgeGroup(selectedAge);
    navigate(`/register/${selectedAge}`);
  };

  return (
    <div className="min-h-screen bg-green-400 flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mb-8">Register Here</h1>
        
        <div className="mb-6">
          <label className="block text-gray-700 mb-2">I AM *</label>
          <select 
            className="w-full p-2 border rounded-md"
            value={ageGroup}
            onChange={handleAgeSelection}
          >
            <option value="">Select Age Group</option>
            <option value="below16">Below 16</option>
            <option value="above16">Above 16</option>
          </select>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Meet Our Partners</h2>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam cupiditate nemo...
          </p>
          
          <div className="grid grid-cols-3 gap-4">
            <img src="/partner1.png" alt="Partner 1" className="w-full" />
            <img src="/partner2.png" alt="Partner 2" className="w-full" />
            <img src="/partner3.png" alt="Partner 3" className="w-full" />
            <img src="/partner4.png" alt="Partner 4" className="w-full" />
            <img src="/partner5.png" alt="Partner 5" className="w-full" />
            <img src="/partner6.png" alt="Partner 6" className="w-full" />
            <img src="/partner7.png" alt="Partner 7" className="w-full" />
            <img src="/partner8.png" alt="Partner 8" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgeSelection;
