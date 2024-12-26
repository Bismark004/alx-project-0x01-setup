
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, username, email, address, phone, website, company }) => {
  return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
      <p className="text-gray-600">Username: {username}</p>
      <p className="text-gray-600">Email: <a href={`mailto:${email}`} className="text-blue-600">{email}</a></p>
      <div className="mt-4">
        <p className="text-gray-600">Address: {address.street}, {address.suite}, {address.city}, {address.zipcode}</p>
        <p className="text-gray-600">Phone: {phone}</p>
        <p className="text-gray-600">Website: <a href={`https://${website}`} target="_blank" rel="noopener noreferrer" className="text-blue-600">{website}</a></p>
      </div>
      <div className="mt-4 text-gray-600">
        <p>Company: {company.name}</p>
        <p>{company.catchPhrase}</p>
        <p>{company.bs}</p>
      </div>
    </div>
  );
};

export default UserCard;
