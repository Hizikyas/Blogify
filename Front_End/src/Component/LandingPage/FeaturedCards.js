const FeaturedCards = ({ icon, title, description }) => {
    return (
      <div className="p-6 rounded-lg shadow-lg bg-white">
        <img src={icon} alt={title} className="mb-4 mx-auto w-[100px] h-20" /> {/* Removed color to default to black */}
        <h3 className="text-2xl font-semibold text-center mb-2">{title}</h3>
        <p className="text-gray-600 text-center">{description}</p>
      </div>
    );
  };
  
  export default FeaturedCards;
  