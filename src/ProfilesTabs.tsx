import { useState } from "react"


function Profile(name:string,url:string,bio:string){
    return(
        <div>
        <img src={url} className="rounded-full size-64 "/>
        <div className="text-lg">{bio}</div>
    </div>
    )
}

const profiles = [
    {
        name: 'nicki',
        profilePicUrl: 'nicki.png',
        bio: 'my bio'
    },
    {
        name: 'jake',
        profilePicUrl: 'jake.png',
        bio: 'my bio'
    },
    {
        name: 'nicki',
        profilePicUrl: 'nicki.png',
        bio: 'my bio'
    }
]

function ProfilesTabs() {

    // I think that I can get a type which is a reference to all of the indexes of Profiles
    // but anyway don't worry about it for now.
    const [selectedProfile, setSelectedProfile] = useState<number>(0)

    return (
        <div>
            {/* eventually i want this to be the abstraction, but for now i will build it inline. */}
            {/* <TabSelector selectedProfile setSelectedProfile /> */}
            <div className="flex flex-row">
                {profiles.map((profile, index) =>
                <button onClick={() => setSelectedProfile(index)} key={profile.name}>{profile.name}</button>)
                }
            </div>
            <Profile {...profiles[selectedProfile]} />
        </div>
    )

}

export default ProfilesTabs