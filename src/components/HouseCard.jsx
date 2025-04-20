export default function HouseCard({ image, name, info, location }) {
  return (
    <div className="p-4 text-center">
      <img
        src={image}
        alt={location}
        className="w-full h-64 object-cover rounded-xl mb-4"
        height={450}
      />
      <h2 className="text-xl font-semibold mb-2">{name}</h2>
      <h4 className="text-xl font-semibold mb-2">{location}</h4>

      <p className="text-gray-600">{info}</p>
    </div>
  );
}
