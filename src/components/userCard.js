import profile from '../../src/static/images/avatar.png';
const UserCard = ({firstName, lastName, interestedInGender, isMatched, createdAt}) => {
    const joinedAt  = new Date(createdAt).toLocaleDateString();  
    return (
        <div className="border w-100 mx-4 my-4 px-4 py-4 bg-[#e8e8e890]">
            <h2 className="text-3xl text-center pb-4">{firstName} {lastName}</h2>
            <p className='text-center'>Hi I'm {firstName} and I'm interested in meeting {interestedInGender === "M" ? "men" : "women"}</p>
            
            <img className="object-cover w-full rounded-full py-12 px-12" src={profile} />
            <p className='text-center pb-8'>I joined DaterBase on {joinedAt}</p>
            <div className='flex flex-col items-center'>
                <div>
                <button className="text-4xl bg-red-500 rounded-full px-5 py-4 mr-6">N</button>
                <button className="text-4xl bg-red-500 rounded-full px-6 py-4 ml-6"> Y</button>
                </div>
                </div>
        </div>
    )
}
export default UserCard;