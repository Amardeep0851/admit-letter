import { Calendar } from "lucide-react";

type NewsCardProp = {
  image:string;
  title:string;
  outlet:string;
  link:string;
  date:string
}

const NewsCard = ({ image, title, outlet, link, date }:NewsCardProp) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden bg-gray-100">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-3 right-3 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold uppercase tracking-wide">
          {outlet}
        </div>
      </div>

      {/* Content Container */}
        {/* Outlet Name */}
      <div className="p-5">
        {/* <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-bold text-red-600 uppercase tracking-wider">
            {outlet}
          </span>
          <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-red-600 transition-colors" />
        </div> */}

        {/* Title */}
        <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-red-600 transition-colors leading-snug">
          {title}
        </h3>

        {/* Date */}
        <div className="flex items-center text-sm text-gray-500">
          <Calendar className="w-4 h-4 mr-2" />
          <span>{date}</span>
        </div>

        {/* Read More Indicator */}
        <div className="mt-4 flex items-center text-sm font-semibold text-gray-700 group-hover:text-red-600 transition-colors">
          <span>Read Article</span>
          <svg
            className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </a>
  );
};


export default NewsCard