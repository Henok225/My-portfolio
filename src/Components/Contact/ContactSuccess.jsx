import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import LoadingSpinner from '../loader/LoadingSpinner';

const SuccessMessage = ({ message }) => {
    const navigate = useNavigate(); 
    const [loading, setLoading] = useState(true);
   
    const handleBackToHome = () => {
     navigate('/'); // Navigate back to the home page
     };

     useEffect(()=>{
        setTimeout(()=>{
            setLoading(false);
        },2000)
     },[])
  
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4 font-sans">
        {
            loading ?
            <LoadingSpinner/>
            :
            <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full text-center border-t-4 border-green-500">
            <div className="mb-4">
              {/* Success icon (using a simple SVG checkmark for visual appeal) */}
              <svg
                className="mx-auto h-16 w-16 text-green-500"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Success!</h2>
            <p className="text-gray-600 text-lg">
              {message || "Your request has been processed successfully."}
            </p>
            <div className="mt-6">
              {/* Back to Home button */}
              <button
                onClick={handleBackToHome}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
              >
                Back to Home
              </button>
            </div>
          </div>
        }
       
      </div>
    );
  };
export default SuccessMessage
