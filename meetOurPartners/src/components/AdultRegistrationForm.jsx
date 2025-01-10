import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { registerUser } from '../services/api';
import { mapFormToApiData } from '../utils/formMapper';

const AdultRegistrationForm = () => {
  const navigate = useNavigate();
  const { ageGroup } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    legalName: '',
    surname: '',
    gender: 'Shri',
    phone: '',
    email: '',
    country: 'Bharat',
    state: 'Bharat',
    city: 'Bharat',
    postcode: '',
    idProof: 'Aadhar Number',
    aadharNumber: '',
    nickname: '',
    dob: '',
    localAddress: '',
    contactNumber: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const apiData = mapFormToApiData(formData, false);
      const response = await registerUser(apiData);
      console.log('Registration successful:', response);
      navigate('/login');
    } catch (err) {
      setError(err?.message || 'Registration failed. Please try again.');
      console.error('Registration error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-green-400 p-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        {error && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
            {error}
          </div>
        )}

        <div className="mb-6">
          <label className="inline-flex items-center">
            <span className="text-gray-700 mr-2">I AM *</span>
            <select 
              className="w-48 p-2 border rounded-md"
              value="Above 16"
              disabled
            >
              <option>Above 16</option>
            </select>
          </label>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-x-6 gap-y-4">
          <div>
            <label className="block text-gray-700 mb-1">Legal Name *</label>
            <input
              type="text"
              name="legalName"
              className="w-full p-2 border rounded-md bg-[#f0f9f0]"
              value={formData.legalName}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Surname/Last Name *</label>
            <input
              type="text"
              name="surname"
              className="w-full p-2 border rounded-md bg-[#f0f9f0]"
              value={formData.surname}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Gender *</label>
            <select
              name="gender"
              className="w-full p-2 border rounded-md bg-[#f0f9f0]"
              value={formData.gender}
              onChange={handleChange}
              required
            >
              <option value="Shri">Shri</option>
              <option value="Smt">Smt</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Phone Number *</label>
            <input
              type="tel"
              name="phone"
              className="w-full p-2 border rounded-md bg-[#f0f9f0]"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Email *</label>
            <input
              type="email"
              name="email"
              className="w-full p-2 border rounded-md bg-[#f0f9f0]"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">City *</label>
            <select
              name="city"
              className="w-full p-2 border rounded-md bg-[#f0f9f0]"
              value={formData.city}
              onChange={handleChange}
              required
            >
              <option value="Bharat">Bharat</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 mb-1">State *</label>
            <select
              name="state"
              className="w-full p-2 border rounded-md bg-[#f0f9f0]"
              value={formData.state}
              onChange={handleChange}
              required
            >
              <option value="Bharat">Bharat</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Select your Country *</label>
            <select
              name="country"
              className="w-full p-2 border rounded-md bg-[#f0f9f0]"
              value={formData.country}
              onChange={handleChange}
              required
            >
              <option value="Bharat">Bharat</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Postcode *</label>
            <input
              type="text"
              name="postcode"
              className="w-full p-2 border rounded-md bg-[#f0f9f0]"
              value={formData.postcode}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Select ID Proof *</label>
            <select
              name="idProof"
              className="w-full p-2 border rounded-md bg-[#f0f9f0]"
              value={formData.idProof}
              onChange={handleChange}
              required
            >
              <option value="Aadhar Number">Aadhar Number</option>
              <option value="PAN Card">PAN Card</option>
              <option value="Driving License">Driving License</option>
              <option value="Voter ID">Voter ID</option>
              <option value="Passport">Passport</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 mb-1">ID Number *</label>
            <input
              type="text"
              name="aadharNumber"
              className="w-full p-2 border rounded-md bg-[#f0f9f0]"
              value={formData.aadharNumber}
              onChange={handleChange}
              required
              placeholder="Enter your ID number"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Nickname</label>
            <input
              type="text"
              name="nickname"
              className="w-full p-2 border rounded-md bg-[#f0f9f0]"
              value={formData.nickname}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">DOB *</label>
            <input
              type="date"
              name="dob"
              className="w-full p-2 border rounded-md bg-[#f0f9f0]"
              value={formData.dob}
              onChange={handleChange}
              required
              placeholder="dd-mm-yyyy"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Contact Number *</label>
            <input
              type="tel"
              name="contactNumber"
              className="w-full p-2 border rounded-md bg-[#f0f9f0]"
              value={formData.contactNumber}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-span-2">
            <label className="block text-gray-700 mb-1">Local Address</label>
            <input
              type="text"
              name="localAddress"
              className="w-full p-2 border rounded-md bg-[#f0f9f0]"
              value={formData.localAddress}
              onChange={handleChange}
            />
          </div>

          <div className="col-span-2 flex flex-col items-center gap-4 mt-4">
            <button
              type="submit"
              className="bg-green-500 text-white px-8 py-2 rounded-md hover:bg-green-600 disabled:opacity-50"
              disabled={loading}
            >
              {loading ? 'Submitting...' : 'Sign Up'}
            </button>
            <p className="text-center">
              Already have an account? <Link to="/login" className="text-blue-500">Login</Link>
            </p>
          </div>
        </form>

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

export default AdultRegistrationForm;
